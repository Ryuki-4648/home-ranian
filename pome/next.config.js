/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/home-ranian";

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  basePath: isProd ? SUB_DIRECTORY : "",
  reactStrictMode: true,
}

module.exports = nextConfig
