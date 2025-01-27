import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "images.unsplash.com", // Unsplash
      "assets.aceternity.com", // Aceternity
      "silveroakuni.ac.in", // silver Oak University
    ],
  },
};

export default nextConfig;
