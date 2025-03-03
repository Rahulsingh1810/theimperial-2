import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-pantone-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Logo Column */}
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="inline-block">
              <h2 className="text-xl bg-zinc-100 p-4 text-pantone-dark backdrop-blur-lg opacity-90">
                The Imperial Crest
              </h2>
            </Link>
            <p className='mt-4 text-pantone-gray max-w-[400px]'></p>
          </div>

          {/* Right side links - using flex for equal spacing */}
          <div className="flex flex-row gap-8 lg:gap-24 justify-between">
            {/* Social Column */}
            <div>
              <h3 className="text-lg font-light mb-6">Social</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:text-gray-300 flex items-center">
                    <FaLinkedin className="mr-2" /> 
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 flex items-center">
                    <FaInstagram className="mr-2" /> 
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 flex items-center">
                    <FaTwitter className="mr-2" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 flex items-center">
                    <FaFacebook className="mr-2" /> 
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 flex items-center">
                    <FaYoutube className="mr-2" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch Column */}
            <div>
              <h3 className="text-lg font-light mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-gray-300">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Our Offices</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Limited Partner Login</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-pantone-gray">
            <div className="text-left">
              <p>&copy; 2025 "The Imperial Crest" is the trademark of Thinktank IFSC Pvt. Ltd. All rights reserved.</p>
            </div>
            <div>
              <ul className="flex flex-wrap md:justify-end justify-start gap-4 text-pantone-gray mt-5">
                <li><Link target='_blank' href="/Transparency and Disclosure.pdf" className="hover:underline text-sm">Transparency & Disclosure</Link></li>
                <li><Link target='_blank' href="/Legal.pdf" className="hover:underline text-sm">Legal</Link></li>
                <li><Link target='_blank' href="/Privacy Centre.pdf" className="hover:underline text-sm">Privacy Center</Link></li>
                <li><Link target='_blank' href="/Phishing and Fraud Awareness.pdf" className="hover:underline text-sm">Phishing and Fraud Awareness</Link></li>
                
                <li><Link target='_blank' href="/Do Not Sell or Share My Personal Information.pdf" className="hover:underline text-sm">Do Not Sell or Share My Personal Information</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}