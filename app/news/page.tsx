import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function News() {
  const newsItems = [
    {
      title: "Incorporation in GIFT City: A New Chapter for Our Investment Company",
      date: "June 15, 2023",
      excerpt: "Our company is proud to announce its incorporation in Gujarat International Finance Tec-City (GIFT City), India’s premier global financial hub.",
    },
    {
      title: "Introducing Our Investor Dashboard: A New Era of Transparency and Insights",
      date: "March 02, 2025",
      excerpt: "We are excited to introduce our upcoming Investor Dashboard—a state-of-the-art platform revolutionizing how investors interact with their portfolios.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
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
                <Link href={`/news/${item.title.toLowerCase().replace(/ /g, '-')}`}>Read More</Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}