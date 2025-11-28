/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ← ده بيخلّي أي رابط خارجي يشتغل بدون مشاكل
      },
    ],
    // لو عايز تحط صور من public عادي برضه شغال
    domains: [], 
  },
  // للـ ESLint عشان ميزعجكش وأنت بتشتغل
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;