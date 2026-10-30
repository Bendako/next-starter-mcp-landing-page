import { Card } from './ui/Card'
import { links } from '@/lib/site'

function Code({ children }: { children: string }) {
  return (
    <pre className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">{children}</pre>
  )
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
        {n}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
        <div className="space-y-3 text-slate-600 text-sm">{children}</div>
      </div>
    </div>
  )
}

export default function Installation() {
  return (
    <section id="installation" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Installation</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Start in the kit root directory, the folder that contains <code className="font-mono text-base">create-next-starter.sh</code> and{' '}
            <code className="font-mono text-base">mcp-server/</code>.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Requirements</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
            <li>Bash on macOS or Linux, or a Bash environment such as WSL on Windows.</li>
            <li>
              Node.js 20.9 or newer, plus npm and npx. The script rejects older versions because{' '}
              <code className="font-mono">create-next-app</code> 16 requires 20.9+.
            </li>
            <li>
              For <code className="font-mono">mcp-server/</code>, Node.js 22+ is recommended. On Node 20 it prints an{' '}
              <code className="font-mono">EBADENGINE</code> warning.
            </li>
            <li>Internet access to download npm packages, and a writable project directory.</li>
            <li>For MCP use, a client that can launch local stdio servers.</li>
            <li>For Clerk or Convex, your own accounts and configuration.</li>
          </ul>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Use the script</h3>
            <div className="space-y-6">
              <Step n={1} title="Check Node.js and npm">
                <Code>{`node --version
npm --version`}</Code>
              </Step>
              <Step n={2} title="Preview the app">
                <p>This writes nothing but a <code className="font-mono">setup.log</code> in the current directory.</p>
                <Code>{`bash ./create-next-starter.sh --dry-run --skip-clerk --skip-convex --template minimal -- my-app`}</Code>
              </Step>
              <Step n={3} title="Generate the app">
                <p>Needs internet and creates <code className="font-mono">./my-app</code>.</p>
                <Code>{`bash ./create-next-starter.sh --skip-clerk --skip-convex --template minimal -- my-app`}</Code>
              </Step>
              <Step n={4} title="Lint, build and start it">
                <Code>{`cd my-app && npm run lint && npm run build
npm run dev`}</Code>
              </Step>
            </div>
          </Card>

          <Card className="p-8 border-primary-200 bg-gradient-to-br from-primary-50 to-blue-50">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Use the MCP server</h3>
            <div className="space-y-6">
              <Step n={1} title="Build the server">
                <p>From the kit root, in a second terminal:</p>
                <Code>{`cd mcp-server && npm install && npm run build`}</Code>
              </Step>
              <Step n={2} title="Point your client at the built server">
                <p>
                  Configure the client to start <code className="font-mono">node</code> with the absolute path to{' '}
                  <code className="font-mono">mcp-server/dist/index.js</code>. For Claude Desktop, add this under{' '}
                  <code className="font-mono">mcpServers</code> in <code className="font-mono">claude_desktop_config.json</code>:
                </p>
                <Code>{`{
  "mcpServers": {
    "nextjs-starter": {
      "command": "node",
      "args": ["/absolute/path/to/next-starter/mcp-server/dist/index.js"]
    }
  }
}`}</Code>
              </Step>
              <Step n={3} title="Restart the client and check the tools">
                <p>
                  The server should list <code className="font-mono">create_nextjs_app</code>, <code className="font-mono">dry_run</code>,{' '}
                  <code className="font-mono">test_script</code> and <code className="font-mono">script_help</code>. Codex and Cursor
                  examples are in the{' '}
                  <a href={links.mcpSetup} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">
                    client configuration guide
                  </a>
                  .
                </p>
              </Step>
            </div>
          </Card>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Stuck? See the{' '}
          <a href={links.troubleshooting} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">
            troubleshooting notes
          </a>
          .
        </p>
      </div>
    </section>
  )
}
