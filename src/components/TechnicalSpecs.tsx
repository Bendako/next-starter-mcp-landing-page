import { Cpu, HardDrive, Globe, Monitor, Package, Settings } from 'lucide-react'
import { Card } from './ui/Card'

const requirements = [
  {
    category: 'System Requirements',
    icon: Cpu,
    items: [
      { name: 'Node.js', version: '18.0.0 or higher', required: true },
      { name: 'Git', version: '2.25.0 or higher', required: true },
      { name: 'Bash/WSL', version: 'Any recent version', required: true },
      { name: 'RAM', version: '4GB minimum (8GB recommended)', required: true },
      { name: 'Storage', version: '1GB free space', required: true }
    ]
  },
  {
    category: 'Development Environment',
    icon: Monitor,
    items: [
      { name: 'VS Code', version: 'Latest', required: false },
      { name: 'Chrome/Firefox', version: 'Latest', required: false },
      { name: 'Terminal', version: 'Bash/Zsh/Fish', required: true },
      { name: 'Claude Desktop', version: 'Latest', required: false }
    ]
  }
]

const techStack = [
  {
    category: 'Core Framework',
    icon: Package,
    description: 'Modern React framework with full-stack capabilities',
    technologies: [
      { name: 'Next.js', version: '14+', description: 'App Router, Server Components, API Routes' },
      { name: 'React', version: '18+', description: 'Latest React features and hooks' },
      { name: 'TypeScript', version: '5+', description: 'Strict mode with full type safety' }
    ]
  },
  {
    category: 'Styling & UI',
    icon: Settings,
    description: 'Modern CSS framework and component system',
    technologies: [
      { name: 'Tailwind CSS', version: '3.4+', description: 'Utility-first CSS framework' },
      { name: 'Headless UI', version: '1.7+', description: 'Unstyled, accessible components' },
      { name: 'Lucide React', version: 'Latest', description: 'Beautiful icon library' }
    ]
  },
  {
    category: 'Authentication',
    icon: Globe,
    description: 'Secure authentication and user management',
    technologies: [
      { name: 'Clerk', version: 'Latest', description: 'Complete authentication solution' },
      { name: 'NextAuth.js', version: '4+', description: 'Alternative auth provider' },
      { name: 'Custom Auth', version: 'N/A', description: 'Build your own solution' }
    ]
  },
  {
    category: 'Database & Backend',
    icon: HardDrive,
    description: 'Real-time database and backend services',
    technologies: [
      { name: 'Convex', version: 'Latest', description: 'Real-time database with subscriptions' },
      { name: 'Supabase', version: 'Latest', description: 'PostgreSQL with real-time features' },
      { name: 'PlanetScale', version: 'Latest', description: 'Serverless MySQL platform' }
    ]
  }
]

const platforms = [
  {
    name: 'macOS',
    support: 'Full Support',
    notes: 'Native bash environment, recommended platform',
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'Linux',
    support: 'Full Support', 
    notes: 'Native bash environment, excellent performance',
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'Windows',
    support: 'WSL Required',
    notes: 'Use Windows Subsystem for Linux (WSL2)',
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    name: 'Cloud IDEs',
    support: 'Supported',
    notes: 'GitHub Codespaces, GitPod, Replit',
    color: 'bg-blue-100 text-blue-800'
  }
]

const templates = [
  {
    name: 'Minimal',
    description: 'Basic Next.js setup with TypeScript and Tailwind CSS',
    features: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'ESLint'],
    size: '~50MB',
    buildTime: '< 30s'
  },
  {
    name: 'Default',
    description: 'Production-ready setup with authentication and database',
    features: ['Everything in Minimal', 'Clerk Auth', 'Convex DB', 'API Routes'],
    size: '~150MB',
    buildTime: '< 60s'
  },
  {
    name: 'Full',
    description: 'Complete application with all integrations and components',
    features: ['Everything in Default', 'UI Components', 'Testing', 'Deployment Config'],
    size: '~250MB',
    buildTime: '< 90s'
  },
  {
    name: 'Blog',
    description: 'Optimized for content websites and blogs',
    features: ['MDX Support', 'SEO Optimization', 'RSS Feed', 'Analytics'],
    size: '~100MB',
    buildTime: '< 45s'
  },
  {
    name: 'SaaS',
    description: 'Complete SaaS starter with payments and subscriptions',
    features: ['Stripe Integration', 'User Dashboard', 'Billing', 'Admin Panel'],
    size: '~300MB',
    buildTime: '< 120s'
  }
]

export default function TechnicalSpecs() {
  return (
    <section id="technical-specs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Detailed requirements, supported technologies, and platform compatibility for the Next.js Starter MCP.
          </p>
        </div>

        {/* System Requirements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            System Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <req.icon className="h-6 w-6 text-primary-600 mr-3" />
                  <h4 className="text-lg font-semibold text-slate-900">{req.category}</h4>
                </div>
                <div className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                      <div>
                        <span className="font-medium text-slate-900">{item.name}</span>
                        {item.required && (
                          <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Required</span>
                        )}
                      </div>
                      <span className="text-slate-600 text-sm">{item.version}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Generated Technology Stack
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((category, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="h-6 w-6 text-secondary-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{category.category}</h4>
                    <p className="text-sm text-slate-600">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="border-l-4 border-secondary-200 pl-4">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-slate-900">{tech.name}</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{tech.version}</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Support */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Platform Support
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-6 text-center">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{platform.name}</h4>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${platform.color}`}>
                  {platform.support}
                </div>
                <p className="text-sm text-slate-600">{platform.notes}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Template Specifications */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Template Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{template.name}</h4>
                <p className="text-sm text-slate-600 mb-4">{template.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-slate-900 mb-2">Included Features:</h5>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {template.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Size: {template.size}</span>
                      <span>Build: {template.buildTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-20">
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Performance Benchmarks
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
                             <div>
                 <div className="text-2xl font-bold text-primary-600">&lt; 2min</div>
                 <div className="text-sm text-slate-600">Full setup time</div>
               </div>
              <div>
                <div className="text-2xl font-bold text-secondary-600">98%</div>
                <div className="text-sm text-slate-600">Time savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-slate-600">Success rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">2700+</div>
                <div className="text-sm text-slate-600">Lines automated</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
} 