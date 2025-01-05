'use client'

import React, { createContext, useContext, useState } from 'react'
import { Modal } from "@/components/ui/modal"
import { TrialForm } from '@/components/trial-form'
import { SuccessNotification } from '@/components/ui/success-notification'

type CTAFormContextType = {
  openHubspotForm: () => void;
  openHubspotMeeting: () => void;
  isFormModalOpen: boolean;
  isMeetingModalOpen: boolean;
  closeFormModal: () => void;
  closeMeetingModal: () => void;
}

const CTAFormContext = createContext<CTAFormContextType | undefined>(undefined)

export function CTAFormProvider({ children }: { children: React.ReactNode }) {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleFormSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Close the modal and show success notification
      setIsFormModalOpen(false)
      setShowSuccess(true)
    } catch (error) {
      console.error('Form submission error:', error)
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  const openHubspotForm = () => {
    setIsFormModalOpen(true)
  }

  const openHubspotMeeting = () => {
    setIsMeetingModalOpen(true)
  }

  const closeFormModal = () => {
    setIsFormModalOpen(false)
  }

  const closeMeetingModal = () => {
    setIsMeetingModalOpen(false)
  }

  return (
    <CTAFormContext.Provider value={{
      openHubspotForm,
      openHubspotMeeting,
      isFormModalOpen,
      isMeetingModalOpen,
      closeFormModal,
      closeMeetingModal
    }}>
      {children}
      <SuccessNotification 
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Thank you! We'll be in touch shortly to discuss how we can help you save time on compliance."
      />
      <Modal isOpen={isFormModalOpen} onClose={closeFormModal}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Get Started with DTG</h2>
          <p className="text-gray-600 mb-6">Fill out the form below and we'll be in touch shortly.</p>
          <TrialForm
            onSubmit={handleFormSubmit}
            onClose={closeFormModal}
            isSubmitting={isSubmitting}
          />
        </div>
      </Modal>
      <Modal isOpen={isMeetingModalOpen} onClose={closeMeetingModal}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Schedule a Meeting</h2>
          <div className="w-full h-[800px]">
            <iframe
              src="https://meetings.hubspot.com/jhamdi?embed=true"
              frameBorder="0"
              style={{ width: '100%', height: '100%', minHeight: '800px', border: 'none' }}
              title="Schedule Meeting"
            />
          </div>
        </div>
      </Modal>
    </CTAFormContext.Provider>
  )
}

export function useCTAForm() {
  const context = useContext(CTAFormContext)
  if (context === undefined) {
    throw new Error('useCTAForm must be used within a CTAFormProvider')
  }
  return context
}
