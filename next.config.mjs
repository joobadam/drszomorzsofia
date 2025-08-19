/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static file serving for locales
  async rewrites() {
    return [
      {
        source: '/locales/:path*',
        destination: '/api/locales/:path*',
      },
    ];
  },
  
  // Environment variables for Sanity
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: '0bk6d52j',
    NEXT_PUBLIC_SANITY_DATASET: 'production',
  },
};

export default nextConfig;
