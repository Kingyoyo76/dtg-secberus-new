import './globals.css'
import { Inter } from 'next/font/google'
import { CTAFormProvider } from '@/contexts/cta-form-context'
import { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dtg.com'),
  title: {
    default: 'Eliminate Compliance Gaps | Secberus Compliance Solution by DTG',
    template: '%s | DTG Secberus'
  },
  description: 'Automate compliance verification, reduce audit risks, and stay audit-ready with Secberus. Powered by DTG for seamless integration.',
  keywords: 'compliance automation, security compliance, cloud security, audit preparation, DTG, Secberus, compliance verification, security automation, cloud compliance',
  alternates: {
    canonical: '/'
  },
  authors: [{ name: 'DTG' }],
  creator: 'DTG',
  publisher: 'DTG',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dtg.com',
    siteName: 'DTG Secberus Compliance Solution',
    title: 'Eliminate Compliance Gaps | Secberus Compliance Solution by DTG',
    description: 'Automate compliance verification, reduce audit risks, and stay audit-ready with Secberus. Powered by DTG for seamless integration.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'DTG Secberus Compliance Solution',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DTG',
    creator: '@DTG',
    title: 'Eliminate Compliance Gaps | Secberus Compliance Solution by DTG',
    description: 'Automate compliance verification, reduce audit risks, and stay audit-ready with Secberus.',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "DTG Secberus Compliance Solution",
              "applicationCategory": "SecurityApplication",
              "operatingSystem": "Cloud",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/OnlineOnly"
              },
              "description": "Automate compliance verification, reduce audit risks, and stay audit-ready with Secberus.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              },
              "provider": {
                "@type": "Organization",
                "name": "DTG",
                "sameAs": ["https://dtg.com"]
              }
            }
          `}
        </Script>
        <CTAFormProvider>
          {children}
        </CTAFormProvider>
        <Analytics />
      </body>
    </html>
  )
}
