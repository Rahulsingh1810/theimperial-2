import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Research() {
  const researchPapers = [
    {
      title: "The Impact of AI on Financial Markets",
      author: "Dr. Jane Smith",
      date: "July 2023",
      abstract: "This paper explores the growing influence of artificial intelligence on global financial markets and its implications for investment strategies.",
    },
    {
      title: "Emerging Markets: Opportunities and Risks",
      author: "Dr. Michael Johnson",
      date: "June 2023",
      abstract: "An in-depth analysis of current trends in emerging markets, highlighting potential investment opportunities and associated risks.",
    },
    {
      title: "ESG Investing: Long-term Performance Analysis",
      author: "Sarah Thompson, CFA",
      date: "May 2023",
      abstract: "This research paper examines the long-term performance of ESG-focused investment strategies compared to traditional approaches.",
    },
    {
      title: "Cryptocurrency and Traditional Finance: Convergence Trends",
      author: "Alex Chen, PhD",
      date: "April 2023",
      abstract: "An exploration of the growing intersection between cryptocurrency markets and traditional financial systems, and its implications for investors.",
    },
  ]

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-pantone-dark">Research Papers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchPapers.map((paper, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{paper.title}</CardTitle>
                <CardDescription>{paper.author} - {paper.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{paper.abstract}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/research/${paper.title.toLowerCase().replace(/ /g, '-')}`}>Read Full Paper</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

