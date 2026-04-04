import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import StatsTicker from '@/components/home/StatsTicker';
import ServicesGrid from '@/components/home/ServicesGrid';
import IndustriesScroll from '@/components/home/IndustriesScroll';
import ProcessSteps from '@/components/home/ProcessSteps';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsTicker />
      <ServicesGrid />
      <IndustriesScroll />
      <ProcessSteps />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
