'use client'

import { useState, useEffect } from 'react'
import { Play, Terminal, Check, Clock, Zap, MessageSquare, Bot, ArrowRight, Download, Settings, Copy, Info } from 'lucide-react'
import Button from './ui/Button'
import { Card } from './ui/Card'

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

const scriptExamples = [
  {
    title: 'Full-Featured App',
    description: 'Create a complete application with all features',
    code: `# Create full-featured app with authentication and database
./create-next-starter.sh my-saas-app

# This includes:
# - Next.js 14 with TypeScript
# - Tailwind CSS with custom configuration
# - Convex database with schemas
# - Clerk authentication with middleware
# - ESLint and Prettier setup`
  },
  {
    title: 'Minimal Blog Setup',
    description: 'Lightweight setup for content-focused sites',
    code: `# Create minimal blog without database or auth
./create-next-starter.sh --skip-convex --skip-clerk --template minimal my-blog

# Perfect for:
# - Static blogs
# - Portfolio sites
# - Documentation
# - Landing pages`
  },
  {
    title: 'Preview Mode',
    description: 'See what will be created before running',
    code: `# Preview what the script will create
./create-next-starter.sh --dry-run my-test-app

# Shows:
# - File structure
# - Dependencies to install
# - Configuration files
# - Estimated setup time`
  },
  {
    title: 'Custom Configuration',
    description: 'Fine-tune your setup with specific options',
    code: `# Custom setup with specific features
./create-next-starter.sh \\
  --template default \\
  --skip-git \\
  --use-npm \\
  --custom-theme \\
  my-custom-app`
  }
]

const claudeExamples = [
  {
    user: 'Create a new Next.js app called "my-dashboard" with authentication but without database',
    claude: `I'll create your Next.js dashboard app with authentication. Let me run the script with the appropriate flags.

Running: ./create-next-starter.sh --skip-convex my-dashboard

✓ Setting up Next.js 14 with TypeScript
✓ Configuring Tailwind CSS  
✓ Installing Clerk authentication
✓ Setting up protected routes
✓ Configuring middleware

Your dashboard app is ready! You can start developing with authentication already configured.`
  },
  {
    user: 'Show me what would be created for a minimal blog app',
    claude: `I'll show you what would be created for a minimal blog setup.

Running: ./create-next-starter.sh --dry-run --template minimal my-blog

📁 Project Structure Preview:
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
├── tailwind.config.js
├── tsconfig.json
└── package.json

📦 Dependencies: next, react, typescript, tailwindcss
⏱️ Estimated setup time: 2-3 minutes
💾 Disk space: ~150MB`
  },
  {
    user: 'Test the script integrity and show available options',
    claude: `I'll run a comprehensive test of the script and show you all available options.

Running: ./create-next-starter.sh --test --help

✅ Script integrity check passed
✅ All dependencies available
✅ Required tools installed

Available options:
  --template [minimal|default|full|blog|saas]
  --skip-convex     Skip database setup
  --skip-clerk      Skip authentication
  --dry-run         Preview only, don't create
  --help           Show this help message

Everything looks good! Ready to create projects.`
  }
]

