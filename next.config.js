const path = require('path');

const nextConfig = {
  webpack: (config) => {

    config.resolve.alias['@design'] = path.join(__dirname, 'public/design');
    config.resolve.alias['@images'] = path.join(__dirname, 'public/images');
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');


    return config;
  },
};

module.exports = nextConfig;
