/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // теперь по умолчанию false
  },
  eslint: {
    ignoreDuringBuilds: false, // теперь по умолчанию false
  },
  images: {
    unoptimized: true, // временно, чтобы избежать проблем с оптимизацией
  },
  experimental: {},
  sassOptions: {
    quietDeps: true, 
    includePaths: [path.join(__dirname, "src")], 
  },
  // Добавить для избежания предупреждений о lockfiles
  outputFileTracingRoot: process.cwd(),
};

module.exports = nextConfig;
