/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      { hostname: 'www.assets.pinterest.com' },
      { hostname: 'www.pinterest.com' },
      { hostname: 'pbs.twimg.com' },
      { hostname: 'cdn.hashnode.com' },
      { hostname: 'i.pcmag.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'media.licdn.com' },
      { hostname: 'miro.medium.com' },
      { hostname: 'dev-to-uploads.s3.amazonaws.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'ik.imagekit.io' },
      { hostname: 'placehold.co' },
      { hostname: 'assets-global.website-files.com' },
      { hostname: 'www.freecodecamp.org' },
      { hostname: 'd1.awsstatic.com' },
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}