import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhoWeAre() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl  mb-16 text-center">Who We Are</h1>
        
        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-10 text-center">Established in 2000, Evolving Ever Since</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl mb-6">
                Since our inception in 2000, The Imperial Crest has been at the forefront of the financial industry, 
                constantly evolving our strategies and technologies to meet the ever-changing demands of global markets.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Pioneered quantitative trading strategies</li>
                <li>Developed proprietary AI-driven research tools</li>
                <li>Expanded global presence across major financial hubs</li>
                <li>Consistently outperformed market benchmarks</li>
              </ul>
            </div>
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="The Imperial Crest Timeline" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-10 text-center">Taking on the Most Difficult Trading Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Trading Challenges" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-xl mb-6">
                At The Imperial Crest, we thrive on complexity. We tackle the most challenging trading scenarios, 
                leveraging our expertise and cutting-edge technology to find opportunities where others see obstacles.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Navigating high-volatility markets</li>
                <li>Identifying mispriced assets across global markets</li>
                <li>Developing strategies for illiquid and exotic instruments</li>
                <li>Capitalizing on fleeting arbitrage opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-10 text-center">Our Integrated Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl mb-6">
                Our success is built on the seamless integration of trading expertise, advanced research, and 
                state-of-the-art technology. Each component of our operation is designed to complement and enhance the others, 
                creating a powerful synergy that drives our performance.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Cross-functional teams of traders, researchers, and technologists</li>
                <li>Continuous feedback loop between strategy development and execution</li>
                <li>Real-time integration of market data and research insights</li>
                <li>Agile development process for rapid strategy deployment</li>
              </ul>
            </div>
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Integrated Approach" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Ethics and Honesty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">We believe in conducting our business with the utmost integrity, always putting our clients' interests first and maintaining transparency in all our operations.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Responsible Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">We employ sophisticated risk management techniques to protect and grow our clients' investments, ensuring long-term sustainability and success.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Intellectual Humility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">We foster a culture of continuous learning, always staying open to new ideas and approaches, and acknowledging that markets are ever-evolving.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-10 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Quantitative Analysts', 'Data Scientists', 'Software Engineers', 'Risk Managers', 'Traders', 'Researchers'].map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Experts in their field, working collaboratively to drive innovation and results.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-10 text-center">Collaborative Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Collaborative Work Environment" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-xl mb-6">
                We believe in the power of collective intelligence. Our flat organizational structure promotes open 
                communication and collaboration, allowing the best ideas to flourish regardless of their origin.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Cross-functional project teams</li>
                <li>Regular knowledge-sharing sessions</li>
                <li>Mentorship and professional development programs</li>
                <li>Open-door policy across all levels of management</li>
                <li>Emphasis on diversity and inclusion to foster innovation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

