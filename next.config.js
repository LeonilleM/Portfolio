/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  experimental:{  
    appDir: true
  },
  webpack: (config) => {
    config.resolve.alias['@design'] = path.join(__dirname, 'public/design');
    config.resolve.alias['@images'] = path.join(__dirname, 'public/images');
    return config;
  },
  /* other config options here */
};

module.exports = nextConfig;
