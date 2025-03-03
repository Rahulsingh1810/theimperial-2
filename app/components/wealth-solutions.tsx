"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function WealthSolutions() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    const animation = ticker.animate([{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }], {
      duration: 15000,
      iterations: Number.POSITIVE_INFINITY,
    })

    return () => {
      animation.cancel()
    }
  }, [])

  return (
    <div className="bg-[#08225a] text-white min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          <div className="flex-1">
            <div className="mb-16">
              <h2 className="text-lg">
                PRIVATE WEALTH SOLUTIONS
                <span className="block w-24 h-0.5 bg-white mt-2"></span>
              </h2>
            </div>

            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[4rem] font-sans !important">
              Empowering Investors, 
              
                
                Enduring Wealth for Institutions and
                
                Individuals.
              </h1>

              <p className="text-lg max-w-md mb-12 leading-10">
              Alpha Generation: Driving exceptional returns for our investors and ourselves.<br/>
                  Trusted Partnership: A commitment to integrity and excellence.<br/>
                  Resilient Wealth Strategies: Adapting to change while staying future-focused.<br/>
                  Visionary Leadership: Driving innovation and strategic foresight in every decision.<br/>
                  Long-Term Value Creation: Sustainable growth through strategic planning.<br/>
                  Dynamic Portfolio Solutions: Optimizing investments for sustained success.<br/>
              </p>

              <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
                <Link href="/what-we-do/" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-[#08225a] p-8 pt-20 rounded-lg">
              <div className="border-b border-white/20 pb-8 mb-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">
                    Equities
                  </h3>
                  <Link href="/what-we-do/">
                    <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="border-b border-white/20 pb-8 mb-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">
                    Commodities
                  </h3>
                  <Link href="/what-we-do/">
                    <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="border-b border-white/20 pb-8 mb-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">
                    Fixed Income
                  </h3>
                  <Link href="/what-we-do/">
                    <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="border-b border-white/20 pb-8 mb-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">
                    Currencies
                  </h3>
                  <Link href="/what-we-do/">
                    <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* Ticker section */}
       
      </div>
      <div className="mt-24 -mx-6 md:-mx-12 overflow-hidden relative bg-pantone-dark">
          <div
            ref={tickerRef}
            className="whitespace-nowrap   font-[800] text-7xl md:text-8xl lg:text-[12rem] py-8"
            style={{
              WebkitTextStroke: "1px white",
              color: "white",
            }}
          >
            THE IMPERIAL CREST
          </div>
        </div>
    </div>

    
  )
}

