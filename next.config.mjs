/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.blackmyth.top',
            },
        ],
    },
};

export default nextConfig;
