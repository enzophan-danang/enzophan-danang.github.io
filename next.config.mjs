/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static HTML export
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media2.dev.to',
                port: '',
                pathname: '/dynamic/image/**',
            },
            {
                protocol: 'https',
                hostname: 'dev-to-uploads.s3.amazonaws.com',
                port: '',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
