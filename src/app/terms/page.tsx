import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service - Next.js Starter MCP',
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <section>
        <h2>1. Who these terms are with</h2>
        <p>
          These terms cover your use of this website and your purchase of the Next.js Starter MCP kit (the &ldquo;Product&rdquo;), made by
          btd. Contact: <a href="mailto:bendk1994@gmail.com" className="underline">bendk1994@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>2. The Product</h2>
        <p>
          The Product is a digital product: a Bash generator and a local MCP server delivered as source code. It runs on your own
          machine. You are responsible for configuring and testing any app you generate, for your own accounts with third-party
          services, and for choosing where to deploy.
        </p>
      </section>

      <section>
        <h2>3. Payment and merchant of record</h2>
        <p>
          Purchases are processed by Polar, which acts as merchant of record and is the seller for payment, tax and receipt purposes.
          Polar&rsquo;s terms apply to your purchase in addition to these terms. Price: one-time payment, amount shown at checkout.
        </p>
      </section>

      <section>
        <h2>4. License</h2>
        <p>
          Subject to payment, you receive a commercial license to use the Product under the commercial license terms delivered with it (LICENSE-COMMERCIAL.md in the private repository). All rights not expressly granted are reserved.
        </p>
      </section>

      <section>
        <h2>5. Refunds</h2>
        <p>
          14-day refund guarantee: if the Product isn&rsquo;t right for you, email <a href="mailto:bendk1994@gmail.com" className="underline">bendk1994@gmail.com</a> within 14 days of purchase with your
          order email and you&rsquo;ll get a full refund of the price you paid. One refund per customer. When a refund is issued, your
          license ends and your access to the private repository is removed; please delete your copies. Apps you already generated stay
          yours. After 14 days refunds are not offered, except where the law requires it. Refunds are processed by Polar, our merchant of
          record, to your original payment method.
        </p>
      </section>

      <section>
        <h2>6. No warranty and limitation of liability</h2>
        <p>
          The Product is provided &ldquo;as is&rdquo;, without warranties of any kind to the extent permitted by law. Generated apps depend
          on upstream tools whose versions we do not control. To the extent permitted by law, we are not liable for indirect or
          consequential losses arising from your use of the Product.
        </p>
      </section>

      <section>
        <h2>7. Support</h2>
        <p>Support requests can be sent to <a href="mailto:bendk1994@gmail.com" className="underline">bendk1994@gmail.com</a>.</p>
      </section>

      <section>
        <h2>8. Governing law</h2>
        <p>These terms are governed by the laws of the State of Israel. This does not remove any mandatory consumer protection rights you have where you live.</p>
      </section>

      <section>
        <h2>9. Changes</h2>
        <p>We may update these terms and will change the date above when we do.</p>
      </section>
    </LegalPage>
  )
}
