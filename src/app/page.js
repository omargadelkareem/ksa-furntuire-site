
    import { Contact } from 'lucide-react';
import Hero from '../app/components/Hero';
import ServicesSection from '../app/components/ServicesSection';
import WhyUs from '../app/components/WhyUs';
import Testimonials from '../app/components/WhyUs';

import WhatsAppButton from './site/WhatsAppButton';
import ContactForm from './site/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'شركة الأفضل لنقل العفش والتخزين في السعودية | نقل عفش بالرياض وجدة والدمام',
  description: 'نقل عفش آمن وسريع بأفضل الأسعار في المملكة - تغليف احترافي - تخزين - فك وتركيب - ضمان شامل',
};

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}