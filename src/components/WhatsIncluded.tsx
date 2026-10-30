import { Terminal, Bot, Layers, ShieldCheck, FolderOpen, KeyRound } from 'lucide-react'
import { Card } from './ui/Card'

const items = [
  {
    icon: Terminal,
    title: 'Bash generator',
    description:
      'create-next-starter.sh generates a Next.js project and adds components, utilities, environment placeholders and optional integrations.',
    color: 'text-green-600 bg-green-100',
  },
  {
    icon: Bot,
    title: 'Local stdio MCP server',
    description:
      'A TypeScript server exposes the generator to Claude Desktop, Codex or Cursor. It runs on your machine and launches Bash with an argument array.',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    icon: Layers,
    title: 'Modern defaults',
    description:
      'Apps are created with create-next-app using TypeScript, Tailwind CSS, ESLint, the App Router, a src/ directory and the @/* import alias.',
    color: 'text-purple-600 bg-purple-100',
  },
  {
    icon: KeyRound,
    title: 'Optional Clerk and Convex',
    description:
      'Scaffolding and environment placeholders for Clerk authentication and Convex. Use the skip flags to leave either out. You bring your own accounts and keys.',
    color: 'text-indigo-600 bg-indigo-100',
  },
  {
    icon: FolderOpen,
    title: 'Three templates',
    description: 'default, minimal and full. See How it works for what each one does.',
    color: 'text-yellow-600 bg-yellow-100',
  },
  {
    icon: ShieldCheck,
    title: 'Dry run and self-tests',
    description:
      'Preview an app with --dry-run, and run the generator self-tests with --test. Generation success alone does not prove your app is production ready, so run lint and build for your own configuration.',
    color: 'text-pink-600 bg-pink-100',
  },
]

export default function WhatsIncluded() {
  return (
    <section id="whats-included" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What&rsquo;s included</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            You receive source code to inspect and adapt. You still configure external services, test your app and choose where to
            deploy it. Third-party services, hosting and any paid MCP client are separate from the kit purchase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card key={item.title} className="h-full">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
