import './globals.css'
import { Inter } from 'next/font/google'
import { CTAFormProvider } from '@/contexts/cta-form-context'
import { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dtgcompliance.vercel.app'),
  title: {
    default: 'DTG Compliance | Cloud Security & Compliance Management',
    template: '%s | DTG Compliance'
  },
  description: 'Eliminate compliance gaps and minimize audit risks with DTG Compliance. Enterprise-grade cloud security and compliance management solutions. Trust. But Verify!',
  keywords: 'cloud compliance, security compliance, audit risk management, enterprise security, cloud governance, DTG Compliance, Secberus',
  alternates: {
    canonical: '/'
  },
  authors: [{ name: 'DTG Compliance' }],
  creator: 'DTG Compliance',
  publisher: 'DTG Compliance',
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
    url: 'https://dtgcompliance.vercel.app',
    siteName: 'DTG Compliance',
    title: 'DTG Compliance | Cloud Security & Compliance Management',
    description: 'Eliminate compliance gaps and minimize audit risks with DTG Compliance. Enterprise-grade cloud security and compliance management solutions.',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'DTG Compliance - Cloud Security & Compliance Management',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DTGCompliance',
    creator: '@DTGCompliance',
    title: 'DTG Compliance | Cloud Security & Compliance Management',
    description: 'Enterprise-grade cloud security and compliance management solutions.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': 'DTG Compliance',
            'applicationCategory': 'SecurityApplication',
            'description': 'Cloud security and compliance management solution',
            'offers': {
              '@type': 'Offer',
              'availability': 'https://schema.org/InStock'
            },
            'provider': {
              '@type': 'Organization',
              'name': 'DTG Compliance',
              'description': 'Enterprise cloud security and compliance management solutions provider'
            }
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <CTAFormProvider>
          {children}
        </CTAFormProvider>
      </body>
    </html>
  )
}
