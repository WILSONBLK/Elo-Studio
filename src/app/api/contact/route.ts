import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, website, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Elo Studio <onboarding@resend.dev>',
      to: 'mystudio.elo@gmail.com',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #162216;">
          <div style="border-bottom: 2px solid #1E4A2A; padding-bottom: 16px; margin-bottom: 24px;">
            <strong style="font-size: 18px;">New Digital Home Enquiry</strong>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4A5E4A; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4A5E4A; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1E4A2A;">${email}</a></td>
            </tr>
            ${website ? `
            <tr>
              <td style="padding: 8px 0; color: #4A5E4A; font-size: 13px;">Website</td>
              <td style="padding: 8px 0;"><a href="${website}" style="color: #1E4A2A;">${website}</a></td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #F7F9F7; border-left: 3px solid #1E4A2A; border-radius: 4px;">
            <p style="margin: 0; font-size: 13px; color: #4A5E4A; margin-bottom: 8px;">Message</p>
            <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #7A917A;">
            Sent via Elo Studio contact form · Reply directly to this email to reach ${name}
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
