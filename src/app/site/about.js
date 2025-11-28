import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from './WhatsAppButton';

export const metadata = {
  title: 'من نحن - تيما اكسبريس لنقل العفش',
  description: 'شركة تيما اكسبريس أفضل شركة نقل عفش في السعودية منذ 2015',
};

export default function About() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-8">من نحن</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            تيما اكسبريس هي شركة رائدة في مجال نقل العفش والتخزين في المملكة العربية السعودية منذ أكثر من 10 سنوات.<br />
            نتميز بفريق سعودي محترف، شاحنات حديثة، وخدمة عملاء 24 ساعة.<br />
            هدفنا: نقل عفشك بأمان تام وبأقل تكلفة ممكنة.
          </p>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}