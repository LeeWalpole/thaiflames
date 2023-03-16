/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
    'www.thaiflames.app', 
    'i0.wp.com', 
    'thaiflames.app'
    ],
    unoptimized:false
  }
}

const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig