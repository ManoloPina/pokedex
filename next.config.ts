import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ...outras opções
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
