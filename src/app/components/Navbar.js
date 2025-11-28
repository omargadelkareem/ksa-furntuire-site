'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          تيما اكسبريس لنقل العفش
        </Link>

        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <button
            onClick={() => scrollToSection('home')}
            className={pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600 transition'}
          >
            الرئيسية
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-blue-600 transition"
          >
            من نحن
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-blue-600 transition"
          >
            الخدمات
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-blue-600 transition"
          >
            تواصل معنا
          </button>
        </div>

        <a href="tel:+966545725112" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
          0545725112
        </a>
      </div>
    </nav>
  );
}