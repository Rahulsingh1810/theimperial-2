import { type NextRequest, NextResponse } from "next/server"

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { email, firstName, lastName, company, jobTitle } = data

    if (!email || !firstName || !lastName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const htmlContent = `
      <h1>New Newsletter Subscription</h1>
      <p>Email: ${email}</p>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Company: ${company || 'Not provided'}</p>
      <p>Job Title: ${jobTitle || 'Not provided'}</p>
    `

    const textContent = `
      New Newsletter Subscription
      Email: ${email}
      First Name: ${firstName}
      Last Name: ${lastName}
      Company: ${company || 'Not provided'}
      Job Title: ${jobTitle || 'Not provided'}
    `

    const emailData = {
      personalizations: [
        {
          to: [{ email: "info@theimperialcrest.com", name: "Imperial Crest" }],
          subject: "New Newsletter Subscription",
        },
      ],
      from: { email: "imperialcontactform@gmail.com", name: "Newsletter Bot" },
      content: [
        { type: "text/plain", value: textContent },
        { type: "text/html", value: htmlContent },
      ],
    }

    const response = await fetch(SENDGRID_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`SendGrid API error: ${response.status} - ${errorText}`)
    }

    return NextResponse.json({ success: true, message: "Subscription successful" })
  } catch (error) {
    console.error("Error sending newsletter subscription:", error)
    const message =
      error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      { error: "Failed to send subscription", details: message },
      { status: 500 }
    )
  }
}