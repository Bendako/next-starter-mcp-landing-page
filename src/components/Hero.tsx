import Link from 'next/link'
import { Zap, Bot, Rocket, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
            <Bot className="h-4 w-4 mr-2" />
            Works from your terminal or Claude via MCP
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
            A reusable{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Next.js starter kit
            </span>{' '}
            you run on your own machine
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto text-balance">
            A Bash generator and a local MCP server that create a Next.js app with TypeScript, Tailwind CSS,
            ESLint and the App Router, plus optional Clerk authentication and Convex database scaffolding.
            One-time payment, source code included.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Bash generator</h3>
              <p className="text-slate-600">One command creates the app, with flags to skip Clerk or Convex</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg mb-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Local MCP server</h3>
              <p className="text-slate-600">Claude Desktop, Codex and Cursor can call the same generator over stdio</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-lg mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Source you own</h3>
              <p className="text-slate-600">Inspect and adapt the code; you choose where to deploy</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary-500 to-primary-700 px-8 py-4 text-lg font-medium text-white shadow-lg hover:from-primary-600 hover:to-primary-800 transition-all"
            >
              Get the kit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/#installation"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary-500 px-8 py-4 text-lg font-medium text-primary-600 hover:bg-primary-50 transition-colors"
            >
              See the install steps
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">3</div>
              <div className="text-slate-600">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">4</div>
              <div className="text-slate-600">MCP tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">2</div>
              <div className="text-slate-600">Optional integrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
