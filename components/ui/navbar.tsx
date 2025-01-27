'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const domains = ['Tech', 'Designing', 'Social Media', 'Content', 'R&D', 'Marketing']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
        <Link href="/" className="flex-shrink-0 flex items-center">
          <span className="text-xl font-bold">INNOVEST 2025</span>
        </Link>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
        <Link href="/" className="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">
          Home
        </Link>
        <Link href="/#benefits" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
          Benefits
        </Link>
        <Link href="/#domains" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
          Domains
        </Link>
        <Link href="/#activity" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
          Activities
        </Link>
        <Link href="/#timeline" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
          Roadmap
        </Link>
        <Link href="/#faq" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
          FAQ
        </Link>
        <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
          Register
        </Link>
        </div>
        <div className="flex items-center">
        <div className="-mr-2 flex items-center sm:hidden">
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          </button>
        </div>
        </div>
      </div>
      </div>
      <motion.div
      className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 }
      }}
      >
      <div className="pt-2 pb-3 space-y-1">
        <Link href="/" className="bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
        Home
        </Link>
        <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md w-full"
        >
          <span className="flex-1 text-left pl-1">Domains</span>
          <ChevronDown className="ml-1 h-5 w-5" />
        </button>
        {isOpen && (
          <div className="mt-2 space-y-1">
          {domains.map((domain) => (
            <Link
            key={domain}
            href={`/${domain.toLowerCase() === 'r&d' ? 'r-and-d' : domain.toLowerCase().replace(' ', '-')}`}
            className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 pl-10"
            >
            {domain}
            </Link>
          ))}
          </div>
        )}
        </div>
        <Link href="/#timeline" className="text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
        Timeline
        </Link>
        <Link href="/#faq" className="text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
        FAQ
        </Link>
      </div>
      </motion.div>
    </nav>
  )
}