import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import VideoPlayer from '../components/VideoPlayer'

export default function WhatWeDo() {
  return (
    <div className="bg-white py-5">
      <div className="container mx-auto px-4">
        
        
        <section className="mb-20">
          <div className="flex justify-center w-full bg-white md:py-16">
                  <VideoPlayer src='/What We Do Low Res.mov'></VideoPlayer>
                </div>
          <h2 className="text-4xl pt-10  mb-10 text-center text-pantone-dark/90">Trading. Research. Tech.</h2>
          <div className="flex flex-wrap justify-center gap-6">
  {[
    { src: '/Collage-1.jpg', alt: 'Trading' },
    { src: '/Collage-2.jpg', alt: 'Research' },
    { src: '/Collage-3.jpg', alt: 'Tech' },
    { src: '/Collage-4.jpg', alt: 'Innovation' },
    { src: '/Collage-5.jpg', alt: 'Strategy' },
  ].map((item, index) => (
    <Card key={index} className="w-[220px] shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        <Image 
          src={item.src} 
          alt={item.alt} 
          width={300} 
          height={500} 
          className=" w-[300px] h-[400px] object-cover"
        />
      </CardContent>
    </Card>
  ))}
</div>

          <h3 className='text-4xl pt-10 mb-10 text-left text-pantone-dark/90'> Equities</h3>
          <p className='text-xl mb-6 text-justify'> The equities market facilitates the buying and selling of company shares, representing ownership stakes in publicly traded corporations, across primary and secondary exchanges. Traders and investors deploy a range of strategies, from value investing, focusing on fundamentally undervalued stocks, to momentum trading, capitalizing on short-term price trends, and pairs trading, exploiting price relationships between correlated stocks. Market movements are driven by earnings reports, economic data, interest rates, and geopolitical events. Participants include retail investors, institutional funds, market makers, and algorithmic traders. Advances in technology have led to the proliferation of high-frequency trading, enhancing liquidity but raising concerns over market stability. The equities market remains a cornerstone of global capital formation, wealth creation, and corporate funding.  </p>
        

          <h3 className='text-4xl mb-10 text-left text-pantone-dark/90'> Commodities </h3>
          <p className='text-xl mb-6 text-justify'>The commodities trading market facilitates the global exchange of raw materials like energy, metals, and agricultural products through physical and derivative contracts, operating across spot, futures, and options markets. Traders deploy diverse strategies, including trend-following to capture sustained price movements, arbitrage to exploit price differences across markets, and spread trading to profit from relative price shifts between related commodities. Pricing dynamics are influenced by supply-demand imbalances, geopolitical risks, and macroeconomic indicators. Participants range from producers and consumers managing operational risks to institutional investors and speculators seeking profit. Advanced technology and algorithmic trading enhance speed and efficiency, but volatility, regulatory scrutiny, and market transparency remain critical challenges, shaping the global trade landscape and economic stability.  </p>

          <h3 className='text-4xl  mb-10 text-left text-pantone-dark/90'> Fixed Income</h3>
          <p className='text-xl mb-6 text-justify'>The fixed income market, a critical component of global finance, facilitates the trading of debt securities, including government bonds, corporate bonds, and mortgage-backed securities. Investors deploy a variety of strategies, such as yield curve positioning to profit from interest rate shifts, credit spread trading to capitalize on changes in creditworthiness, and duration management to mitigate interest rate risk. Market dynamics are influenced by macroeconomic factors, central bank policies, inflation trends, and credit ratings. Participants range from sovereign entities and corporations issuing debt to institutional investors, hedge funds, and central banks. Technological advancements and electronic trading platforms have enhanced market accessibility and efficiency, though liquidity challenges and regulatory frameworks remain key considerations. The fixed income market plays a vital role in funding public and private sector projects, managing risk, and providing stable income streams. </p>

          <h3 className='text-4xl  mb-10 text-left text-pantone-dark/90'> Currencies </h3>
          <p className='text-xl mb-6 text-justify'>The currency market, also known as the foreign exchange (FX) market, is the largest and most liquid financial market, where global currencies are traded 24/7 across decentralized platforms. Participants, including central banks, multinational corporations, hedge funds, and retail traders, engage in speculative, hedging, and arbitrage strategies to navigate price fluctuations driven by macroeconomic indicators, geopolitical developments, and interest rate differentials. Common trading approaches range from carry trading, which exploits interest rate disparities between currency pairs, to momentum strategies that track directional trends, and risk-reversal hedging to mitigate exposure to adverse moves. Technology and algorithmic systems dominate modern currency trading, enhancing speed and precision but intensifying competition. The FX market underpins international trade, investment flows, and global economic stability, reflecting the pulse of the world's financial dynamics in real-time. </p>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl mb-10 text-center text-pantone-dark">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-justify mb-6">
                At The Imperial Crest, we combine sophisticated trading strategies, rigorous research, and advanced 
                technology to navigate the complexities of global financial markets. Our integrated approach allows 
                us to identify and capitalize on unique opportunities, delivering exceptional results for our clients.
              </p>
              <ul className=" space-y-3 text-justify text-lg">
                <li>Quantitative analysis and modeling</li>
                <li>High-frequency and algorithmic trading</li>
                <li>Machine learning-driven predictions</li>
                <li>Risk management and portfolio optimization</li>
              </ul>
            </div>
            <Image 
              src="/Our Approach.jpg" 
              alt="Our Integrated Approach" 
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        <section className="mb-20">
  <h2 className="text-4xl mb-10 text-center text-pantone-dark">
    Investment Strategies
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: 'Global Macro',
        description:
          'Navigating and Capitalizing on Opportunities in Global Macro Trading.',
      },
      {
        title: 'Statistical Arbitrage',
        description:
          'Leveraging Data-Driven Strategies for Profitable Statistical Arbitrage Trading.',
      },
      {
        title: 'Long/Short Equity',
        description:
          'Employing sophisticated long/short equity strategies to capitalize on market inefficiencies while managing risk and enhancing portfolio returns.',
      },
      {
        title: 'Fixed Income Arbitrage',
        description:
          'Exploiting pricing discrepancies in fixed income markets through arbitrage strategies to generate risk-adjusted returns.',
      },
      {
        title: 'Volatility Trading',
        description:
          'Leveraging market inefficiencies and global trends to generate alpha.',
      },
      {
        title: 'Merger Arbitrage',
        description:
          'Capitalizing on market fluctuations to drive profits in the fast-paced cryptocurrency market.',
      },
    ].map((strategy, index) => (
      <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-center">{strategy.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">{strategy.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>


        <section className="mb-20">
          <h2 className="text-4xl  mb-10 text-center text-pantone-dark">Global Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <video
  src="/Global Reach.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="  w-full h-auto"/>
            <div>
              <p className="text-xl mb-6">
                Our global presence allows us to operate across major financial centers, providing us with:
              </p>
              <ul className=" list-inside space-y-3 text-lg">
                <li>24/7 market coverage</li>
                <li>Access to diverse asset classes</li>
                <li>Ability to capitalize on cross-border opportunities</li>
                <li>Deep understanding of local market dynamics</li>
                <li>Regulatory expertise across multiple jurisdictions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl  mb-10 text-center text-pantone-dark">Risk Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl mb-6">
                Our sophisticated risk management framework is designed to protect and optimize our investments:
              </p>
              <ul className="list-inside space-y-3 text-lg">
                <li>Real-time risk monitoring and analysis</li>
                <li>Stress testing and scenario analysis</li>
                <li>Diversification across strategies and asset classes</li>
                <li>Continuous model validation and improvement</li>
                <li>Compliance with global regulatory standards</li>
              </ul>
            </div>
            <video
  src="/Risk Management.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-auto"/>
          </div>
        </section>
      </div>
    </div>
  )
}

