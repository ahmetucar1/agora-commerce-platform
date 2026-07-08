/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack to avoid lightningcss issues with Tailwind 4
  experimental: {
    turbopack: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
