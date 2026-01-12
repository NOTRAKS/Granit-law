/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Granit-law',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
