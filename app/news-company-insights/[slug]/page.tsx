import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// This would typically come from a database or API
const newsItems = [
  {
    title: "Incorporation in GIFT City A New Chapter for Our Investment Company",
    date: "June 15, 2023",
    excerpt: "Our company is proud to announce its incorporation in Gujarat International Finance Tec-City (GIFT City), India's premier global financial hub.",
    slug: "incorporation-in-gift-city-a-new-chapter-for-our-investment-company",
    image: "/DSC00353.JPG",
    content: `Incorporation in GIFT City: A New Chapter for Our Investment Company
Our company is proud to announce its incorporation in Gujarat International Finance Tec-City (GIFT City), India's premier global financial hub. As an investment firm, we are dedicated to creating value-added investments and generating alpha on our capital. Our presence in GIFT City provides us with a strategic advantage, allowing us to optimize our financial structures, leverage regulatory benefits, and enhance operational efficiencies to drive sustainable growth.
Why GIFT City?
GIFT City is India's first International Financial Services Centre (IFSC), offering a world-class financial ecosystem with regulatory support that aligns with global standards. Its establishment as a business-friendly environment makes it the ideal destination for investment firms like ours, aiming to maximize capital efficiency and gain access to international financial markets.
By setting up in GIFT City, we align ourselves with a forward-looking financial jurisdiction that fosters innovation, transparency, and operational excellence. The city's infrastructure, regulatory framework, and financial incentives create a compelling case for companies seeking to establish a global footprint.
Key Benefits of Incorporating in GIFT City
1. Corporate Tax Benefits
One of the most significant advantages of operating in GIFT City is the corporate tax incentives. Companies incorporated here enjoy a 100% tax exemption on profits for the first 10 years, making it one of the most attractive financial zones in Asia. This allows us to reinvest more capital into high-value opportunities and further enhance our portfolio.
2. Regulatory Efficiency
GIFT City operates under a single-window clearance system, reducing bureaucratic hurdles and expediting approvals. The regulatory framework, overseen by the International Financial Services Centres Authority (IFSCA), ensures ease of doing business while maintaining international compliance standards. This enables us to execute sophisticated investment strategies with agility and precision.
3. Access to Global Markets
Being in an IFSC allows us direct access to international markets without the constraints of domestic financial regulations. GIFT City provides a gateway for cross-border investments, capital raising, and offshore financial services, making it a powerful hub for multinational investment firms like ours.
4. Currency and Capital Flow Flexibility
Unlike traditional Indian financial jurisdictions, GIFT City permits transactions in foreign currencies, eliminating foreign exchange risks associated with INR volatility. This gives us the flexibility to structure our investments efficiently and optimize capital deployment across global markets.
5. State-of-the-Art Infrastructure
GIFT City is equipped with cutting-edge infrastructure, including high-end office spaces, robust digital connectivity, and a smart city framework. This enhances operational efficiency and supports seamless execution of complex investment strategies.
6. No Securities Transaction Tax (STT) and Commodities Transaction Tax (CTT)
GIFT City entities are exempt from STT, CTT, and other transaction levies, significantly reducing the cost of trading and boosting overall profitability.
Future Vision
With our incorporation in GIFT City, we are poised to scale our investment operations, leverage regulatory advantages, and create high-value opportunities across multiple asset classes. Our commitment to generating superior returns and managing risk prudently remains steadfast, and GIFT City's robust financial ecosystem serves as the perfect platform to achieve these objectives.
As we embark on this new chapter, we look forward to harnessing the benefits of GIFT City to expand our global presence and continue delivering alpha for our stakeholders. Our journey in this premier financial hub marks the beginning of a transformative era, redefining investment excellence and innovation in the financial sector.
`,
    tags: ["Incorporation", "GIFT City", "Investment Company"],
  },
  {
    title: "Introducing Our Investor Dashboard A New Era of Transparency and Insights",
    date: "March 02, 2025",
    excerpt: "We are excited to introduce our upcoming Investor Dashboard—a state-of-the-art platform revolutionizing how investors interact with their portfolios.",
    slug: "introducing-our-investor-dashboard-a-new-era-of-transparency-and-insights",
    image: "/DSC00359.JPG",
    content: `Introducing Our Investor Dashboard: A New Era of Transparency and Insights
At The Imperial Crest, we are committed to providing our investors with the most comprehensive and transparent access to fund performance and strategic insights. To further this commitment, we are excited to introduce our upcoming Investor Dashboard—a state-of-the-art backend platform that will revolutionize the way our investors interact with their portfolio and stay informed about our latest investment strategies.
Key Features of the Investor Dashboard
1. Monthly Fund Performance Insights
Our new dashboard will provide investors with up-to-date information on fund performance at regular intervals. With detailed breakdowns of returns, risk-adjusted performance metrics, and asset allocation strategies, investors will always have a clear view of how their capital is being deployed.
2. Exclusive Access to Strategic Updates
We continuously refine our approach to optimize returns while mitigating risk. Through the dashboard, investors will gain exclusive insights into the latest investment strategies and methodologies our company is implementing across commodities, equities, and fixed income markets.
3. Graphical Representation of Portfolio Holdings
Understanding portfolio composition is crucial for any investor. Our dashboard will feature interactive visualizations, including pie charts, trend graphs, and allocation breakdowns, allowing investors to analyze fund holdings in an intuitive manner.
4. Seamless Access Through Our Website
The Investor Dashboard will be accessible directly through our website via a secure login. Investors can effortlessly check their portfolio details, review fund performance, and access strategic insights from any device, ensuring convenience and security.
Benefits of Pass-Through Information for Investors
1. Enhanced Transparency
With direct access to performance metrics, investors can independently assess the effectiveness of our strategies, fostering trust and confidence in our investment approach.
2. Informed Decision-Making
Having all relevant information in one place allows investors to make well-informed decisions regarding their investment strategies and allocations.
3. Timely Updates for Proactive Strategy Adjustments
Markets are dynamic, and staying ahead requires real-time data. Our dashboard ensures investors are always informed of market shifts, helping them align their expectations and strategies accordingly.
4. Simplified Reporting and Analytics
Instead of relying on periodic reports or scattered data sources, investors will have an all-in-one solution for tracking performance and evaluating portfolio trends in a streamlined manner.
Conclusion
Our Investor Dashboard is designed to provide clarity, confidence, and control over investment insights. By integrating cutting-edge analytics and visualization tools, we aim to create a seamless and informative experience for all our investors.
Stay tuned for the official launch, and get ready to experience a new level of investment transparency and strategic intelligence!
`,
    tags: ["Investor Dashboard", "Transparency", "Insights"],
  },
];

export default function NewsItem({ params }: { params: { slug: string } }) {
  const newsItem = newsItems.find(item => item.slug === params.slug);

  if (!newsItem) {
    notFound();
  }

  const relatedNews = newsItems
    .filter(item => item.slug !== params.slug)
    .slice(0, 3);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
        <div className="flex items-center text-gray-600 mb-8">
          <p className="mr-4">Published on: {newsItem.date}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-justify leading-relaxed mb-6">{newsItem.content}</p>
            <div className="flex flex-wrap gap-2">
              {newsItem.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-pantone-light underline">
          <Link href="/news">Back to News</Link>
        </div>
      </div>
    </div>
  );
}