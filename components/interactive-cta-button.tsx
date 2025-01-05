'use client'

import { Button } from '@/components/ui/button'

interface CTAButtonProps {
  onClick: () => void
  className?: string
  children: React.ReactNode
}

export function InteractiveCTAButton({ onClick, className, children }: CTAButtonProps) {
  return (
    <Button onClick={onClick} className={className}>
      {children}
    </Button>
  )
}
