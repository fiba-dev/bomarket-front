/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com", "dl.airtable.com"],
  },
});

module.exports = nextConfig;
