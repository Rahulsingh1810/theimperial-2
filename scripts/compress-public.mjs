import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, '../public');

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalStats = fs.statSync(filePath);
  const originalSize = originalStats.size;

  try {
    const inputBuffer = fs.readFileSync(filePath);
    const image = sharp(inputBuffer);
    const metadata = await image.metadata();

    // Cap maximum dimension to 2560px for ultra-sharp 4K web display without excessive raw camera dimensions
    let pipeline = image.resize({
      width: metadata.width && metadata.width > 2560 ? 2560 : undefined,
      height: metadata.height && metadata.height > 2560 ? 2560 : undefined,
      withoutEnlargement: true,
      fit: 'inside',
    });

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: 82,
        progressive: true,
        mozjpeg: true,
      });
    } else if (ext === '.png') {
      pipeline = pipeline.png({
        quality: 85,
        compressionLevel: 9,
        palette: true,
      });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({
        quality: 82,
      });
    } else {
      return null;
    }

    const outputBuffer = await pipeline.toBuffer();
    const newSize = outputBuffer.length;

    if (newSize < originalSize) {
      fs.writeFileSync(filePath, outputBuffer);
      return { originalSize, newSize, saved: originalSize - newSize, file: path.basename(filePath) };
    } else {
      return { originalSize, newSize: originalSize, saved: 0, file: path.basename(filePath), skipped: true };
    }
  } catch (err) {
    console.error(`\nError compressing image ${filePath}:`, err.message);
    return null;
  }
}

function compressVideo(filePath) {
  return new Promise((resolve) => {
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;
    const ext = path.extname(filePath);
    const tempFilePath = path.join(os.tmpdir(), `compressed_${Date.now()}_${Math.random().toString(36).substring(7)}${ext}`);

    if (!ffmpegPath) {
      console.warn('\nffmpeg-static binary not found, skipping video compression.');
      resolve(null);
      return;
    }

    // Video compression settings: H.264 CRF 25, preset slow, faststart for instant web streaming
    // yuv420p for max browser compatibility, aac audio 128k
    const args = [
      '-y',
      '-i', filePath,
      '-c:v', 'libx264',
      '-crf', '25',
      '-preset', 'slow',
      '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart',
      '-c:a', 'aac',
      '-b:a', '128k',
      '-max_muxing_queue_size', '1024',
      tempFilePath
    ];

    const proc = spawn(ffmpegPath, args, { stdio: ['ignore', 'ignore', 'ignore'] });

    proc.on('close', (code) => {
      if (code === 0 && fs.existsSync(tempFilePath)) {
        const newStats = fs.statSync(tempFilePath);
        const newSize = newStats.size;

        if (newSize < originalSize) {
          try {
            fs.copyFileSync(tempFilePath, filePath);
            fs.unlinkSync(tempFilePath);
            resolve({ originalSize, newSize, saved: originalSize - newSize, file: path.basename(filePath) });
          } catch (e) {
            console.error(`\nFailed to overwrite ${filePath}:`, e.message);
            if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);
            resolve(null);
          }
        } else {
          fs.unlinkSync(tempFilePath);
          resolve({ originalSize, newSize: originalSize, saved: 0, file: path.basename(filePath), skipped: true });
        }
      } else {
        if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);
        console.error(`\nFFmpeg failed on ${filePath} with code ${code}`);
        resolve(null);
      }
    });

    proc.on('error', (err) => {
      if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);
      console.error(`\nFFmpeg error on ${filePath}:`, err.message);
      resolve(null);
    });
  });
}

async function main() {
  console.log(`=====================================================`);
  console.log(` Starting Asset Compression in: ${PUBLIC_DIR}`);
  console.log(`=====================================================\n`);

  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('Public directory does not exist!');
    process.exit(1);
  }

  const files = fs.readdirSync(PUBLIC_DIR);
  let totalOriginal = 0;
  let totalNew = 0;
  const results = [];

  for (const file of files) {
    const fullPath = path.join(PUBLIC_DIR, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    totalOriginal += stat.size;

    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      process.stdout.write(`📸 Compressing image: ${file}... `);
      const res = await compressImage(fullPath);
      if (res && !res.skipped) {
        results.push(res);
        totalNew += res.newSize;
        const pct = ((res.saved / res.originalSize) * 100).toFixed(1);
        console.log(`✓ ${formatBytes(res.originalSize)} -> ${formatBytes(res.newSize)} (${pct}% reduction)`);
      } else if (res && res.skipped) {
        totalNew += stat.size;
        console.log(`✓ Already optimal`);
      } else {
        totalNew += stat.size;
        console.log('⚠ Skipped');
      }
    } else if (['.mp4', '.mov'].includes(ext)) {
      process.stdout.write(`🎥 Compressing video: ${file}... `);
      const res = await compressVideo(fullPath);
      if (res && !res.skipped) {
        results.push(res);
        totalNew += res.newSize;
        const pct = ((res.saved / res.originalSize) * 100).toFixed(1);
        console.log(`✓ ${formatBytes(res.originalSize)} -> ${formatBytes(res.newSize)} (${pct}% reduction)`);
      } else if (res && res.skipped) {
        totalNew += stat.size;
        console.log(`✓ Already optimal`);
      } else {
        totalNew += stat.size;
        console.log('⚠ Skipped');
      }
    } else {
      totalNew += stat.size;
    }
  }

  const totalSaved = totalOriginal - totalNew;
  const totalSavedPct = totalOriginal > 0 ? ((totalSaved / totalOriginal) * 100).toFixed(1) : 0;

  console.log('\n=====================================================');
  console.log('               COMPRESSION SUMMARY                  ');
  console.log('=====================================================');
  console.log(` Original total size:   ${formatBytes(totalOriginal)}`);
  console.log(` Compressed total size: ${formatBytes(totalNew)}`);
  console.log(` Total space saved:     ${formatBytes(totalSaved)} (${totalSavedPct}% reduction)`);
  console.log('=====================================================\n');
}

main().catch(err => {
  console.error('Fatal error during compression:', err);
  process.exit(1);
});
