# Privacy-First Advertising Platform - Coming Soon

A stealth startup landing page for a privacy-preserving advertising platform that capitalizes on Google's Privacy Sandbox failure.

## Features

- **Privacy Sandbox Angle**: Leverages Google's recent failure for credibility
- **Email Collection**: Secure subscription system with local JSON storage
- **Modern Stack**: Next.js 14, TypeScript, React, Tailwind CSS
- **Functional Programming**: Clean, functional code style throughout

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Storage**: Local JSON file (easily replaceable with database)

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
site/
├── app/
│   ├── api/subscribe/route.ts    # Email subscription API
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── data/
│   └── subscribers.json          # Email storage (auto-created)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Key Features

### Landing Page
- Hero section with Privacy Sandbox failure messaging
- Feature highlights (privacy, performance, creator revenue)
- Statistics section ($278B market opportunity)
- Multiple email capture points
- Stealth startup aesthetic

### Email Subscription System
- Client-side form validation
- Server-side email validation
- Duplicate prevention
- Local JSON storage
- Error handling and user feedback

### Design System
- Dark theme with gradient backgrounds
- Primary blue color scheme
- Inter font family
- Responsive design
- Smooth animations and transitions

## API Endpoints

### POST /api/subscribe
Subscribe an email address to the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "Successfully subscribed",
  "totalSubscribers": 42
}
```

### GET /api/subscribe
Get subscription statistics (for monitoring).

**Response:**
```json
{
  "totalSubscribers": 42,
  "subscribers": ["user1@example.com", "user2@example.com"]
}
```

## Deployment

The site is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## Data Storage

Currently uses local JSON file storage in `/data/subscribers.json`. For production, consider:

- **Database**: PostgreSQL, MongoDB, or Supabase
- **Email Service**: ConvertKit, Mailchimp, or SendGrid
- **Analytics**: Add tracking for conversion rates

## Customization

- **Branding**: Update company name in `page.tsx` and `layout.tsx`
- **Colors**: Modify `tailwind.config.js` color scheme
- **Content**: Edit messaging in `page.tsx` component
- **Features**: Add/remove feature cards in the features array

## Privacy Considerations

- No third-party tracking scripts
- Email data stored locally
- No analytics or user behavior tracking
- GDPR/CCPA compliant by design

## Next Steps

1. Set up domain and hosting
2. Implement proper email service integration
3. Add analytics and conversion tracking
4. Create admin dashboard for subscriber management
5. Add social proof and testimonials
6. Implement A/B testing for conversion optimization
