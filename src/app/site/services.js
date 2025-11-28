import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import WhatsAppButton from './WhatsAppButton';

export const metadata = {
  title: 'خدماتنا - تيما اكسبريس لنقل العفش',
};

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}