import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.assets.pinterest.com" },
      { protocol: "https", hostname: "www.pinterest.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "cdn.hashnode.com" },
      { protocol: "https", hostname: "i.pcmag.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "dev-to-uploads.s3.amazonaws.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "ik.imagekit.io" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "assets-global.website-files.com" },
      { protocol: "https", hostname: "www.freecodecamp.org" },
      { protocol: "https", hostname: "d1.awsstatic.com" },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
