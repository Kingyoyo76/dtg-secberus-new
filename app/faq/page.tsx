'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCTAForm } from '@/contexts/cta-form-context'
import Link from 'next/link'
import { Header } from '@/components/header'
import SearchParamsWrapper from '@/components/search-params-wrapper';
import { InteractiveFAQItem } from '@/components/interactive-faq-item';
import { InteractiveCTAButton } from '@/components/interactive-cta-button';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Secberus and how does it help with cloud security?",
    answer: "Secberus is a cloud-native security and compliance automation platform that provides real-time visibility into your cloud infrastructure. It helps organizations maintain continuous compliance, automate security policies, and manage risk across multi-cloud environments. Through DTG, you get expert implementation and configuration support to maximize the platform's value."
  },
  {
    question: "How does Secberus automate compliance?",
    answer: "Secberus automates compliance through continuous monitoring and enforcement of security policies. It provides pre-built compliance frameworks (like SOC 2, ISO 27001, HIPAA, etc.), automatically maps controls to your cloud resources, and generates real-time compliance reports. DTG ensures proper setup and configuration of these frameworks for your specific needs."
  },
  {
    question: "What cloud platforms does Secberus support?",
    answer: "Secberus provides comprehensive support for major cloud providers including AWS, Microsoft Azure, and Google Cloud Platform (GCP). The platform offers unified visibility and control across multi-cloud environments through a single dashboard."
  },
  {
    question: "How does DTG help with Secberus implementation?",
    answer: "DTG streamlines the procurement and implementation process of Secberus. Our team handles licensing and can typically complete basic platform setup within days. Full implementation, including custom policy configuration and integration with your existing tools, is usually completed within weeks."
  },
  {
    question: "What kind of ongoing support is provided?",
    answer: "DTG provides comprehensive support for your Secberus implementation, including technical assistance, configuration updates, and optimization recommendations. Additionally, you get access to Secberus's platform updates, security policy updates, and compliance framework updates automatically."
  },
  {
    question: "How does Secberus handle policy enforcement?",
    answer: "Secberus provides real-time policy enforcement through its Policy-as-Code engine. It automatically detects and alerts on policy violations, provides remediation guidance, and can automatically enforce policies to prevent security drift. DTG helps customize these policies to match your organization's specific requirements."
  }
];

export default function FAQPage() {
  const { openHubspotForm, openHubspotMeeting } = useCTAForm()

  return (
    <SearchParamsWrapper>
      <div>
        <Header />
        <div className="bg-gray-50 py-12" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Home Button */}
            <div className="mb-8 flex justify-center">
              <Link href="/" className="inline-block">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 font-medium"
                >
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Learn more about the Secberus platform and how DTG helps with implementation
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
              <div className="divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                  <InteractiveFAQItem key={index} {...faq} />
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to get started with Secberus?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <InteractiveCTAButton
                  onClick={() => openHubspotForm()}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2"
                >
                  Start Free Trial
                </InteractiveCTAButton>
                <InteractiveCTAButton
                  onClick={() => openHubspotMeeting()}
                  className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-2"
                >
                  Schedule a Demo
                </InteractiveCTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchParamsWrapper>
  )
}
