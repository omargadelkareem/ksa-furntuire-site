export default function WhyUs() {
  const reasons = [
    "أكثر من 15 سنة خبرة في نقل العفش",
    "أسعار ثابتة بدون رسوم مخفية",
    "فريق سعودي مدرب ومحترف",
    "شاحنات مجهزة بأحدث المعدات",
    "نغطي كل مدن المملكة",
    "تقييم 4.9 من 1250 عميل حقيقي",
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">ليه تختارنا؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <span className="text-4xl font-bold text-yellow-400">{i + 1}</span>
              <p className="text-lg">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}