/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  typescript: {
    ignoreBuildErrors: true // have to do this for now until the Promise<JSX> issue is resolved
  }
}

module.exports = nextConfig
