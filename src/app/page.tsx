import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SeeInAction from '@/components/SeeInAction'
import WhatsIncluded from '@/components/WhatsIncluded'
import Installation from '@/components/Installation'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SeeInAction />
      <WhatsIncluded />
      <Installation />
      <Pricing />
      <Footer />
    </main>
  )
}
