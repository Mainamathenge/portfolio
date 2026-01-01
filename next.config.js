/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Enable standalone output for deployment
    output: 'standalone',
    // Image optimization configuration
    images: {
        domains: ['placehold.co'],
    },
};

module.exports = nextConfig;
