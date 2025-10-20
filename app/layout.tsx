import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy-First Advertising Platform | Coming Soon',
  description: 'The future of privacy-preserving advertising technology. Join the waitlist for early access.',
  keywords: 'privacy, advertising, ad tech, contextual advertising, privacy sandbox',
  authors: [{ name: 'Privacy Ad Tech Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy-First Advertising Platform | Coming Soon',
    description: 'The future of privacy-preserving advertising technology. Join the waitlist for early access.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
