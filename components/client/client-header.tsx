'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useCTAForm } from "@/contexts/cta-form-context";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Features", href: "/#what-you-get" },
  { title: "How It Works", href: "/#how-it-works" },
  { title: "Results", href: "/#results" },
  { title: "FAQ", href: "/faq" },
];

export function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ctaForm = useCTAForm();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/thumbnail_Outlook-A black te.png"
                alt="DTG Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
              <span className="text-purple-600 text-2xl mx-2 font-bold">+</span>
              <Image
                src="/images/SECBERUS LOGO.png"
                alt="Secberus Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
            <Button
              onClick={() => ctaForm.openHubspotMeeting()}
              className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <Button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button
                onClick={() => {
                  ctaForm.openHubspotMeeting();
                  setIsMenuOpen(false);
                }}
                className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 mt-4"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
