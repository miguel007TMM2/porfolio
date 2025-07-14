import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Solo aplicar basePath en producción para GitHub Pages
  ...(isProd && {
    assetPrefix: '/porfolio',
    basePath: '/porfolio',
  }),
};

export default nextConfig;
