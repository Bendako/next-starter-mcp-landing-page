import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Starter MCP - a local Next.js starter kit',
  description: 'A Bash generator and a local stdio MCP server that create Next.js apps with TypeScript, Tailwind CSS and optional Clerk and Convex scaffolding. One-time payment, source code included.',
  keywords: ['Next.js', 'MCP', 'Claude Desktop', 'TypeScript', 'Tailwind CSS', 'Convex', 'Clerk', 'starter kit'],
  authors: [{ name: 'btd' }],
  openGraph: {
    title: 'Next.js Starter MCP',
    description: 'A local Next.js starter kit: Bash generator plus stdio MCP server',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Starter MCP',
    description: 'A local Next.js starter kit: Bash generator plus stdio MCP server',
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