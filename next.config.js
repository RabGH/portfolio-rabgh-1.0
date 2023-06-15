/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["cdn.sanity.io"],
    },
    staticPageGenerationTimeout: 120,
    trailingSlash: true,
    swcMinify: false
  };
  
  module.exports = nextConfig;