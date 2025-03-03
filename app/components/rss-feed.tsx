'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function RSSFeed({ url }: { url: string }) {
  const [feed, setFeed] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch(`/api/rss?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }
        const data = await response.json();
        setFeed(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load RSS feed');
        setLoading(false);
      }
    };

    fetchRSS();
  }, [url]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Increment by 5 items
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
    <div className="grid gap-6">
      {feed.slice(0, visibleCount).map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{new Date(item.pubDate).toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{item.description}</p>
            
              <Link className='underline text-pantone-light'
              href={item.link} target="_blank" rel="noopener noreferrer">Read More</Link>
            
          </CardContent>
        </Card>
      ))}
      
    </div>
    {visibleCount < feed.length && (
      <div className='text-center pt-3'>
        <p className='underline text-pantone-light' onClick={handleLoadMore}>Load More</p>
        </div>
      )}
      </>
  );
}
