import { Check } from 'lucide-react'
import { Card } from './ui/Card'

const points = [
  'One-time payment, no subscription',
  'Commercial license',
  'Source code for the Bash generator and the local MCP server',
  'Purchases handled by Polar as merchant of record',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pricing</h2>
        <p className="text-xl text-slate-600 mb-10">Pricing coming soon.</p>

        <Card className="p-8 text-left">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Next.js Starter MCP kit</h3>
          <ul className="space-y-3 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-start text-slate-700">
                <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <button
            type="button"
            disabled
            className="w-full rounded-md bg-slate-200 px-6 py-3 text-base font-medium text-slate-500 cursor-not-allowed"
          >
            Get the kit &mdash; coming soon
          </button>
        </Card>
      </div>
    </section>
  )
}
