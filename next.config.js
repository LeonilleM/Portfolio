const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@design'] = path.join(__dirname, 'public/design');
    config.resolve.alias['@images'] = path.join(__dirname, 'public/images');

    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files', // Adjust the public path as needed
            outputPath: 'static/files', // Adjust the output path as needed
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
  /* other config options here */
};

module.exports = nextConfig;
