/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    basePath: "/portfolio",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