export default function SeeInAction() {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'examples'>('overview')
  const [terminalStep, setTerminalStep] = useState(0)
  const [claudeStep, setClaudeStep] = useState(0)
  const [isTerminalPlaying, setIsTerminalPlaying] = useState(false)
  const [isClaudePlaying, setIsClaudePlaying] = useState(false)
  const [terminalDisplayed, setTerminalDisplayed] = useState<typeof terminalSteps>([])
  const [claudeDisplayed, setClaudeDisplayed] = useState<typeof claudeSteps>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [activeCodeTab, setActiveCodeTab] = useState<'script' | 'claude'>('claude')

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

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section id="see-in-action" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore two powerful ways to build Next.js applications: traditional command-line interface or AI-powered natural language interaction with Claude Desktop.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center ${
                activeTab === 'overview'
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Info className="h-4 w-4 mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center ${
                activeTab === 'demo'
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Play className="h-4 w-4 mr-2" />
              Live Demo
            </button>
            <button
              onClick={() => setActiveTab('examples')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center ${
                activeTab === 'examples'
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="h-4 w-4 mr-2" />
              Code Examples
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Direct Script Usage */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-slate-600 to-slate-800 p-3 rounded-lg mr-4">
                    <Terminal className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Direct Script Usage</h3>
                    <p className="text-slate-600">Traditional developer workflow</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Download Script</h4>
                      <p className="text-slate-600">Get the bash script from GitHub</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Make Executable</h4>
                      <p className="text-slate-600">chmod +x create-next-starter.sh</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Run with Options</h4>
                      <p className="text-slate-600">Command-line interface with full control</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm mb-6">
                  <div className="text-slate-400"># Full-featured app</div>
                  <div>./create-next-starter.sh my-saas-app</div>
                  <div className="text-slate-400 mt-2"># Minimal setup</div>
                  <div>./create-next-starter.sh --skip-convex --minimal my-blog</div>
                </div>

                <Button variant="outline" className="w-full" onClick={() => window.open('https://github.com/Bendako/next-starter-script', '_blank')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Script
                </Button>
              </Card>

              {/* Claude Desktop Integration */}
              <Card className="p-8 border-primary-200 bg-gradient-to-br from-primary-50 to-blue-50">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-lg mr-4">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Claude Desktop Integration</h3>
                    <p className="text-slate-600">AI-powered development workflow</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary-100 text-secondary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Install MCP Server</h4>
                      <p className="text-slate-600">Add to Claude Desktop configuration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary-100 text-secondary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Natural Language</h4>
                      <p className="text-slate-600">Describe what you want to build</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary-100 text-secondary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Watch Creation</h4>
                      <p className="text-slate-600">Real-time project generation</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 rounded-lg p-4 border border-primary-200 mb-6">
                  <div className="text-slate-600 text-sm mb-2">💬 You:</div>
                                     <div className="text-slate-900 italic">&ldquo;Create a new Next.js app called &lsquo;my-dashboard&rsquo; with authentication but without database&rdquo;</div>
                  <div className="text-slate-600 text-sm mt-4 mb-2">🤖 Claude:</div>
                  <div className="text-slate-900">I&rsquo;ll create your Next.js dashboard app with authentication. Let me run the script...</div>
                </div>

                <Button className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Setup Claude Integration
                </Button>
              </Card>
            </div>

            {/* Workflow Diagram */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Unified Workflow</h3>
              
              <div className="flex items-center justify-center space-x-4 md:space-x-8">
                <div className="text-center">
                  <div className="bg-primary-100 text-primary-600 rounded-lg p-4 mb-2">
                    <Bot className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="text-sm font-medium text-slate-900">Your Request</div>
                  <div className="text-xs text-slate-600">CLI or Claude</div>
                </div>
                
                <ArrowRight className="h-6 w-6 text-slate-400 flex-shrink-0" />
                
                <div className="text-center">
                  <div className="bg-secondary-100 text-secondary-600 rounded-lg p-4 mb-2">
                    <Settings className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="text-sm font-medium text-slate-900">MCP Server</div>
                  <div className="text-xs text-slate-600">Process & Validate</div>
                </div>
                
                <ArrowRight className="h-6 w-6 text-slate-400 flex-shrink-0" />
                
                <div className="text-center">
                  <div className="bg-green-100 text-green-600 rounded-lg p-4 mb-2">
                    <Terminal className="h-8 w-8 mx-auto" />
                  </div>
                  <div className="text-sm font-medium text-slate-900">Bash Script</div>
                  <div className="text-xs text-slate-600">Execute Creation</div>
                </div>
                
                <ArrowRight className="h-6 w-6 text-slate-400 flex-shrink-0" />
                
                <div className="text-center">
                  <div className="bg-yellow-100 text-yellow-600 rounded-lg p-4 mb-2">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="text-sm font-medium text-slate-900">Next.js App</div>
                  <div className="text-xs text-slate-600">Ready to develop</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'demo' && (
          <div className="space-y-12">
            <div className="text-center">
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Watch both methods create the same production-ready Next.js application. Choose your preferred workflow!
              </p>
              
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
            <div className="grid lg:grid-cols-2 gap-8">
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
                        Click "Run Both Demos" to see the script in action...
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Claude Demo */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 flex items-center">
                    <Bot className="h-5 w-5 mr-2 text-primary-600" />
                    Claude Desktop Integration
                  </h3>
                  <p className="text-slate-600">AI-powered natural language approach</p>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-slate-200">
                  {/* Claude Header */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-4 py-3 flex items-center space-x-2 border-b border-slate-200">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-primary-600" />
                      <span className="text-slate-700 text-sm font-medium">Claude Desktop</span>
                    </div>
                    <div className="ml-auto flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-500">Connected</span>
                    </div>
                  </div>

                  {/* Claude Content */}
                  <div className="p-6 h-96 overflow-y-auto">
                    {claudeDisplayed.map((step, index) => (
                      <div
                        key={index}
                        className={`mb-3 ${
                          step.user 
                            ? 'bg-slate-100 p-3 rounded-lg ml-8' 
                            : step.claude 
                            ? 'bg-primary-50 p-3 rounded-lg mr-8'
                            : step.command
                            ? 'bg-slate-900 text-green-400 p-3 rounded-lg font-mono text-sm'
                            : step.success
                            ? 'text-green-600 ml-4'
                            : step.highlight
                            ? 'text-primary-600 font-semibold'
                            : 'text-slate-700'
                        }`}
                      >
                        {step.text}
                        {index === claudeDisplayed.length - 1 && isClaudePlaying && !step.user && (
                          <span className="animate-pulse">|</span>
                        )}
                      </div>
                    ))}
                    {!isClaudePlaying && claudeDisplayed.length === 0 && (
                      <div className="text-slate-500 text-center py-8">
                        Click "Run Both Demos" to see Claude in action...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real usage examples for both direct script usage and Claude Desktop integration
              </p>
            </div>

            {/* Code Tab Navigation */}
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200">
                <button
                  onClick={() => setActiveCodeTab('script')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center ${
                    activeCodeTab === 'script'
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Terminal className="h-4 w-4 mr-2" />
                  Script Usage
                </button>
                <button
                  onClick={() => setActiveCodeTab('claude')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center ${
                    activeCodeTab === 'claude'
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Claude Integration
                </button>
              </div>
            </div>

            {/* Script Examples */}
            {activeCodeTab === 'script' && (
              <div className="grid md:grid-cols-2 gap-8">
                {scriptExamples.map((example, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {example.title}
                        </h3>
                        <p className="text-slate-600 text-sm">{example.description}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(example.code, index)}
                        className="p-2 text-slate-500 hover:text-slate-700 transition-colors"
                      >
                        {copiedIndex === index ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    
                    <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                        {example.code}
                      </pre>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Claude Examples */}
            {activeCodeTab === 'claude' && (
              <div className="space-y-8">
                {claudeExamples.map((example, index) => (
                  <Card key={index} className="p-8">
                    <div className="space-y-6">
                      {/* User Message */}
                      <div className="bg-slate-100 rounded-lg p-4 ml-8">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs">👤</span>
                          </div>
                          <span className="font-medium text-slate-900">You</span>
                        </div>
                        <p className="text-slate-800">{example.user}</p>
                      </div>

                      {/* Claude Response */}
                      <div className="bg-primary-50 rounded-lg p-4 mr-8">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-2">
                            <Bot className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-medium text-slate-900">Claude</span>
                          <button
                            onClick={() => copyToClipboard(example.claude, index + 100)}
                            className="ml-auto p-1 text-slate-500 hover:text-slate-700 transition-colors"
                          >
                            {copiedIndex === index + 100 ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <pre className="text-slate-800 whitespace-pre-wrap text-sm">{example.claude}</pre>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}