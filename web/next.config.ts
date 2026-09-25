import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (username.github.io serves at root,
  // so no basePath is needed).
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
