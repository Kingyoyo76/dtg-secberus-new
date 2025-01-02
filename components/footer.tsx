'use client'

import Link from 'next/link'
import { LucideLinkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Secberus */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Secberus</h3>
            <p className="text-gray-600 text-sm mb-4">
              Secberus helps enterprise "Cloud Strategy & Governance" and "Integrated Risk, Compliance, & Audit Teams" ensure technical controls are in place and aligned across their tech ecosystem to meet security, operational, and compliance requirements, reducing security risks, productivity losses, and regulatory fines.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/secberus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <LucideLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/secberus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* About DTG */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About DTG</h3>
            <p className="text-gray-600 text-sm mb-4">
              DTG is your trusted technology partner, specializing in implementing and optimizing Secberus solutions. As a leading technology reseller, we ensure seamless integration, expert configuration, and ongoing support to help organizations maximize their security and compliance investments.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/distributed-technology-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <LucideLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/dtg_us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            {new Date().getFullYear()} DTG. All rights reserved. Secberus® is a registered trademark of Secberus, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
