import { Github, Linkedin, MessageCircle, Heart, Zap } from 'lucide-react'

const footerLinks = {
  Product: [
    { name: 'Demo', href: '#demo' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Code Examples', href: '#code-examples' },
    { name: 'Documentation', href: '#documentation' }
  ],
  Community: [
    { name: 'GitHub', href: 'https://github.com/Bendako/next-starter-mcp-landing-page' },
    { name: 'Discussions', href: 'https://github.com/Bendako/next-starter-mcp-landing-page/discussions' },
    { name: 'Issues', href: 'https://github.com/Bendako/next-starter-mcp-landing-page/issues' },
    { name: 'Contributing', href: 'https://github.com/Bendako/next-starter-mcp-landing-page/blob/main/CONTRIBUTING.md' }
  ],
  Resources: [
    { name: 'Installation Guide', href: '#installation' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'Troubleshooting', href: '/docs/troubleshooting' },
    { name: 'Changelog', href: '/changelog' }
  ],
  Legal: [
    { name: 'MIT License', href: 'https://github.com/Bendako/next-starter-mcp-landing-page/blob/main/LICENSE' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Code of Conduct', href: '/code-of-conduct' }
  ]
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Bendako/next-starter-mcp-landing-page' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/bendako' },
  { name: 'Discord', icon: MessageCircle, href: 'https://github.com/Bendako/next-starter-mcp-landing-page/discussions' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Next.js Starter MCP
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Build professional Next.js applications in minutes with our powerful automation script and Claude Desktop integration.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="py-8 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">2700+</div>
              <div className="text-sm text-slate-400">Lines of automation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">5</div>
              <div className="text-sm text-slate-400">Ready templates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-slate-400">Time saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">2.4k+</div>
              <div className="text-sm text-slate-400">GitHub stars</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>© {currentYear} Next.js Starter MCP.</span>
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by the open source community.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Status
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Releases
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 