import Image from 'next/image';
import WhatsAppButton from '../site/WhatsAppButton';
import images from '../images';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="شاحنة نقل عفش"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          نقل عفش واثاث بأمان تام في كل أنحاء المملكة
        </h1>
        <p className="text-xl md:text-3xl mb-10 max-w-4xl mx-auto">
          أفضل أسعار نقل العفش بالرياض • جدة • الدمام • مكة • المدينة • الخبر
          <br />
          تغليف احترافي • فك وتركيب • تخزين • ضمان شامل
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://wa.me/+966545725112?text=السلام عليكم،%20اريد%20عرض%20سعر%20لنقل%20العفش"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-5 px-12 rounded-lg transition"
          >
            اطلب عرض سعر فوري
          </a>
          <a
            href="tel:+966545725112"
            className="bg-transparent border-4 border-white hover:bg-white hover:text-blue-900 text-xl font-bold py-5 px-12 rounded-lg transition"
          >
            اتصل الآن: 0500 000 000
          </a>
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
}