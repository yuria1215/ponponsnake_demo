/** @type {import('next').NextConfig} */

const basePath = "/ponponsnake_demo";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? `${basePath}` : "",
  // assetPrefix: isProd ? `${basePath}/` : "",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    BASE_PATH: isProd ? basePath : "",
  },
  webpack(config, { isServer }) {
    // 只有在客戶端才使用 PostCSS
    if (!isServer) {
      // 取得目前已存在的 PostCSS Loader
      const postCSSLoader = config.module.rules.find(
        rule => rule.test && rule.test.toString().includes('css') && rule.use && rule.use.loader && rule.use.loader.includes('postcss-loader')
      );

      // 新增 autoprefixer 套件
      if (postCSSLoader) {
        postCSSLoader.use.push({
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config: './postcss.config.js',
            },
          },
        });
      }
    }

    return config;
  },
};

module.exports = nextConfig;
