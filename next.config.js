/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        //Everything Will Be Ok Redirect.
        source: '/ewbok',
        destination: 'https://fanlink.to/ewbok',
        permanent: true,
      },
      {
        //okayama. Redirect.
        source: '/okayama',
        destination: 'https://fanlink.to/okayama',
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
