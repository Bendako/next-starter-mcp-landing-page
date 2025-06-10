import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Starter MCP - Professional Landing Page',
  description: 'A powerful tool combining bash automation with Claude Desktop integration for creating production-ready Next.js applications with TypeScript, Tailwind, Convex, and Clerk authentication.',
  keywords: ['Next.js', 'MCP', 'Claude Desktop', 'TypeScript', 'Tailwind CSS', 'Convex', 'Clerk', 'automation'],
  authors: [{ name: 'Next.js Starter MCP' }],
  openGraph: {
    title: 'Next.js Starter MCP',
    description: 'Build Professional Next.js Apps in Minutes, Not Hours',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Starter MCP',
    description: 'Build Professional Next.js Apps in Minutes, Not Hours',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 