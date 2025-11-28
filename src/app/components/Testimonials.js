
    const reviews = [
  { name: "أحمد العتيبي", city: "الرياض", text: "والله شغل ممتاز جداً، جوني في نفس اليوم وخلّصوا الشقة كلها في 4 ساعات بس!" },
  { name: "فاطمة الدوسري", city: "جدة", text: "أول مرة أشوف عمال بالنظافة والاحترام ده، ربي يجزاكم خير" },
  { name: "محمد الشمري", city: "الدمام", text: "السعر أقل من اللي توقعته بكثير، والشغل نظيف 100%" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">آراء عملائنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16" />
                <div className="mr-4">
                  <h4 className="font-bold text-xl">{r.name}</h4>
                  <p className="text-gray-600">{r.city}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">“{r.text}”</p>
              <div className="flex mt-4">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}