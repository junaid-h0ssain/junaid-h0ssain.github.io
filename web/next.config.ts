import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (username.github.io serves at root).
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
