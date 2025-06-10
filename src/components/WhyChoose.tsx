import { Clock, Shield, Zap, Users, Code, Award, ArrowRight } from 'lucide-react'
import { Card } from './ui/Card'
import Button from './ui/Button'

const benefits = [
  {
    icon: Clock,
    title: 'Save Hours of Setup Time',
    description: 'Skip the tedious configuration and get straight to building your product. Our automation handles all the boilerplate setup, saving you 2-4 hours on every project.',
    stats: '98% time saved',
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: Shield,
    title: 'Production-Ready Security',
    description: 'Built-in security best practices including authentication middleware, CORS configuration, and proper environment variable handling. No security oversights.',
    stats: 'Zero vulnerabilities',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: Code,
    title: 'Industry Best Practices',
    description: 'Follow established patterns with TypeScript strict mode, ESLint configurations, proper folder structure, and component architecture that scales.',
    stats: '2700+ lines tested',
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Development',
    description: 'Pre-configured development environment with hot reload, TypeScript intellisense, and optimized build tools. Start coding immediately.',
    stats: '< 2 minutes setup',
    color: 'text-yellow-600 bg-yellow-100'
  },
  {
    icon: Users,
    title: 'Team Consistency',
    description: 'Ensure every team member starts with the same solid foundation. Standardize your development workflow across all projects and developers.',
    stats: '100% consistency',
    color: 'text-indigo-600 bg-indigo-100'
  },
  {
    icon: Award,
    title: 'Claude AI Integration',
    description: 'First-class integration with Claude Desktop for natural language project creation. The future of development workflows, available today.',
    stats: 'AI-powered',
    color: 'text-pink-600 bg-pink-100'
  }
]



export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Next.js Starter MCP?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of developers who have accelerated their workflow with our battle-tested automation and Claude AI integration.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 mb-3 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                    {benefit.stats}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Traditional Setup vs Next.js Starter MCP
            </h3>
            <p className="text-lg text-slate-600">
              See the difference in development speed and code quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Way */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Traditional Approach</h4>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  2-4 hours of manual configuration
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Inconsistent project structures
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Security configuration mistakes
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Missing best practices
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Repeated setup for each project
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  No AI integration
                </li>
              </ul>
            </Card>

            {/* Our Way */}
            <Card className="p-8 border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Next.js Starter MCP</h4>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  2 minutes automated setup
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Consistent, proven architecture
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Built-in security best practices
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Industry-standard configurations
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  One command for any project
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Claude Desktop integration
                </li>
              </ul>
            </Card>
          </div>
        </div>



        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 border-2 border-primary-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Development Workflow?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have already accelerated their Next.js development with our powerful automation tools and Claude AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started with Claude
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Live Examples
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
} 