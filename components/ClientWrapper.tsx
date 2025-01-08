'use client'

import { useSearchParams } from 'next/navigation'

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
