import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";


const founders = [
  {
    name: "Sameer Gujar MBA",
    image: "/Sameer.jpg",
    description:
      "Sameer is a seasoned Investment Manager with an MBA from SP Jain and holds over 14 years of experience in the investment landscape. He is adept at orchestrating strategic portfolio expansion, optimizing risk-adjusted returns, and uncovering high-value opportunities.",
  },
  {
    name: "Tusheet Saraf CFA, FRM, MBA",
    image: "/Tusheet.JPG",
    description:"Tusheet is a seasoned Investment Manager with an MBA from ISB and holds over 13 years of experience across Investment Banking and Asset Management. He is a distinguished Investment Manager with expertise in portfolio optimization, asset allocation, and risk mitigation. ",
  },
];


const profession = [
  {
    profession: "Quantitative Analysts",
    image: "/Quantitative Analysts.jpg",
    description:
      "Experts in developing mathematical models to optimize trading strategies and financial operations.",
  },
  {
    profession: "Data Scientists",
    image: "/Data Scientists.jpg",
    description:
      "Specialists in analyzing complex data to uncover insights and drive decision-making.",
  },
  {
    profession: "Software Engineers",
    image: "/Software Engineers.jpg",
    description:
      "Developers of robust and scalable software solutions for financial systems.",
  },
  {
    profession: "Risk Managers",
    image: "/Risk Managers.jpg",
    description:
      "Professionals dedicated to identifying, assessing, and mitigating financial risks.",
  },
  {
    profession: "Traders",
    image: "/Traders.jpg",
    description:
      "Skilled individuals executing trades and strategies across various financial markets.",
  },
];

export default function OurOffices() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Leadership</h1>
        <div className="flex justify-center w-full bg-white-100">
        <section className="relative h-[664px]  text-white w-[1400px]">
  {/* Video Background */}
  <div className="absolute inset-0 overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      src="/Our Leadership LOW RES.mov" // Replace with your actual video file
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  </div>

  {/* Text & Content */}
  <div className="absolute md:w-[95%] bottom-0 left-0 right-0 bg-blue-900 bg-opacity-60 backdrop-blur-lg md:py-16 py-8 z-20">
    <div className="container mx-auto px-6">
      <div className="md:pl-10">
        <p className="text-lg">Taking on the Most Difficult Trading Challenges</p>
      </div>
    </div>
  </div>
</section>

        </div>

<section className="my-20">
  <h2 className="text-4xl font-semibold text-center mb-10">Meet Our Founders</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {founders.map((founder, index) => (
      <div key={index} className="flex flex-col items-center text-left">
        <Image
          src={founder.image}
          alt={founder.name}
          width={400}
          height={500}
          className="  w-[400px] h-[600px] object-fit"
        />
        <h3 className="text-2xl font-semibold mt-4">{founder.name}</h3>
        <p className="text-lg mt-2 max-w-md text-left">{founder.description}</p>
      </div>
    ))}
  </div>
</section>
        

        {/* <section className="mb-20">
          <h2 className="text-4xl font-semibold my-10 text-center">
            Taking on the Most Difficult Trading Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Trading Challenges"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-xl mb-6">
                At The Imperial Crest, we thrive on complexity. We tackle the
                most challenging trading scenarios, leveraging our expertise and
                cutting-edge technology to find opportunities where others see
                obstacles.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Navigating high-volatility markets</li>
                <li>Identifying mispriced assets across global markets</li>
                <li>
                  Developing strategies for illiquid and exotic instruments
                </li>
                <li>Capitalizing on fleeting arbitrage opportunities</li>
              </ul>
            </div>
          </div>
        </section> */}

        <h2 className="text-4xl  md:my-10 mb-10 text-center">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {profession.map((profession, index) => (
    <Card key={index} className="overflow-hidden">
      <div className="w-full h-[300px]"> {/* Ensure uniform height */}
        <Image
          src={profession.image}
          alt={`${profession.profession} Office`}
          width={300}
          height={300} // Set a fixed height
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {profession.profession}
        </h2>
        <p className="whitespace-pre-line">{profession.description}</p>
      </CardContent>
    </Card>
  ))}
</div>

      </div>
    </div>
  );
}
