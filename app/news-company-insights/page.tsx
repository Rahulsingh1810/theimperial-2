import RSSFeed from '../components/rss-feed';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CompanyInsights() {
  const bloombergRSSUrl = 'https://feeds.bloomberg.com/markets/news.rss';

  const newsItems = [
    {
      title: "Incorporation in GIFT City A New Chapter for Our Investment Company",
      date: "June 15, 2023",
      excerpt: "Our company is proud to announce its incorporation in Gujarat International Finance Tec-City (GIFT City), India's premier global financial hub.",
    },
    {
      title: "Introducing Our Investor Dashboard A New Era of Transparency and Insights",
      date: "March 02, 2025",
      excerpt: "We are excited to introduce our upcoming Investor Dashboard—a state-of-the-art platform revolutionizing how investors interact with their portfolios.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-pantone-dark">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link
                  className="underline text-pantone-light"
                  href={`/news-company-insights/${item.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`}
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-pantone-dark">Bloomberg News Feed</h1>
        <RSSFeed url={bloombergRSSUrl} />
      </div>
    </div>
  );
}