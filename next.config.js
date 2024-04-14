/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  transpilePackages: ["@mui/x-charts"],
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "chart.googleapis.com",
      "images.unsplash.com",
      "media.licdn.com",
    ],
  },
};
