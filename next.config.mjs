/** @type {import('next').NextConfig} */
const nextConfig = {
  // cPanel / Apache üzerinde Node.js sunucusu olmadan çalışacak tam statik çıktı.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
