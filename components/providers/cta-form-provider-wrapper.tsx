'use client'

import { CTAFormProvider } from '@/contexts/cta-form-context'

export function CTAFormProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <CTAFormProvider>{children}</CTAFormProvider>
}
