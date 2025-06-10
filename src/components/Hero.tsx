'use client'

import { ArrowRight, Zap, Bot, Rocket, Github } from 'lucide-react'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
            <Bot className="h-4 w-4 mr-2" />
            Now integrated with Claude Desktop
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Build Professional{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Next.js Apps
            </span>{' '}
            in Minutes, Not Hours
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto text-balance">
            A powerful bash script + MCP server that creates production-ready Next.js applications 
            with TypeScript, Tailwind, Convex, and Clerk authentication. Now integrated with Claude Desktop.
          </p>

          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Setup</h3>
              <p className="text-slate-600">2700+ lines of battle-tested automation</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg mb-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Claude Integration</h3>
              <p className="text-slate-600">Use directly from Claude Desktop</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-lg mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Production Ready</h3>
              <p className="text-slate-600">Best practices baked in</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Get Started with Claude
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://github.com/Bendako/next-starter-mcp-landing-page', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">2700+</div>
              <div className="text-slate-600">Lines of automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">5</div>
              <div className="text-slate-600">Ready templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">3</div>
              <div className="text-slate-600">Auth options</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">1</div>
              <div className="text-slate-600">Command to start</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 