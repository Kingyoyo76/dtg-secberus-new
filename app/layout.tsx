import './globals.css'
import { Inter } from 'next/font/google'
import { CTAFormProvider } from '@/contexts/cta-form-context'
import { Metadata } from 'next'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { Analytics } from "@vercel/analytics/react"

const ConversionPopup = dynamic(() => import('@/components/conversion-popup'), {
  ssr: false
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dtgcompliance.vercel.app'),
  title: {
    default: 'DTG Compliance | Cloud Security & Compliance Management',
    template: '%s | DTG Compliance'
  },
  description: 'Eliminate compliance gaps and minimize audit risks with DTG Compliance. Enterprise-grade cloud security and compliance management solutions. Trust. But Verify!',
  keywords: 'cloud compliance, security compliance, audit risk management, enterprise security, cloud governance, DTG Compliance, Secberus',
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
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': 'DTG Compliance',
            'applicationCategory': 'SecurityApplication',
            'description': 'Cloud security and compliance management solution',
            'operatingSystem': 'Cloud',
            'applicationSubCategory': 'Enterprise Security',
            'offers': {
              '@type': 'Offer',
              'availability': 'https://schema.org/InStock',
              'price': '0',
              'priceCurrency': 'USD'
            },
            'provider': {
              '@type': 'Organization',
              'name': 'DTG Compliance',
              'description': 'Enterprise cloud security and compliance management solutions provider',
              'url': 'https://dtgcompliance.vercel.app'
            }
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <CTAFormProvider>
          {children}
          <ConversionPopup />
          <Analytics />
        </CTAFormProvider>
      </body>
    </html>
  )
}
