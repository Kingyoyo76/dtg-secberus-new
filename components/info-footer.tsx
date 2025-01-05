'use client'

import { Button } from "@/components/ui/button"
import { ExternalLink, Twitter, Linkedin } from 'lucide-react'

export function InfoFooter() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About DTG */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About DTG</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              DTG is a trusted technology reseller and services provider, helping organizations navigate and implement the right solutions 
              for their needs. With deep expertise in cloud security and compliance, we partner with leading platforms to deliver comprehensive 
              solutions and professional services that drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button 
                variant="outline"
                className="text-purple-600 border-purple-600 hover:bg-purple-50"
                onClick={() => window.open('https://dtg.com/who-we-are/', '_blank')}
              >
                Learn More About DTG
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-purple-600"
                  onClick={() => window.open('https://x.com/distechgroup', '_blank')}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-purple-600"
                  onClick={() => window.open('https://www.linkedin.com/company/distributed-technology-group/posts/?feedView=all', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* About Secberus */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About Secberus</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Secberus is a data intelligence platform that provides comprehensive visibility into your entire cloud ecosystem. 
              By unlocking complex data patterns and insights, Secberus empowers organizations to make faster, better-informed 
              decisions about their cloud infrastructure and security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button 
                variant="outline"
                className="text-purple-600 border-purple-600 hover:bg-purple-50"
                onClick={() => window.open('https://secberus.com', '_blank')}
              >
                Learn More About Secberus
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-purple-600"
                  onClick={() => window.open('https://www.linkedin.com/company/secberus/posts/?feedView=all', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
