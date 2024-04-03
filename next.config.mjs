/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com", protocol: "https" },
      { hostname: "cdn.dummyjson.com", protocol: "https" },
    ],
  },
};

export default nextConfig;
