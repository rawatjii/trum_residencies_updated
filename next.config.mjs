/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // output: 'export',
  // assetPrefix: "https://www.tribecadevelopers.com/trumpresidenceslandingpage-gurgaon/",
  trailingSlash:true
};

export default nextConfig;
