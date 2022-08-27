/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['api.qrserver.com']
  }
}

module.exports = nextConfig
