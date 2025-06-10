import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Demo from '@/components/Demo'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Templates from '@/components/Templates'
import CodeExamples from '@/components/CodeExamples'
import Installation from '@/components/Installation'
import WhyChoose from '@/components/WhyChoose'
import TechnicalSpecs from '@/components/TechnicalSpecs'
import Community from '@/components/Community'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Demo />
      <Features />
      <HowItWorks />
      <Templates />
      <CodeExamples />
      <Installation />
      <WhyChoose />
      <TechnicalSpecs />
      <Community />
      <Footer />
    </main>
  )
} 