# Deployment Guide

## Quick Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd /Users/nathanwolff/dev/freebid/site
   vercel
   ```

3. **Follow prompts**
   - Link to existing project or create new
   - Set project name (suggest: "privacy-ad-platform")
   - Deploy

## Manual Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build project**
   ```bash
   npm run build
   ```

3. **Start production server**
   ```bash
   npm start
   ```

## Environment Variables

Create `.env.local` for production:
```
# Optional: Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Domain Setup

1. **Buy domain** (suggestions: privacyad.com, edgeadtech.com, contextualads.com)
2. **Configure DNS** to point to Vercel
3. **Update metadata** in `app/layout.tsx` with actual domain

## Email Service Integration

For production, replace local JSON storage with:

### Option 1: ConvertKit
```bash
npm install @convertkit/sdk
```

### Option 2: Mailchimp
```bash
npm install @mailchimp/mailchimp_marketing
```

### Option 3: Supabase
```bash
npm install @supabase/supabase-js
```

## Analytics (Optional)

Add privacy-friendly analytics:

```bash
npm install @vercel/analytics
```

## Security Headers

Add to `next.config.js`:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## Monitoring

- **Uptime**: Use UptimeRobot or Pingdom
- **Errors**: Vercel provides built-in error tracking
- **Performance**: Vercel Analytics included

## Backup Strategy

- **Code**: Git repository
- **Subscribers**: Export JSON file regularly
- **Database**: If using external DB, enable automated backups
