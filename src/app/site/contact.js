
    import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from './ContactForm';
import WhatsAppButton from './WhatsAppButton';

export const metadata = {
  title: 'تواصل معنا - تيما اكسبريس',
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-12">تواصل معنا</h1>
          <ContactForm />
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}