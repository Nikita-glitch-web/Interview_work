const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: process.env.NODE_ENV === "production" ? "/Interview_work" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Interview_work/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
