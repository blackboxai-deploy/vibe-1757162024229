import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Keshia Renee M. Lapitan - Virtual Assistant & Appointment Setter',
  description: 'Professional resume of Keshia Renee M. Lapitan - Virtual Assistant and Appointment Setter with expertise in administrative support, communication, and remote work.',
  keywords: 'virtual assistant, appointment setter, administrative support, remote work, customer service, Microsoft Office, Google Workspace',
  authors: [{ name: 'Keshia Renee M. Lapitan' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Keshia Renee M. Lapitan - Professional Resume',
    description: 'Virtual Assistant & Appointment Setter - Professional, reliable, and committed to excellence',
    type: 'profile',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @media print {
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              body {
                margin: 0 !important;
                padding: 0 !important;
              }
              .no-print {
                display: none !important;
              }
              .print-break-inside {
                break-inside: avoid !important;
              }
              .print-page-break {
                page-break-before: always !important;
              }
            }
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}