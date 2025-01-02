import './globals.css'
import { Inter } from 'next/font/google'
import { CTAFormProvider } from '@/contexts/cta-form-context'
import { BackToTop } from '@/components/back-to-top'
import Footer from '@/components/footer'
import { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eliminate Compliance Gaps | Secberus Compliance Solution by DTG',
  description: 'Automate compliance verification, reduce audit risks, and stay audit-ready with Secberus. Powered by DTG for seamless integration.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Automate Compliance with Secberus | DTG Solution',
    description: 'Discover how Secberus helps organizations eliminate compliance gaps and reduce audit risks with real-time insights.',
    type: 'website',
    url: 'https://dtg.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Secberus compliance automation platform dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automate Compliance with Secberus | DTG Solution',
    description: 'Discover how Secberus helps organizations eliminate compliance gaps and reduce audit risks with real-time insights.',
    images: ['/og-image.jpg']
  },
  keywords: [
    'compliance automation',
    'audit readiness',
    'cloud compliance solutions',
    'eliminate compliance gaps',
    'real-time compliance insights',
    'Secberus',
    'DTG',
    'compliance management',
    'security compliance'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Secberus Compliance Solution",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Cloud",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "description": "Automate compliance verification, reduce audit risks, and stay audit-ready with Secberus.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              },
              "provider": {
                "@type": "Organization",
                "name": "DTG - Distributed Technology Group",
                "url": "https://dtg.com"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DTG - Distributed Technology Group",
              "url": "https://dtg.com",
              "logo": "https://dtg.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/dtg",
                "https://twitter.com/dtg"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <CTAFormProvider>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </CTAFormProvider>
      </body>
    </html>
  )
}
