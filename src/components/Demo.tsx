'use client'

import { useState, useEffect } from 'react'
import { Play, Terminal, Check, Clock, Zap } from 'lucide-react'
import Button from './ui/Button'

const terminalSteps = [
  { text: '$ ./create-next-starter.sh my-saas-app', delay: 0 },
  { text: '🚀 Starting Next.js Starter MCP...', delay: 1000 },
  { text: '📁 Creating project structure...', delay: 1500 },
  { text: '✓ Project directory created', delay: 2000, success: true },
  { text: '📦 Installing dependencies...', delay: 2500 },
  { text: '✓ Next.js 14 installed', delay: 3000, success: true },
  { text: '✓ TypeScript configured', delay: 3200, success: true },
  { text: '✓ Tailwind CSS setup complete', delay: 3400, success: true },
  { text: '🔐 Setting up authentication...', delay: 3800 },
  { text: '✓ Clerk authentication configured', delay: 4200, success: true },
  { text: '🗄️ Setting up database...', delay: 4600 },
  { text: '✓ Convex backend configured', delay: 5000, success: true },
  { text: '🎨 Creating components...', delay: 5400 },
  { text: '✓ UI components generated', delay: 5800, success: true },
  { text: '✓ Authentication middleware setup', delay: 6000, success: true },
  { text: '✓ Database schemas created', delay: 6200, success: true },
  { text: '', delay: 6500 },
  { text: '🎉 Success! Your Next.js app is ready!', delay: 7000, highlight: true },
  { text: '📂 Project: my-saas-app/', delay: 7500 },
  { text: '🌐 Run: npm run dev', delay: 8000 },
]

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [displayedSteps, setDisplayedSteps] = useState<typeof terminalSteps>([])

  useEffect(() => {
    if (!isPlaying) return

    const timer = setTimeout(() => {
      if (currentStep < terminalSteps.length) {
        setDisplayedSteps(prev => [...prev, terminalSteps[currentStep]])
        setCurrentStep(prev => prev + 1)
      } else {
        setIsPlaying(false)
      }
    }, terminalSteps[currentStep]?.delay || 1000)

    return () => clearTimeout(timer)
  }, [currentStep, isPlaying])

  const startDemo = () => {
    setCurrentStep(0)
    setDisplayedSteps([])
    setIsPlaying(true)
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setDisplayedSteps([])
    setIsPlaying(false)
  }

  return (
    <section id="demo" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how the Next.js Starter MCP creates a complete production-ready application in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Terminal */}
          <div className="order-2 lg:order-1">
            <div className="bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Terminal className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400 text-sm font-mono">terminal</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-96 overflow-y-auto font-mono text-sm">
                {displayedSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${
                      step.success 
                        ? 'text-green-400' 
                        : step.highlight 
                        ? 'text-yellow-400 font-bold' 
                        : step.text.startsWith('$') 
                        ? 'text-blue-400'
                        : 'text-slate-300'
                    }`}
                  >
                    {step.text}
                    {index === displayedSteps.length - 1 && isPlaying && (
                      <span className="animate-pulse">|</span>
                    )}
                  </div>
                ))}
                {!isPlaying && displayedSteps.length === 0 && (
                  <div className="text-slate-500">
                    Click &quot;Run Demo&quot; to see the magic happen...
                  </div>
                )}
              </div>

              {/* Terminal Controls */}
              <div className="bg-slate-800 px-4 py-3 flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={startDemo}
                    disabled={isPlaying}
                    className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Run Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetDemo}
                    className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600"
                  >
                    Reset
                  </Button>
                </div>
                <div className="text-slate-400 text-xs">
                  ~{Math.max(0, terminalSteps.length - currentStep)} steps remaining
                </div>
              </div>
            </div>
          </div>

          {/* Demo Stats & Features */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Before vs After */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Before vs After</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-red-600 mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Manual Setup
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 2-4 hours configuration</li>
                    <li>• Multiple package installs</li>
                    <li>• Complex auth setup</li>
                    <li>• Database configuration</li>
                    <li>• TypeScript boilerplate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-600 mb-2 flex items-center">
                    <Zap className="h-4 w-4 mr-2" />
                    With Our Tool
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-2" />
                      2 minutes setup
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-2" />
                      One command
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-2" />
                      Production ready
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-2" />
                      Best practices
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-2" />
                      Claude integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">2700+</div>
                  <div className="text-sm text-slate-600">Lines of automation</div>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600">5</div>
                  <div className="text-sm text-slate-600">Ready templates</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-slate-600">Time saved</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="text-sm text-slate-600">Auth options</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1">
                Try with Claude
              </Button>
              <Button variant="outline" className="flex-1">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 