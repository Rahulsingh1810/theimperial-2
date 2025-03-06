import Link from 'next/link';
import Image from 'next/image';


import { ArrowRight, BarChart2, Globe, Shield, TrendingUp } from 'lucide-react';
import NewsletterForm from './components/NewsLetterForm';
import VideoPlayer from './components/VideoPlayer';
import WealthSolutions from './components/wealth-solutions';

export default function Home() {
  return (
    <div className="">
      <div className="flex  mb:pl-14 justify-center w-full md:py-16">
        <VideoPlayer src='/Website Low Res Video.mov'
        title='Empowering Visions, Elevating Value'
        description='Where Ambitions Meet Opportunities'
        footerContent={`To lead with a royal standard of trust that reflects heritage, pedigree, and<br />
          everlasting value for society, to build an iconic legacy of<br />
          value creation that endures through time.`}
        />
      </div>

      {/* Key Features */}
      <section className="pb-20 pt-14 md:pt-0">
        <div className="container mx-auto px-4">
          
          <h2 className="text-5xl mb-12 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Market Leadership',
                description:
                  'Setting industry standards through innovative strategies and exceptional performance.',
                image: '/Market Leadership.jpg',
              },
              {
                icon: BarChart2,
                title: 'Data-Driven Insights',
                description:
                  'Leveraging advanced analytics and technology to make informed decisions.',
                image: '/Data-Driven Insights.jpg',
              },
              {
                icon: Shield,
                title: 'Risk Management',
                description:
                  'Comprehensive risk assessment and management frameworks.',
                image: '/Risk Management.jpg',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description:
                  'Operating across global markets with local expertise.',
                image: '/Global Reach.jpg',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-4 pb-36">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={600}
                  className="mx-auto mb-4 w-full h-full object-cover aspect-square"
                />
                <div className="text-center pb-28 px-4 md:px-0">
                  <feature.icon className="h-10 w-10 mb-2 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="pt-32 bg-white">
        <WealthSolutions/>
      </section>

      {/* CTA Section */}
      <section className=" bg-[#08225a] text-white pt-20">
        <NewsletterForm/>
      </section>
    </div>
  );
}
