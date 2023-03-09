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
        //archives01 Redirect.
        source: '/arc01',
        destination: 'https://fanlink.to/arc01',
        permanent: true,
      },
      {
        //new dreams bandcamp friday redirect.
        source: '/nds-bc',
        destination: 'https://interframe.bandcamp.com/album/new-dreams',
        permanent: true,
      },
      {
        //new dreams march 10th steaming redirect.
        source: '/nds',
        destination: 'https://beardgel.fanlink.to/nds',
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
