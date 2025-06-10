'use client'

import { useState, useEffect } from 'react'
import { Play, Terminal, Check, Clock, Zap, MessageSquare, Bot } from 'lucide-react'
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

const claudeSteps = [
  { text: '👤 Create a new Next.js app called "my-saas-app" with authentication and database', delay: 0, user: true },
  { text: '', delay: 1000 },
  { text: '🤖 I\'ll help you create a production-ready Next.js SaaS application!', delay: 1500, claude: true },
  { text: '', delay: 2000 },
  { text: '🤖 Let me run the Next.js Starter MCP script with the right configuration...', delay: 2500, claude: true },
  { text: '', delay: 3000 },
  { text: '⚡ Executing: ./create-next-starter.sh --template saas my-saas-app', delay: 3500, command: true },
  { text: '', delay: 4000 },
  { text: '✅ Setting up Next.js 14 with TypeScript', delay: 4500, success: true },
  { text: '✅ Configuring Tailwind CSS with custom theme', delay: 5000, success: true },
  { text: '✅ Installing Clerk for authentication', delay: 5500, success: true },
  { text: '✅ Setting up Convex real-time database', delay: 6000, success: true },
  { text: '✅ Generating SaaS-specific components', delay: 6500, success: true },
  { text: '✅ Configuring payment integration hooks', delay: 7000, success: true },
  { text: '', delay: 7500 },
  { text: '🎉 Perfect! Your SaaS application is ready to go!', delay: 8000, highlight: true, claude: true },
  { text: '', delay: 8500 },
  { text: '🤖 You can now run `npm run dev` to start building your SaaS product.', delay: 9000, claude: true },
]

export default function Demo() {
  const [terminalStep, setTerminalStep] = useState(0)
  const [claudeStep, setClaudeStep] = useState(0)
  const [isTerminalPlaying, setIsTerminalPlaying] = useState(false)
  const [isClaudePlaying, setIsClaudePlaying] = useState(false)
  const [terminalDisplayed, setTerminalDisplayed] = useState<typeof terminalSteps>([])
  const [claudeDisplayed, setClaudeDisplayed] = useState<typeof claudeSteps>([])

  // Terminal animation
  useEffect(() => {
    if (!isTerminalPlaying) return

    const timer = setTimeout(() => {
      if (terminalStep < terminalSteps.length) {
        setTerminalDisplayed(prev => [...prev, terminalSteps[terminalStep]])
        setTerminalStep(prev => prev + 1)
      } else {
        setIsTerminalPlaying(false)
      }
    }, terminalSteps[terminalStep]?.delay || 1000)

    return () => clearTimeout(timer)
  }, [terminalStep, isTerminalPlaying])

  // Claude animation
  useEffect(() => {
    if (!isClaudePlaying) return

    const timer = setTimeout(() => {
      if (claudeStep < claudeSteps.length) {
        setClaudeDisplayed(prev => [...prev, claudeSteps[claudeStep]])
        setClaudeStep(prev => prev + 1)
      } else {
        setIsClaudePlaying(false)
      }
    }, claudeSteps[claudeStep]?.delay || 1000)

    return () => clearTimeout(timer)
  }, [claudeStep, isClaudePlaying])

  const startTerminal = () => {
    setTerminalStep(0)
    setTerminalDisplayed([])
    setIsTerminalPlaying(true)
  }

  const startClaude = () => {
    setClaudeStep(0)
    setClaudeDisplayed([])
    setIsClaudePlaying(true)
  }

  const startBoth = () => {
    startTerminal()
    startClaude()
  }

  const resetBoth = () => {
    setTerminalStep(0)
    setClaudeStep(0)
    setTerminalDisplayed([])
    setClaudeDisplayed([])
    setIsTerminalPlaying(false)
    setIsClaudePlaying(false)
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
            Watch both methods create the same production-ready Next.js application. Choose your preferred workflow!
          </p>
        </div>

        {/* Demo Controls */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={startBoth}
              disabled={isTerminalPlaying || isClaudePlaying}
              size="lg"
              className="group"
            >
              <Play className="h-5 w-5 mr-2" />
              Run Both Demos
            </Button>
            <Button
              variant="outline"
              onClick={resetBoth}
              size="lg"
            >
              Reset Demos
            </Button>
          </div>
        </div>

        {/* Side by Side Demos */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Terminal Demo */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 flex items-center">
                <Terminal className="h-5 w-5 mr-2 text-slate-600" />
                Direct Script Usage
              </h3>
              <p className="text-slate-600">Traditional command-line approach</p>
            </div>
            
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
                {terminalDisplayed.map((step, index) => (
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
                    {index === terminalDisplayed.length - 1 && isTerminalPlaying && (
                      <span className="animate-pulse">|</span>
                    )}
                  </div>
                ))}
                {!isTerminalPlaying && terminalDisplayed.length === 0 && (
                  <div className="text-slate-500">
                    Click &quot;Run Both Demos&quot; to see the terminal in action...
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-slate-800 px-4 py-3 flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={startTerminal}
                  disabled={isTerminalPlaying}
                  className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Run Terminal
                </Button>
                <div className="text-slate-400 text-xs">
                  Terminal Demo
                </div>
              </div>
            </div>
          </div>

          {/* Claude Desktop Demo */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 flex items-center">
                <Bot className="h-5 w-5 mr-2 text-primary-600" />
                Claude Desktop MCP
              </h3>
              <p className="text-slate-600">Natural language AI-powered approach</p>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-slate-200">
              {/* Claude Header */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-4 py-3 flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4 text-primary-600" />
                  <span className="text-slate-700 text-sm font-medium">Claude Desktop</span>
                </div>
              </div>

              {/* Claude Content */}
              <div className="p-6 h-96 overflow-y-auto text-sm">
                {claudeDisplayed.map((step, index) => (
                  <div key={index} className="mb-3">
                    {step.text && (
                      <div className={`${
                        step.user 
                          ? 'bg-primary-50 text-primary-900 p-3 rounded-lg border border-primary-200' 
                          : step.claude
                          ? 'bg-secondary-50 text-secondary-900 p-3 rounded-lg border border-secondary-200'
                          : step.command
                          ? 'bg-slate-100 text-slate-800 p-2 rounded font-mono text-xs'
                          : step.success
                          ? 'text-green-600 flex items-center'
                          : step.highlight
                          ? 'text-primary-600 font-semibold'
                          : 'text-slate-600'
                      }`}>
                        {step.success && <Check className="h-3 w-3 mr-2" />}
                        {step.text}
                        {index === claudeDisplayed.length - 1 && isClaudePlaying && (
                          <span className="animate-pulse">|</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                {!isClaudePlaying && claudeDisplayed.length === 0 && (
                  <div className="text-slate-500">
                    Click &quot;Run Both Demos&quot; to see Claude Desktop in action...
                  </div>
                )}
              </div>

              {/* Claude Footer */}
              <div className="bg-slate-50 px-4 py-3 flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={startClaude}
                  disabled={isClaudePlaying}
                  className="border-primary-300 text-primary-700 hover:bg-primary-50"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Run Claude
                </Button>
                <div className="text-slate-500 text-xs">
                  Claude Desktop Demo
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Stats */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
            Two Methods, Same Powerful Result
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600">2700+</div>
              <div className="text-sm text-slate-600">Lines of automation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-600">98%</div>
              <div className="text-sm text-slate-600">Time savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">&lt; 2min</div>
              <div className="text-sm text-slate-600">Setup time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">5</div>
              <div className="text-sm text-slate-600">Ready templates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 