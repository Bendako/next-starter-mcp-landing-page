export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how the Next.js Starter MCP creates a complete application in seconds
          </p>
        </div>
        
        <div className="bg-slate-900 rounded-lg p-8 text-green-400 font-mono">
          <div className="mb-4">$ ./create-next-starter.sh my-awesome-app</div>
          <div className="text-slate-400">Creating Next.js application...</div>
          <div className="text-slate-400">✓ Project structure created</div>
          <div className="text-slate-400">✓ Dependencies installed</div>
          <div className="text-slate-400">✓ TypeScript configured</div>
          <div className="text-slate-400">✓ Tailwind CSS setup</div>
          <div className="text-slate-400">✓ Authentication ready</div>
          <div className="text-green-400 mt-4">🚀 Your app is ready!</div>
        </div>
      </div>
    </section>
  )
} 