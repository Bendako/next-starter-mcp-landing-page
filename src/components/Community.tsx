import { Github, Star, GitFork, Users, MessageCircle, BookOpen, ArrowRight } from 'lucide-react'
import { Card } from './ui/Card'
import Button from './ui/Button'

const communityStats = [
  { icon: Star, label: 'GitHub Stars', value: '2.4k', color: 'text-yellow-600' },
  { icon: GitFork, label: 'Forks', value: '324', color: 'text-blue-600' },
  { icon: Users, label: 'Contributors', value: '42', color: 'text-green-600' },
  { icon: MessageCircle, label: 'Discussions', value: '156', color: 'text-purple-600' }
]

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides, examples, and API reference',
    link: 'https://docs.nextjs-starter-mcp.dev',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Github,
    title: 'Source Code',
    description: 'View the source code, report issues, and contribute',
    link: 'https://github.com/your-repo/nextjs-starter-mcp',
    color: 'bg-slate-100 text-slate-600'
  },
  {
    icon: MessageCircle,
    title: 'Discussions',
    description: 'Ask questions, share ideas, and connect with the community',
    link: 'https://github.com/your-repo/nextjs-starter-mcp/discussions',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Users,
    title: 'Discord Community',
    description: 'Join our Discord for real-time help and collaboration',
    link: 'https://discord.gg/nextjs-starter-mcp',
    color: 'bg-purple-100 text-purple-600'
  }
]

const contributors = [
  { name: 'Alex Smith', avatar: 'AS', role: 'Creator & Maintainer', contributions: 'Architecture, Core Features' },
  { name: 'Maria Garcia', avatar: 'MG', role: 'Core Contributor', contributions: 'Authentication, Security' },
  { name: 'David Chen', avatar: 'DC', role: 'Contributor', contributions: 'Templates, Documentation' },
  { name: 'Sarah Johnson', avatar: 'SJ', role: 'Contributor', contributions: 'Testing, Bug Fixes' },
  { name: 'Mike Wilson', avatar: 'MW', role: 'Contributor', contributions: 'Claude Integration' },
  { name: 'You?', avatar: '?', role: 'Future Contributor', contributions: 'Your awesome contributions!' }
]

const contributionAreas = [
  {
    title: 'Code Contributions',
    description: 'Help improve the core script, add new templates, or fix bugs',
    skills: ['Bash', 'Next.js', 'TypeScript', 'Testing']
  },
  {
    title: 'Documentation',
    description: 'Improve guides, write tutorials, or create video content',
    skills: ['Technical Writing', 'Video Creation', 'Translation']
  },
  {
    title: 'Community Support',
    description: 'Help other developers in discussions, Discord, or GitHub issues',
    skills: ['Communication', 'Problem Solving', 'Mentoring']
  },
  {
    title: 'Design & UX',
    description: 'Improve the landing page, documentation site, or CLI experience',
    skills: ['UI/UX Design', 'Web Design', 'User Research']
  }
]

export default function Community() {
  return (
    <section id="community" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Be part of a growing community of developers building the future of Next.js development automation.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Community Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`p-3 rounded-lg ${resource.color} inline-block mb-4`}>
                  <resource.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{resource.title}</h4>
                <p className="text-slate-600 mb-4 text-sm">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Resource
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Contributors */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Meet Our Contributors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <Card key={index} className={`p-6 ${contributor.name === 'You?' ? 'border-2 border-dashed border-primary-300 bg-primary-50' : ''}`}>
                <div className="flex items-center mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium mr-4 ${
                    contributor.name === 'You?' 
                      ? 'bg-primary-400' 
                      : 'bg-gradient-to-br from-primary-400 to-secondary-400'
                  }`}>
                    {contributor.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{contributor.name}</h4>
                    <p className="text-sm text-slate-600">{contributor.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{contributor.contributions}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Contribute */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            How You Can Contribute
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {contributionAreas.map((area, index) => (
              <Card key={index} className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">{area.title}</h4>
                <p className="text-slate-600 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contribution CTA */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 border-2 border-primary-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re fixing a bug, adding a feature, or helping others in the community, 
              every contribution makes Next.js Starter MCP better for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Github className="mr-2 h-5 w-5" />
                Start Contributing
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Discord
              </Button>
            </div>
            
            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-slate-600 mb-4">Quick Links:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  Contributing Guide
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  Code of Conduct
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  Development Setup
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  Issue Templates
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
} 