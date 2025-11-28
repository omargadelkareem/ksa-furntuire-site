'use client';

import Image from 'next/image';
import { Truck, Package, Warehouse, Shield, Clock, PhoneCall } from 'lucide-react';
import images from '../images';

const services = [
  {
    icon: Truck,
    image: images.loadingTruck,
    title: "نقل العفش داخل وخارج المدينة",
    desc: "شاحنات مغلقة ومكيفة مجهزة برافعات هيدروليك، نغطي كل مدن المملكة",
    whatsappMsg: "السلام عليكم، أريد عرض سعر لنقل عفش من [منين] إلى [فين]، عدد الغرف: __",
  },
  {
    icon: Package,
    image: images.packing,
    title: "تغليف احترافي وفك وتركيب",
    desc: "فريق متخصص في فك وتركيب النجارة والستائر والأجهزة الكهربائية",
    whatsappMsg: "مرحبًا، أريد خدمة التغليف الاحترافي + فك وتركيب الأثاث، التاريخ المقترح: __",
  },
  {
    icon: Warehouse,
    image: images.warehouse,
    title: "تخزين آمن في مخازن مكيفة",
    desc: "مخازن مؤمنة ومراقبة 24/7 مع تأمين ضد الحريق والسرقة",
    whatsappMsg: "السلام عليكم، أريد حجز مخزن لتخزين العفش لمدة __ شهر، حجم تقريبي: __",
  },
  {
    icon: Shield,
    image: images.truckFleet,
    title: "تأمين شامل على جميع المنقولات",
    desc: "وثيقة تأمين رسمية من شركة تأمين مرخصة تغطي أي ضرر أو كسر",
    whatsappMsg: "أريد تفاصيل التأمين الشامل أثناء النقل، وهل يشمل التحف والأنتيكات؟",
  },
  {
    icon: Clock,
    image: images.truckFleet,
    title: "نقل في نفس اليوم أو بموعد ثابت",
    desc: "خدمة سريعة خلال 24 ساعة أو حسب الموعد اللي تحدده",
    whatsappMsg: "عندي نقل عاجل غدًا، هل متوفر؟ من [المنطقة] إلى [المنطقة]",
  },
  {
    icon: PhoneCall,
    image: images.team,
    title: "دعم فني وخدمة عملاء 24/7",
    desc: "فريق دعم سعودي جاهز في أي وقت للرد على استفساراتك",
    whatsappMsg: "السلام عليكم، عندي استفسار عن أسعار نقل عفش شقة 3 غرف من الرياض لجدة",
  },
];

export default function ServicesSection() {
  const phoneNumber = "+966500000000"; // ← غيّر الرقم برقمك الحقيقي

  const handleWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا المميزة</h2>
          <p className="text-xl text-gray-600">اختر الخدمة اللي تناسبك واطلبها في ثواني</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* الصورة */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <service.icon size={40} className="drop-shadow-lg" />
                </div>
              </div>

              {/* المحتوى */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>

                {/* زر الواتساب */}
                <button
                  onClick={() => handleWhatsApp(service.whatsappMsg)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/50"
                >
                  اطلب الخدمة الآن
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.843h-.004c-1.575-.05-3.111-.83-4.468-2.396-1.358-1.566-2.063-3.63-2.058-5.784.005-1.149.324-2.285.944-3.286.62-1 .635-1.016 1.408-1.016h.003c.407 0 .8.149 1.088.416l.003.003c.285.267.56.55.81.85.25.3.475.624.67.963.195.339.361.698.494 1.068.133.37.228.757.277 1.155.05.398.033.797-.05 1.188-.083.39-.216.763-.404 1.122.187.258.395.51.628.756.233.246.486.477.757.693.271.216.555.413.855.589.3.176.616.329.948.458.332.129.676.228 1.03.28.354.052.713.031 1.062-.07.349-.101.682-.248.987-.443l.003-.002c.304-.195.592-.426.855-.692.263-.266.5-.554.707-.862.207-.308.382-.638.521-1.002.139-.364.242-.747.306-1.14.064-.393.088-.792.072-1.19-.016-.398-.092-.79-.225-1.172-.133-.382-.31-.74-.522-1.07-.212-.33-.457-.63-.737-.893-.28-.263-.594-.493-.937-.679-.343-.186-.712-.324-1.098-.409h-.003c-.773 0-.788.016-1.408.016zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}