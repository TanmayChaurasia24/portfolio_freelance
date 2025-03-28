/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ideogram.ai", "drive.google.com"], // Add the required domain here
  },
};

export default nextConfig;
