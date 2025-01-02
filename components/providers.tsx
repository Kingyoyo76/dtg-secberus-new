'use client'

import { CTAFormProvider } from "@/contexts/cta-form-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CTAFormProvider>
      {children}
    </CTAFormProvider>
  )
}
