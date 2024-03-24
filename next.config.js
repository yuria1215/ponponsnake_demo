/** @type {import('next').NextConfig} */

let basePath = "/ponponsnake_demo";
const isProd = process.env.NODE_ENV === "production";

if (process.env.baseEmpty == 'true') {
  basePath = "";
}

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
  }
};

module.exports = nextConfig;
