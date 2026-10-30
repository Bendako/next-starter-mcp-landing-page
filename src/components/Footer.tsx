import Link from 'next/link'
import { Linkedin, Zap } from 'lucide-react'
import { links } from '@/lib/site'

type FooterLink = { name: string; href: string; external?: boolean }

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { name: 'How it works', href: '/#how-it-works' },
    { name: "What's included", href: '/#whats-included' },
    { name: 'Installation', href: '/#installation' },
    { name: 'Pricing', href: '/#pricing' },
  ],
  Resources: [
    { name: 'Changelog', href: links.changelog, external: true },
    { name: 'Troubleshooting', href: links.troubleshooting, external: true },
    { name: 'MCP client setup', href: links.mcpSetup, external: true },
  ],
  Support: [
    { name: 'GitHub Issues', href: links.issues, external: true },
    { name: 'Contributing', href: links.contributing, external: true },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Next.js Starter MCP</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm text-sm">
              A local Next.js starter kit: a Bash generator and a stdio MCP server.
            </p>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-slate-800 text-sm text-slate-400">
          <span>&copy; 2026 btd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
