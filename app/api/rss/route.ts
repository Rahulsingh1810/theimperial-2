import { NextResponse } from 'next/server'
import { XMLParser } from 'fast-xml-parser'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 })
  }

  try {
    const response = await fetch(url)
    const xmlData = await response.text()
    

    const parser = new XMLParser()
    const result = parser.parse(xmlData)

    const items = result.rss.channel.item.slice(0, 100) 
      
    return NextResponse.json(items)
  
  } catch (error) {

    return NextResponse.json({ error: 'Failed to fetch RSS feed' }, { status: 500 })
  }
}

