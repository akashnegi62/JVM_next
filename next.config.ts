/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for serverless
  output: 'standalone',
  
  // Ensure API routes run on Node.js (not Edge)
  experimental: {
    serverComponentsExternalPackages: ['mysql2', 'bcryptjs', 'jose'],
  },
  
  // Optional: Add headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};

export default nextConfig;