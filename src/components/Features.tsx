import { Settings, Database, Shield, FileText, TestTube, BookOpen, Bot, Zap, Target, BarChart3 } from 'lucide-react'
import { Card } from './ui/Card'

const coreFeatures = [
  {
    icon: Settings,
    title: 'Professional Setup',
    description: 'TypeScript, Tailwind, ESLint with optimal configurations'
  },
  {
    icon: Database,
    title: 'Real-time Database',
    description: 'Convex integration with schemas and subscriptions'
  },
  {
    icon: Shield,
    title: 'Authentication',
    description: 'Clerk integration with middleware and protected routes'
  },
  {
    icon: FileText,
    title: 'Multiple Templates',
    description: 'Minimal, default, full feature sets'
  },
  {
    icon: TestTube,
    title: 'Testing & Validation',
    description: 'Built-in testing modes and dry runs'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Docs',
    description: 'Detailed help and examples'
  }
]

const mcpFeatures = [
  {
    icon: Bot,
    title: 'Claude Desktop Integration',
    description: 'Create apps through natural language'
  },
  {
    icon: Zap,
    title: 'Real-time Execution',
    description: 'Watch projects being created live'
  },
  {
    icon: Target,
    title: 'Smart Defaults',
    description: 'Intelligent feature selection'
  },
  {
    icon: BarChart3,
    title: 'Project Previews',
    description: 'See what will be created before running'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Build Modern Apps
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful features that save you hours of setup and configuration
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Core Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} hover className="text-center">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-lg mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* MCP Integration Features */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">MCP Integration Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mcpFeatures.map((feature, index) => (
              <Card key={index} hover className="text-center">
                <div className="bg-gradient-to-br from-secondary-500 to-primary-500 p-3 rounded-lg mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 