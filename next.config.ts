import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/", // リダイレクト元のパス
        destination: "/Dashboard", // リダイレクト先のパス
        permanent: true, // 永続的リダイレクトかどうか
      },
    ];
  },
};

export default nextConfig;
