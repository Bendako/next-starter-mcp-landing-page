import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Demo from '@/components/Demo'
import HowItWorks from '@/components/HowItWorks'
import CodeExamples from '@/components/CodeExamples'
import WhyChoose from '@/components/WhyChoose'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Demo />
      <HowItWorks />
      <CodeExamples />
      <WhyChoose />
      <Footer />
    </main>
  )
} 