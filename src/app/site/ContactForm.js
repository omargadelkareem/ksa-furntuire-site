
    'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    service: 'نقل عفش',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
من: ${formData.from}
إلى: ${formData.to}
الخدمة: ${formData.service}`;

    window.open(`https://wa.me/+966545725112?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">اطلب الخدمة الآن</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="الاسم"
            required
            className="w-full p-4 mb-4 border rounded-lg"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="tel"
            placeholder="رقم الجوال"
            required
            className="w-full p-4 mb-4 border rounded-lg"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="من (المدينة/الحي)"
              className="p-4 border rounded-lg"
              onChange={(e) => setFormData({...formData, from: e.target.value})}
            />
            <input
              type="text"
              placeholder="إلى (المدينة/الحي)"
              className="p-4 border rounded-lg"
              onChange={(e) => setFormData({...formData, to: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-lg text-xl transition"
          >
            ارسال الطلب عبر الواتساب
          </button>
        </form>
      </div>
    </section>
  );
}