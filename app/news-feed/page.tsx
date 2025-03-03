import RSSFeed from '../components/rss-feed'

export default function NewsFeed() {
  const bloombergRSSUrl = 'https://feeds.bloomberg.com/markets/news.rss'

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-pantone-dark">Bloomberg News Feed</h1>
        <RSSFeed url={bloombergRSSUrl} />
      </div>
    </div>
  )
}

