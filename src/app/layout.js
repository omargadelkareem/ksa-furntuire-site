import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "تيما اكسبريس لنقل العفش - النقل والتخزين بأمان وسرعة",
  description: "نقل عفش بالرياض, نقل عفش جدة, نقل عفش الدمام, نقل عفش مكة, نقل عفش المدينة",
  verification: {
    google: "g6gA1BLv6vVDTfOjgFRSrSFGmk3Nhd9hteU3PSvMQ4g",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
        <head>
        {/* هنا الكود اللي نسخته من جوجل */}
      <meta name="google-site-verification" content="g6gA1BLv6vVDTfOjgFRSrSFGmk3Nhd9hteU3PSvMQ4g" />
        {/* باقي الكود بتاعك */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
