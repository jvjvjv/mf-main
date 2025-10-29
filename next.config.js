/** @type {import('next').NextConfig} */
const nextConfig = {
  // Module Federation is installed and ready to be configured
  // The @module-federation/nextjs-mf package is included in dependencies
  // To activate Module Federation, uncomment the webpack configuration below:
  
  /*
  webpack(config, { isServer }) {
    const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
    
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Dashboard': './components/Dashboard.tsx',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    return config;
  },
  */
};

module.exports = nextConfig;
