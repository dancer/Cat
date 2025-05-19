'use client'

import Link from 'next/link'
import { Righteous } from 'next/font/google'
import { Copy, Check, Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [downloadText, setDownloadText] = useState('DOWNLOAD HERE')

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    const email = 'mail@nidal.ee'

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = email
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  useEffect(() => {
    setDownloadText('DOWNLOAD_HERE')
  }, [])


  return (
    <main className="min-h-screen bg-[#f5f5f5] flex flex-col select-none">
      {/* Top bar with decorative lines */}
      <div className="w-full px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-xs tracking-wider text-neutral-500">v0.1.2</div>
          <div className="w-12 h-[1px] bg-neutral-300"></div>
        </div>
        <div className="flex items-center">
          <Image src="/48.png" alt="Logo icon" width={24} height={24} className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-6">
          <div className="w-12 h-[1px] bg-neutral-300"></div>
          <div className="text-xs tracking-wider text-neutral-500">2024</div>
        </div>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-32">
        {/* Vertical line */}
        <div className="w-[1px] h-24 bg-neutral-300 mb-16"></div>

        {/* Logo with mirror effect */}
        <div className="text-center mb-16 relative">
          <h1 className={`text-6xl text-[#ff4f4f] ${righteous.className}`}>
            nidalee.
          </h1>
          <div
            className={`text-6xl text-[#ff4f4f] opacity-30 transform scale-y-[-1] absolute top-full left-0 right-0 overflow-hidden pt-1 ${righteous.className}`}
            aria-hidden="true"
          >
            nidalee.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md px-4">
          <Link
            href="https://github.com/dancer/Nidalee/releases/download/v0.1.2/Nidalee.msi"
            className="flex-1 bg-[#ff4f4f] hover:bg-[#ff3f3f] transition-colors px-6 py-3 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            <span className="text-white font-mono text-xs tracking-widest uppercase font-bold">Download for PC</span>
          </Link>
          <div
            className="flex-1 bg-neutral-400 px-6 py-3 flex items-center justify-center gap-2 cursor-not-allowed"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm4-8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
            </svg>
            <span className="text-white font-mono text-xs tracking-widest uppercase font-bold">Mac Version Soon</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-1">
          <p className="text-[10px] md:text-xs tracking-wider text-neutral-500 uppercase">
            Secure account manager for League of Legends and Valorant
          </p>
          <p className="text-[10px] md:text-xs tracking-wider text-[#ff4f4f] uppercase">
            Encryption • Quick Launch • Category Organization
          </p>
        </div>
      </div>

      {/* Navigation */}
      <footer className="footer">
        <div className="w-full flex flex-col items-center pb-4 mt-16 mb-safe">
          <div className="w-full h-[1px] bg-neutral-300 mb-4"></div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16">
            <Link
              href="https://github.com/dancer/nidalee"
              className="text-[10px] md:text-sm tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </Link>
            <Link
              href="#"
              className="text-[10px] md:text-sm tracking-wider text-[#ff4f4f] hover:text-[#ff8f8f] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCORD
            </Link>
            <Link
              href="https://ko-fi.com/uoucat"
              className="text-[10px] md:text-sm tracking-wider text-[#ff4f4f] hover:text-[#ff8f8f] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              KO-FI
            </Link>
            <button
              onClick={handleCopyEmail}
              className="text-[10px] md:text-sm tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors group flex items-center gap-1 md:gap-2"
              aria-label="Copy email address"
            >
              CONTACT
              {copied ? (
                <Check className="w-3 h-3 md:w-4 md:h-4 text-green-600" aria-hidden="true" />
              ) : (
                <Copy className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              )}
              <span className="sr-only">{copied ? 'Email copied' : 'Copy email address'}</span>
            </button>
            <Link
              href="/reviews"
              className="text-[10px] md:text-sm tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              REVIEWS
            </Link>
          </nav>
        </div>
      </footer>

      <style jsx>{`
        @keyframes swing {
          0% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }
        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
