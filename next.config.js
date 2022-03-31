const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
  // images: {
  //   loader: 'imgix',
  //   path: process.env.IMG_URL,
  // },
  env: {},
};

module.exports = nextConfig;
