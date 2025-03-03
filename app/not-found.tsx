import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { TrendingDown, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <TrendingDown className="h-24 w-24 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">404 - Market Volatility</h1>
          <p className="text-center text-gray-600 mb-8">
            Oops! It seems you've encountered unexpected market turbulence. The asset you're looking for can't be found in our portfolio.
          </p>
          <div className="flex flex-col space-y-4">
            <Button asChild variant="default" className="w-full">
              <Link href="/" className="flex items-center justify-center">
                <Home className="mr-2 h-4 w-4" />
                Return to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact" className="flex items-center justify-center">
                <Search className="mr-2 h-4 w-4" />
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            The Imperial Crest: Navigating market complexities with precision and expertise.
          </p>
        </div>
      </div>
    </div>
  )
}

