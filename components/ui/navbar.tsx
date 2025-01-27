'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const domains = ['Tech', 'Designing', 'Social Media', 'Content', 'R&D', 'Marketing']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-1">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Innovest Logo"
                width={150}
                height={150}
                className="h-24 w-28"
              />
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden sm:flex flex-1 justify-center items-center space-x-6">
            <Link href="/" className="nav-link active">
              Home
            </Link>
            <Link href="/#benefits" className="nav-link">
              Benefits
            </Link>
            <Link href="/#domains" className="nav-link">
              Domains
            </Link>
            <Link href="/#activity" className="nav-link">
              Activities
            </Link>
            <Link href="/#timeline" className="nav-link">
              Roadmap
            </Link>
            <Link href="/#faq" className="nav-link">
              FAQ
            </Link>
          </div>

          {/* Register Button - Right */}
          <div className="hidden sm:flex flex-1 justify-end">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdXX_Ad-7WvemU1GnfQrgBUdLOVH6nvdPguynrcKF7vPdsrvw/viewform"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
      >
        {/* ... rest of the mobile menu code remains the same ... */}
        <div className="px-4 pt-2 pb-4 space-y-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        {/* Navigation Links */}
        <Link 
          href="/" 
          className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/#benefits" 
          className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Benefits
        </Link>
        <Link 
          href="/#domains" 
          className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Domains
        </Link>
        <Link 
          href="/#activity" 
          className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Activities
        </Link>
        <Link 
          href="/#timeline" 
          className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Roadmap
        </Link>
        <Link 
          href="/#faq" 
          className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </Link>
        
        {/* Register Button */}
        <div className="pt-2">
          <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdXX_Ad-7WvemU1GnfQrgBUdLOVH6nvdPguynrcKF7vPdsrvw/viewform"
        className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        onClick={() => setIsOpen(false)}
          >
        Register Now
          </Link>
        </div>
      </div>
      </motion.div>
    </nav>
  )
}
