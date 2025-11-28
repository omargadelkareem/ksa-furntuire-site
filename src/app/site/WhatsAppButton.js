import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "+966545725112"; // غيّر الرقم برقم الشركة
  const message = "السلام عليكم، أريد عرض سعر لنقل العفش";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 flex items-center gap-3"
    >
      <MessageCircle size={32} />
      <span className="hidden md:block font-bold">تواصل معنا واتساب</span>
    </a>
  );
}