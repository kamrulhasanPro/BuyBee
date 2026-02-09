import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    removeConsole: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        // port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        // pathname: "/**",
      },
      // new URL("https://i.ibb.co.com/**"),
      // new URL("https://bk.shajgoj.com/storage/2025/12/sku-11589-y5ou.jpg"),
    ],
  },
};

export default nextConfig;
