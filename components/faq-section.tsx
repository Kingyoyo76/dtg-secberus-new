'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from './ui/button'

interface FAQItem {
  question: string
  answer: string
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
    answer: "DTG streamlines the procurement and implementation process of Secberus. Our team handles license acquisition, provides expert configuration support, ensures proper integration with your existing infrastructure, and offers ongoing technical support to optimize your security and compliance automation."
  },
  {
    question: "What security frameworks and standards does Secberus support?",
    answer: "Secberus supports a wide range of compliance frameworks including SOC 1/2, ISO 27001, HIPAA, GDPR, PCI DSS, NIST, and CIS benchmarks. The platform continuously updates its policies to reflect the latest compliance requirements and security best practices."
  },
  {
    question: "How quickly can we get started with Secberus?",
    answer: "Through DTG, you can get started with Secberus quickly and efficiently. We handle the licensing process and can typically complete basic platform setup within days. Full implementation, including custom policy configuration and integration with your existing tools, is usually completed within weeks."
  },
  {
    question: "What kind of ongoing support is provided?",
    answer: "DTG provides comprehensive support for your Secberus implementation, including technical assistance, configuration updates, and optimization recommendations. Additionally, you get access to Secberus's platform updates, security policy updates, and compliance framework updates automatically."
  },
  {
    question: "How does Secberus handle policy enforcement?",
    answer: "Secberus provides real-time policy enforcement through its Policy-as-Code engine. It automatically detects and alerts on policy violations, provides remediation guidance, and can automatically enforce policies to prevent security drift. DTG helps customize these policies to match your organization's specific requirements."
  }
]

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-purple-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-purple-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  return (
    <div className="bg-gray-50 py-12" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
