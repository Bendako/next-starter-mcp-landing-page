import { Terminal, Bot, ArrowRight, Settings } from 'lucide-react'
import { Card } from './ui/Card'
import { links } from '@/lib/site'

const dryRunCommand = 'bash ./create-next-starter.sh --dry-run --skip-clerk --skip-convex --template minimal -- my-app'

const dryRunOutput = `🔍 DRY RUN MODE - Preview of actions:
==================================
App Name: my-app
Template: minimal
Skip Convex: true
Skip Clerk: true
Verbose: false

Would create:
  📁 Directory: my-app/
  📦 Next.js app with TypeScript & Tailwind
  🔧 Utility functions and components
  📋 Minimal template (same dependencies/components as default)

💡 Run without --dry-run to execute these actions
🎉 Setup completed successfully!`

const templates = [
  {
    name: 'default',
    text: 'Next.js, TypeScript, Tailwind, shared UI utilities and components, plus optional Clerk and Convex scaffolding unless you skip them.',
  },
  {
    name: 'minimal',
    text: 'Same installed dependencies and components as default. It currently adds no further customizations.',
  },
  {
    name: 'full',
    text: 'Same as default, plus Loading and ErrorBoundary components.',
  },
]

const mcpTools = [
  { name: 'create_nextjs_app', text: 'Generates an app.' },
  { name: 'dry_run', text: 'Previews an app without creating files.' },
  { name: 'test_script', text: 'Runs the generator self-tests.' },
  { name: 'script_help', text: 'Returns the generator help text.' },
]

export default function SeeInAction() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Use the generator directly from your terminal, or let an MCP client call the same generator on your machine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-slate-600 to-slate-800 p-3 rounded-lg mr-4">
                <Terminal className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">From your terminal</h3>
                <p className="text-slate-600">Run the Bash generator</p>
              </div>
            </div>
            <p className="text-slate-600 mb-4">
              Pass flags to choose a template and to skip Clerk or Convex. Use <code className="font-mono text-sm">--</code> before the app name.
            </p>
            <pre className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
{`bash ./create-next-starter.sh --skip-clerk --skip-convex --template minimal -- my-app`}
            </pre>
          </Card>

          <Card className="p-8 border-primary-200 bg-gradient-to-br from-primary-50 to-blue-50">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-lg mr-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">From an MCP client</h3>
                <p className="text-slate-600">Claude Desktop, Codex or Cursor</p>
              </div>
            </div>
            <p className="text-slate-600 mb-4">
              The local stdio server exposes four tools. Your client calls them, and the server runs the same script on your machine.
            </p>
            <ul className="space-y-2">
              {mcpTools.map((tool) => (
                <li key={tool.name} className="text-slate-700 text-sm">
                  <code className="font-mono bg-white/80 border border-primary-200 rounded px-1.5 py-0.5">{tool.name}</code>{' '}
                  {tool.text}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">One generator, two ways in</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 rounded-lg p-4 mb-2 inline-block">
                <Bot className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-sm font-medium text-slate-900">Your request</div>
              <div className="text-xs text-slate-600">Terminal or MCP client</div>
            </div>
            <ArrowRight className="h-6 w-6 text-slate-400 flex-shrink-0 rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="bg-secondary-100 text-secondary-600 rounded-lg p-4 mb-2 inline-block">
                <Settings className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-sm font-medium text-slate-900">Local MCP server</div>
              <div className="text-xs text-slate-600">Validates arguments (MCP path only)</div>
            </div>
            <ArrowRight className="h-6 w-6 text-slate-400 flex-shrink-0 rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="bg-green-100 text-green-600 rounded-lg p-4 mb-2 inline-block">
                <Terminal className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-sm font-medium text-slate-900">create-next-starter.sh</div>
              <div className="text-xs text-slate-600">Generates the Next.js app</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Preview before you generate</h3>
            <p className="text-slate-600 text-sm mb-4">
              Real output of the dry run below, captured from the current generator. It prints a plan and creates nothing.
            </p>
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <div className="text-blue-400 font-mono text-sm mb-3 whitespace-pre-wrap break-all">$ {dryRunCommand}</div>
              <pre className="text-slate-200 font-mono text-sm overflow-x-auto">{dryRunOutput}</pre>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Three templates</h3>
            <p className="text-slate-600 text-sm mb-4">
              Choose one with <code className="font-mono">--template default|minimal|full</code>. The{' '}
              <code className="font-mono">--skip-clerk</code> and <code className="font-mono">--skip-convex</code> flags apply to every template.
            </p>
            <dl className="space-y-4">
              {templates.map((tpl) => (
                <div key={tpl.name}>
                  <dt className="font-mono font-semibold text-slate-900">{tpl.name}</dt>
                  <dd className="text-slate-600 text-sm">{tpl.text}</dd>
                </div>
              ))}
            </dl>
            <p className="text-slate-500 text-sm mt-6">
              Full option list: <code className="font-mono">bash ./create-next-starter.sh --help</code>. MCP client setup:{' '}
              <a href={links.mcpSetup} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">
                client configuration guide
              </a>
              .
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
