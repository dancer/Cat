'use client'

import Link from 'next/link'
import { reviews } from '../data/reviews'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Reviews() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Top bar with decorative lines */}
      <div className="w-full px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xs tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors">
            BACK
          </Link>
          <div className="w-12 h-[1px] bg-neutral-300"></div>
        </div>
        <div className="text-xs tracking-wider text-neutral-500">REVIEWS</div>
        <div className="flex items-center gap-6">
          <div className="w-12 h-[1px] bg-neutral-300"></div>
          <div className="text-xs tracking-wider text-neutral-500">2024</div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="flex-1 px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-neutral-900">{review.author}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-[#ff4f4f] fill-[#ff4f4f]' : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#f5f5f5]">
        <div className="w-full h-[1px] bg-neutral-300 mb-4"></div>
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="text-[10px] md:text-sm tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            BACK TO HOME
          </Link>
        </div>
      </footer>
    </main>
  )
} 