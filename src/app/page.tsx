import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SeeInAction from '@/components/SeeInAction'
import WhyChoose from '@/components/WhyChoose'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SeeInAction />
      <WhyChoose />
      <Footer />
    </main>
  )
} 