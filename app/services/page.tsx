import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Equity Long/Short",
      description: "Our flagship strategy that seeks to capitalize on both undervalued and overvalued equities.",
    },
    {
      title: "Global Macro",
      description: "A strategy that profits from changes in global economies, driven by political and economic events.",
    },
    {
      title: "Quantitative Trading",
      description: "Utilizing advanced algorithms and high-frequency trading to exploit market inefficiencies.",
    },
    {
      title: "Event-Driven",
      description: "Capitalizing on pricing inefficiencies that may occur before or after a corporate event.",
    },
    {
      title: "Fixed Income Arbitrage",
      description: "Exploiting price anomalies within and between fixed income securities and their derivatives.",
    },
    {
      title: "Emerging Markets",
      description: "Focusing on investment opportunities in developing economies with high growth potential.",
    },
  ]

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-pantone-dark">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

