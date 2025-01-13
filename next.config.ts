import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false, // Disable source maps in production
  images: {
    domains: ["res.cloudinary.com", "example.com", "another-domain.com"], // Allowed image domains
  },
  // Other Next.js configuration options can go here
};

export default nextConfig;