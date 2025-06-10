'use client'

import { useState } from 'react'
import { Copy, Check, Download, Settings, Terminal, Bot } from 'lucide-react'
import Button from './ui/Button'
import { Card } from './ui/Card'

export default function Installation() {
  const [activeTab, setActiveTab] = useState<'claude' | 'script'>('claude')
  const [copiedSteps, setCopiedSteps] = useState<Record<string, boolean>>({})

  const copyToClipboard = async (text: string, stepId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedSteps(prev => ({ ...prev, [stepId]: true }))
      setTimeout(() => {
        setCopiedSteps(prev => ({ ...prev, [stepId]: false }))
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const claudeSetupSteps = [
    {
      id: 'install-mcp',
      title: 'Install MCP Server',
      description: 'Clone and set up the Next.js Starter MCP server',
      code: `git clone https://github.com/your-repo/nextjs-starter-mcp.git
cd nextjs-starter-mcp
npm install
npm run build`,
    },
    {
      id: 'configure-claude',
      title: 'Configure Claude Desktop',
      description: 'Add the MCP server to your Claude Desktop configuration',
      code: `{
  "mcpServers": {
    "nextjs-starter": {
      "command": "node",
      "args": ["/path/to/nextjs-starter-mcp/dist/index.js"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}`,
      file: '~/.claude_desktop_config.json'
    },
    {
      id: 'restart-claude',
      title: 'Restart Claude Desktop',
      description: 'Restart Claude Desktop to load the new MCP server',
      manual: true
    }
  ]

  const scriptSetupSteps = [
    {
      id: 'download-script',
      title: 'Download Script',
      description: 'Download the create-next-starter.sh script',
      code: `curl -O https://raw.githubusercontent.com/your-repo/nextjs-starter-mcp/main/create-next-starter.sh`,
    },
    {
      id: 'make-executable',
      title: 'Make Executable',
      description: 'Give the script execute permissions',
      code: `chmod +x create-next-starter.sh`,
    },
    {
      id: 'run-script',
      title: 'Run Script',
      description: 'Create your first Next.js application',
      code: `./create-next-starter.sh my-awesome-app`,
    }
  ]

  return (
    <section id="installation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Quick Installation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose your preferred way to use the Next.js Starter MCP. Get started in minutes with either Claude Desktop integration or direct script usage.
          </p>
        </div>

        {/* Installation Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row bg-slate-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setActiveTab('claude')}
              className={`flex-1 flex items-center justify-center py-3 px-6 rounded-md transition-all duration-200 ${
                activeTab === 'claude'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bot className="h-5 w-5 mr-2" />
              Claude Desktop Integration
            </button>
            <button
              onClick={() => setActiveTab('script')}
              className={`flex-1 flex items-center justify-center py-3 px-6 rounded-md transition-all duration-200 ${
                activeTab === 'script'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="h-5 w-5 mr-2" />
              Direct Script Usage
            </button>
          </div>

          {/* Claude Desktop Setup */}
          {activeTab === 'claude' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Bot className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Claude Desktop Integration
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Use natural language to create Next.js applications directly from Claude Desktop. 
                  This method provides the most intuitive experience.
                </p>
                <div className="bg-primary-100 rounded-lg p-4">
                  <p className="text-primary-800 text-sm">
                    <strong>Example:</strong> &quot;Create a new Next.js app called &apos;my-blog&apos; with authentication but without database&quot;
                  </p>
                </div>
              </div>

              {claudeSetupSteps.map((step, index) => (
                <Card key={step.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-600">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      
                      {step.code && (
                        <div className="relative">
                          {step.file && (
                            <div className="text-sm text-slate-500 mb-2">
                              File: <code className="bg-slate-100 px-2 py-1 rounded">{step.file}</code>
                            </div>
                          )}
                          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300">
                            <pre className="whitespace-pre-wrap">{step.code}</pre>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(step.code, step.id)}
                            className="absolute top-2 right-2 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                          >
                            {copiedSteps[step.id] ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      )}

                      {step.manual && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <div className="flex items-center">
                            <Settings className="h-5 w-5 text-amber-600 mr-2" />
                            <span className="text-amber-800 font-medium">Manual Step Required</span>
                          </div>
                          <p className="text-amber-700 mt-2">
                            Close and restart Claude Desktop application to load the new MCP server configuration.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Script Setup */}
          {activeTab === 'script' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Terminal className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Direct Script Usage
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Download and run the bash script directly. Perfect for developers who prefer command-line tools 
                  and want full control over the setup process.
                </p>
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Requirements:</strong> Node.js 18+, Git, Bash (or WSL on Windows)
                  </p>
                </div>
              </div>

              {scriptSetupSteps.map((step, index) => (
                <Card key={step.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-green-600">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      
                      <div className="relative">
                        <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300">
                          <pre className="whitespace-pre-wrap">{step.code}</pre>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(step.code, step.id)}
                          className="absolute top-2 right-2 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                        >
                          {copiedSteps[step.id] ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download Script
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
            <p className="text-slate-500 mt-4 text-sm">
              Need help? Check out our{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                documentation
              </a>{' '}
              or{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                create an issue
              </a>{' '}
              on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 