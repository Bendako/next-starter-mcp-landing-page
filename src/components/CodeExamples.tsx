'use client'

import { useState } from 'react'
import { Terminal, MessageSquare, Copy, Check } from 'lucide-react'
import { Card } from './ui/Card'
import Button from './ui/Button'

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

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState<'script' | 'claude'>('script')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

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
    <section id="code-examples" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Code Examples
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See the Next.js Starter MCP in action with real usage examples for both direct script usage and Claude Desktop integration
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('script')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center ${
                activeTab === 'script'
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="h-4 w-4 mr-2" />
              Script Usage
            </button>
            <button
              onClick={() => setActiveTab('claude')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center ${
                activeTab === 'claude'
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
        {activeTab === 'script' && (
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
        {activeTab === 'claude' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {claudeExamples.map((example, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-100 text-primary-600 rounded-full p-2 flex-shrink-0">
                      <span className="text-sm">👤</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                        <p className="text-slate-900">{example.user}</p>
                      </div>
                    </div>
                  </div>

                  {/* Claude Response */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary-100 text-secondary-600 rounded-full p-2 flex-shrink-0">
                      <span className="text-sm">🤖</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <pre className="text-slate-900 whitespace-pre-wrap text-sm font-mono">
                          {example.claude}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Quick Start Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-slate-600 mb-8">
              Choose your preferred method and start building your Next.js application in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Terminal className="mr-2 h-5 w-5" />
                Download Script
              </Button>
              <Button variant="outline" size="lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Setup Claude Integration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 