import './globals.css'
import { Inter, Righteous } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const righteous = Righteous({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'nidalee',
  description: 'download here',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/48.png', sizes: '48x48', type: 'image/png' },
      { url: '/64.png', sizes: '64x64', type: 'image/png' },
      { url: '/128.png', sizes: '128x128', type: 'image/png' },
      { url: '/256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [
      { url: '/mac.icns', sizes: '180x180', type: 'image/x-icns' },
    ],
  },
  openGraph: {
    title: 'nidalee',
    description: 'download here',
    images: [
      {
        url: '/256.png',
        width: 256,
        height: 256,
        alt: 'nidalee',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nidalee',
    description: 'download here',
    images: ['/256.png'],
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

