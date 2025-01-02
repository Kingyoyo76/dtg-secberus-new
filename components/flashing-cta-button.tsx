'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useCTAForm } from '@/contexts/cta-form-context'

export function FlashingCTAButton() {
  const [isTrialText, setIsTrialText] = useState(true)
  const { openHubspotForm, openHubspotMeeting } = useCTAForm()

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTrialText(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    if (isTrialText) {
      openHubspotForm()
    } else {
      openHubspotMeeting()
    }
  }

  return (
    <Button
      onClick={handleClick}
      className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 md:font-normal md:text-base font-extrabold text-lg"
    >
      {isTrialText ? 'Start Free Trial' : 'Schedule a Demo'}
    </Button>
  )
}
