import { FileText, Database, Shield, Layout, CreditCard, Star } from 'lucide-react'
import { Card } from './ui/Card'
import Button from './ui/Button'

const templates = [
  {
    name: 'Minimal',
    description: 'Clean foundation with essential tools only',
    features: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'ESLint'],
    icon: FileText,
    gradient: 'from-slate-500 to-slate-700',
    popular: false,
    useCase: 'Perfect for blogs, portfolios, and simple websites'
  },
  {
    name: 'Default',
    description: 'Complete setup with database and authentication',
    features: ['Everything in Minimal', 'Convex Database', 'Clerk Auth', 'API Routes'],
    icon: Database,
    gradient: 'from-primary-500 to-primary-700',
    popular: true,
    useCase: 'Ideal for most web applications and MVPs'
  },
  {
    name: 'Full Stack',
    description: 'Enterprise-ready with all integrations',
    features: ['Everything in Default', 'Testing Setup', 'CI/CD Config', 'Advanced Components'],
    icon: Shield,
    gradient: 'from-secondary-500 to-secondary-700',
    popular: false,
    useCase: 'Production applications with complex requirements'
  },
  {
    name: 'Blog',
    description: 'Optimized for content and SEO',
    features: ['MDX Support', 'SEO Optimization', 'RSS Feed', 'Comment System'],
    icon: Layout,
    gradient: 'from-green-500 to-green-700',
    popular: false,
    useCase: 'Content sites, documentation, and blogs'
  },
  {
    name: 'SaaS',
    description: 'Complete SaaS starter with payments',
    features: ['Stripe Integration', 'Subscription Logic', 'User Dashboard', 'Analytics'],
    icon: CreditCard,
    gradient: 'from-yellow-500 to-orange-600',
    popular: false,
    useCase: 'Software as a Service applications'
  }
]

export default function Templates() {
  return (
    <section id="templates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Template
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Start with the perfect foundation for your project. Each template is carefully crafted with best practices and optimized configurations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <Card key={index} hover className="p-6 relative">
              {template.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`bg-gradient-to-br ${template.gradient} p-4 rounded-lg mx-auto mb-4 w-16 h-16 flex items-center justify-center`}>
                  <template.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{template.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{template.description}</p>
                <div className="text-xs text-slate-500 italic">{template.useCase}</div>
              </div>

              <div className="space-y-2 mb-6">
                {template.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={template.popular ? 'primary' : 'outline'} 
                className="w-full"
              >
                Use {template.name} Template
              </Button>
            </Card>
          ))}
        </div>

        {/* Template Comparison */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Template Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 text-slate-900 font-semibold">Feature</th>
                  <th className="text-center py-3 text-slate-600 font-medium">Minimal</th>
                  <th className="text-center py-3 text-slate-600 font-medium">Default</th>
                  <th className="text-center py-3 text-slate-600 font-medium">Full Stack</th>
                  <th className="text-center py-3 text-slate-600 font-medium">Blog</th>
                  <th className="text-center py-3 text-slate-600 font-medium">SaaS</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-slate-900">Next.js 14 + TypeScript</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-slate-900">Tailwind CSS</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-slate-900">Authentication (Clerk)</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-slate-900">Database (Convex)</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">✅</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-slate-900">Payment Processing</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">✅</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-slate-900">Testing Setup</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">❌</td>
                  <td className="text-center py-3">✅</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-900">SEO Optimization</td>
                  <td className="text-center py-3">Basic</td>
                  <td className="text-center py-3">Standard</td>
                  <td className="text-center py-3">Advanced</td>
                  <td className="text-center py-3">✅</td>
                  <td className="text-center py-3">Advanced</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Start */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Not sure which template to choose? Start with the <strong>Default</strong> template - you can always add or remove features later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Started with Default Template
            </Button>
            <Button variant="outline" size="lg">
              Compare All Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 