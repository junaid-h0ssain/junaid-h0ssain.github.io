import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export for GitHub Pages. The app previews under the /web/
  // subpath while the old static site stays at root.
  output: "export",
  basePath: "/web",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
