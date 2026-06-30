const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/tongdao' : '',
  assetPrefix: isProd ? '/tongdao/' : '',
  trailingSlash: true,
};

export default nextConfig;
