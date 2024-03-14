/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        //Redirect for minato.
        source: '/minato',
        destination: 'https://songwhip.com/interframe/minato',
        permanent: false,
      },
      {
        //Everything Will Be Ok Redirect.
        source: '/ewbok',
        destination: 'https://songwhip.com/interframe/everything-will-be-ok',
        permanent: true,
      },
      {
        //okayama. Redirect.
        source: '/okayama',
        destination: 'https://songwhip.com/interframe/okayama',
        permanent: true,
      },
      {
        //archives01 Redirect.
        source: '/arc01',
        destination: 'https://songwhip.com/interframe/archives01',
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
        destination: 'https://songwhip.com/interframe/new-dreams',
        permanent: true,
      },
      {
        source: '/flowers',
        destination: 'https://distrokid.com/hyperfollow/jeikatsu/flowers-feat-interframe',
        permanent: true,
      },
      {
        source: '/seasons',
        destination: 'https://songwhip.com/interframe/seasons-change-with-u',
        permanent: true,
      },
      {
        //last blossom redirect.
        source: '/blossom',
        destination: 'https://songwhip.com/interframe/last-blossom',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
