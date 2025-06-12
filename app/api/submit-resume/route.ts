import { type NextRequest, NextResponse } from "next/server"

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const coverLetter = formData.get('coverLetter') as string
    const resume = formData.get('resume') as File

    if (!name || !email || !phone || !position || !resume) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer())
    const resumeBase64 = resumeBuffer.toString('base64')

    const htmlContent = `
      <h1>New Resume Submission for ${position}</h1>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Position: ${position}</p>
      <p>Cover Letter: ${coverLetter || 'Not provided'}</p>
      <p>Resume attached.</p>
    `

    const textContent = `
      New Resume Submission for ${position}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Position: ${position}
      Cover Letter: ${coverLetter || 'Not provided'}
      Resume attached.
    `

    const emailData = {
      personalizations: [
        {
          to: [{ email: "info@theimperialcrest.com", name: "Imperial Crest" }],
          subject: `New Resume Submission: ${name} - ${position}`,
        },
      ],
      from: { email: "imperialcontactform@gmail.com", name: "Resume Submission Bot" },
      content: [
        { type: "text/plain", value: textContent },
        { type: "text/html", value: htmlContent },
      ],
      attachments: [
        {
          content: resumeBase64,
          filename: resume.name,
          type: resume.type,
          disposition: "attachment",
        },
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

    return NextResponse.json({ success: true, message: "Resume submitted successfully" })
  } catch (error) {
    console.error("Error sending resume submission:", error)
    const message =
      error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      { error: "Failed to send resume submission", details: message },
      { status: 500 }
    )
  }
}