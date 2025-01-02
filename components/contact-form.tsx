'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [preferredContact, setPreferredContact] = useState('email')
  const [organization, setOrganization] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, telephone, preferredContact, organization })
    // Reset form fields
    setName('')
    setEmail('')
    setTelephone('')
    setPreferredContact('email')
    setOrganization('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Input type="tel" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
      <select
        value={preferredContact}
        onChange={(e) => setPreferredContact(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        required
      >
        <option value="email">Prefer Email</option>
        <option value="phone">Prefer Phone</option>
      </select>
      <Input type="text" placeholder="Organization" value={organization} onChange={(e) => setOrganization(e.target.value)} required />
      <Button type="submit" className="w-full">Speak to Our Compliance Experts Today</Button>
    </form>
  )
}

