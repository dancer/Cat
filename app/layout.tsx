import './globals.css'
import { Inter, Righteous } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import BlurProvider from './components/BlurProvider'

const inter = Inter({ subsets: ['latin'] })
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Nidalee - Account Manager',
  description: 'a sleek and secure account manager for League of Legends and Valorant. features encryption, quick launch, and category organization.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/card.jpg', sizes: '48x48', type: 'image/jpg' },
    ],
    apple: [
      { url: '/mac.icns', sizes: '180x180', type: 'image/x-icns' },
    ],
  },
  openGraph: {
    title: 'Nidalee - LoL & Valorant Account Manager',
    description: 'securely manage and launch your League of Legends and Valorant accounts with encryption, quick launch, and advanced organization features.',
    images: [
      {
        url: '/card.jpg',
        width: 256,
        height: 256,
        alt: 'nidalee',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nidalee - Game Account Manager',
    description: 'secure, fast, and elegant account management for LoL & Valorant. built with privacy in mind. ❤️',
    images: [{
      url: 'https://nidal.ee/lesscard.jpg',
      width: 256,
      height: 256,
      alt: 'nidalee'
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlurProvider>
          {children}
        </BlurProvider>
        <Analytics />
      </body>
    </html>
  )
}

