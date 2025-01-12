'use client'

import dynamic from 'next/dynamic'

const ConversionPopup = dynamic(() => import('./conversion-popup'), {
  ssr: false
})

export function PopupWrapper() {
  return <ConversionPopup />
}
