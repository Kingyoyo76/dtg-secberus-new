'use client'

import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SuccessNotificationProps {
  show: boolean
  onClose: () => void
  message?: string
}

export function SuccessNotification({ 
  show, 
  onClose,
  message = "Thank you! We'll be in touch shortly."
}: SuccessNotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000) // Auto close after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  return (
    <div
      className={cn(
        "fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 transform z-50 flex items-center gap-3 border border-green-200",
        show ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <CheckCircle2 className="h-6 w-6 text-green-600" />
      <p className="text-gray-800 font-medium">{message}</p>
    </div>
  )
}
