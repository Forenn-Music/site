# Forenn Website

Official website for Forenn - Music for Memory Seekers.

## Features

- **Landing Page**: Rotating hero images with album announcement
- **Newsletter Signup**: Email collection with automatic notifications
- **Responsive Design**: Works on all devices
- **Modern Typography**: Custom fonts (Neue Haas Grotesk Text Pro & Quattrocento)

## Newsletter Email Setup

The newsletter signup form sends emails to `forennmusic@gmail.com` when someone subscribes.

### Option 1: SendGrid (Recommended)

1. **Sign up** at [sendgrid.com](https://sendgrid.com)
2. **Get API Key** from your SendGrid dashboard
3. **Verify Sender Email** in SendGrid (the email you'll send from)
4. **Create `.env.local`** file in the root directory:

```bash
SENDGRID_API_KEY=your_actual_api_key_here
SENDGRID_FROM_EMAIL=your_verified_sender_email@domain.com
NEWSLETTER_TO_EMAIL=forennmusic@gmail.com
```

### Option 2: Manual Setup (No Email Service)

If you don't want to set up an email service yet:
- The form will still collect signups
- Check the browser console (F12) to see signup details
- All signups are logged with timestamps

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Copy `env.example` to `.env.local` and fill in your values:

- `SENDGRID_API_KEY`: Your SendGrid API key
- `SENDGRID_FROM_EMAIL`: Your verified sender email
- `NEWSLETTER_TO_EMAIL`: Where to send signup notifications (defaults to forennmusic@gmail.com)

## Security

- All API keys are stored in environment variables
- `.env.local` is gitignored and won't be committed
- API keys are never exposed in the frontend code

## Testing Newsletter

1. Start the development server: `npm run dev`
2. Go to the homepage
3. Enter an email in the newsletter form
4. Submit the form
5. Check the browser console for signup details
6. If SendGrid is configured, check forennmusic@gmail.com for the notification email
