import type { NextConfig } from 'next'

const isProd = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  basePath: '/portfolio',
  output: 'export',
  reactStrictMode: true
}

export default nextConfig
