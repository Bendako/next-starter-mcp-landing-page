import Header from './Header'
import Footer from './Footer'

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>Draft.</strong> This is a generic draft that has not been reviewed by a lawyer. Bracketed items such as
          [CONTACT EMAIL] and [GOVERNING LAW] are placeholders that must be completed before this page is relied on.
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: [DATE]</p>
        <div className="space-y-8 text-slate-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_p+p]:mt-3">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  )
}
