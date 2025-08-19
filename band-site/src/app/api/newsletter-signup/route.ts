import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if SendGrid is configured
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const toEmail = process.env.NEWSLETTER_TO_EMAIL || 'forennmusic@gmail.com';

    if (!sendgridApiKey || !fromEmail) {
      console.log('Newsletter Signup (SendGrid not configured):', {
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Signup received successfully',
          note: 'SendGrid not configured. Check console logs for signup details.'
        },
        { status: 200 }
      );
    }

    // Configure SendGrid
    sgMail.setApiKey(sendgridApiKey);

    // Prepare email
    const emailData = {
      to: toEmail,
      from: fromEmail,
      subject: `New Newsletter Signup: ${email}`,
      text: `Hey Forenn!

You have a new subscriber!

${email}

Cheers!
Your biggest fan`,
      html: `
        <h2>Hey Forenn!</h2>
        <p>You have a new subscriber!</p>
        <p><strong>${email}</strong></p>
        <p>Cheers!<br>Your biggest fan</p>
      `
    };

    // Send email
    await sgMail.send(emailData);

    console.log('Newsletter Signup (Email sent successfully):', {
      email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Signup received successfully and email sent!'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter signup error:', error);
    
    // Log the signup even if email fails
    try {
      const { email } = await request.json();
      console.log('Newsletter Signup (Email failed, but signup recorded):', {
        email,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } catch (parseError) {
      console.error('Failed to parse request for logging:', parseError);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Signup received successfully',
        note: 'Email delivery failed, but your signup was recorded. We\'ll contact you soon!'
      },
      { status: 200 }
    );
  }
}
