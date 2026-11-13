/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    reactCompiler: true,

    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'i.ibb.co',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'ibb.co.com',
            pathname: '/**',
        },
    ],
},

    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;