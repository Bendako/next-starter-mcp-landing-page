import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy - Next.js Starter MCP',
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <h2>1. Who we are</h2>
        <p>
          This website promotes the Next.js Starter MCP kit, a digital product made by btd (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
          Contact: <a href="mailto:bendk1994@gmail.com" className="underline">bendk1994@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>2. What this website collects</h2>
        <p>
          This website is a static information page. At the time of writing it has no user accounts and no sign-up forms, and it does
          not run analytics or advertising scripts of its own.
        </p>
        <p>
          Our hosting provider may process technical data such as IP address, browser type and requested pages in server logs to deliver the
          site and keep it secure.
        </p>
      </section>

      <section>
        <h2>3. Purchases</h2>
        <p>
          Purchases of the kit are processed by Polar, which acts as merchant of record. Polar collects and processes the information needed
          to take payment, calculate taxes, issue receipts and deliver the product, such as your name, email address, billing details and
          payment details. We do not receive or store your full payment card details. Polar&rsquo;s own privacy policy and terms apply to
          that processing.
        </p>
        <p>
          We may receive limited order information from Polar, such as your email address, country and order details, so that we can provide
          support and deliver updates.
        </p>
      </section>

      <section>
        <h2>4. The kit runs on your machine</h2>
        <p>
          The generator and the MCP server run locally on your computer. We do not receive the apps you generate or the contents of your
          projects. Third-party services you choose to use with the kit, such as npm, Clerk, Convex or your MCP client, have their own
          privacy practices.
        </p>
      </section>

      <section>
        <h2>5. How we use information</h2>
        <ul>
          <li>To respond to support requests sent to <a href="mailto:bendk1994@gmail.com" className="underline">bendk1994@gmail.com</a>.</li>
          <li>To deliver the product and communicate about your order.</li>
          <li>To keep the website and the product secure and working.</li>
        </ul>
      </section>

      <section>
        <h2>6. Retention and your rights</h2>
        <p>
          We keep information only as long as needed for the purposes above or as required by law. Depending on where you live you may
          have rights to access, correct or delete your personal data. To exercise them, contact <a href="mailto:bendk1994@gmail.com" className="underline">bendk1994@gmail.com</a>. For data held by Polar,
          you can also contact Polar.
        </p>
      </section>

      <section>
        <h2>7. Changes</h2>
        <p>We may update this policy and will change the date above when we do.</p>
      </section>
    </LegalPage>
  )
}
