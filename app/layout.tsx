import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { Crimson_Text } from 'next/font/google'
import { Inter } from "next/font/google"

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'The Imperial Crest | Leading Hedge Fund',
  description: 'The Imperial Crest is a premier hedge fund offering innovative investment strategies and exceptional returns.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

