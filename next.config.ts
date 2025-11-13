import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"dev-professors-compendium.s3.ap-northeast-1.amazonaws.com",
        port:'',
        pathname:'/**',
      },
    ],
  },
};

export default nextConfig;