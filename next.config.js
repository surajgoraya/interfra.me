/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ewbok',
        destination: 'https://fanlink.to/ewbok',
        permanent: true,
      },
      {
        source: '/flowers',
        destination: 'https://distrokid.com/hyperfollow/jeikatsu/flowers-feat-interframe',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
