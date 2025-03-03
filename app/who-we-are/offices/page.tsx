import Image from "next/image"
import LocationAccordion from "./LocationAccordion"
import { ArrowRight, BarChart2, Globe, Shield, TrendingUp } from 'lucide-react';

export default function OurOffices() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl  text-center mb-12">Our Offices</h1>

        <div className="flex justify-center w-full bg-white-100 pb-16">
          <section className="relative h-[664px]  text-white w-full max-w-[1400px]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/giftcity.jpg"
                alt="Careers at Alpha Investments"
                layout="fill"
                objectFit="cover"
                priority
              />
              
            </div>
            <div className="absolute md:w-[95%] bottom-0 left-0 right-0 bg-blue-900 bg-opacity-70 backdrop-blur-lg py-12 z-20">
              <div className="container mx-auto px-6">
                <div className="md:pl-10 ">
                  <p className="text-sm">The Imperial Crest has offices in multiple cities across the globe.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16">
        <section className="pb-20 pt-14 md:pt-0">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl mb-12 text-center">Our Locations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {[
        {
          image: '/giftcity.jpg',
          address: 'Unit No. 651, 6th Floor, Signature Building, Gift City, Gandhinagar - 382355 (Gujarat)',
          city: 'GIFT CITY',
        },
        {
          image: '/Gurgaon.jpg',
          address: 'C-21 Ground Floor, Sushant Lok, Phase 1, Gurgaon - 122002 (Haryana)',
          city: 'GURGAON',
        },

        {
          image: '/London.jpg',
          address: 'First Floor, 85 Great Portland street, London W1W 7LT',
          city: 'LONDON',
        },
        
        {
          image: '/Toronto.jpg',
          address: '4978 Yonge Street, Toronto, M2N 7G8, Canada',
          city: 'TORONTO',
        },
        
        
      ].map((location, index) => (
        <div key={index} className="bg-white p-4 ">
          <div className="w-full h-[500px] overflow-hidden">
            <Image
              src={location.image}
              alt={`Location ${index + 1}`}
              width={500}
              height={300}
              className="w-full h-full object-fit"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-lg ">{location.city}</p>
            <p className="text-m ">{location.address}</p>
            
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        </div>
      </div>
    </div>
  )
}

