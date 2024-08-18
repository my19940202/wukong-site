/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.blackmyth.top',
            },
            // {
            //     protocol: 'https',
            //     // hostname: 'www.blackmyth.top',
            //     hostname: '636c-cloud1-5g5eyjtze161c202-1319072486.tcb.qcloud.la',
            //     port: '',
            //     pathname: 'static/wukong',
            // },
        ],
    },
};

export default nextConfig;
