import { Terminal, Bot, ArrowRight, Download, Settings } from 'lucide-react'
import { Card } from './ui/Card'
import Button from './ui/Button'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Two Powerful Ways to Build
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose your preferred workflow: traditional command-line interface or AI-powered natural language interaction
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
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

            <Button variant="outline" className="w-full">
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
    </section>
  )
} 