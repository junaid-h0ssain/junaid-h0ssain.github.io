// Subpath the app is served from on GitHub Pages (username.github.io/web).
// Set to "" when the Next.js app becomes the root site.
export const BASE_PATH = "/web"

/** Prefix root-absolute local paths ("/assets/…") with BASE_PATH. Remote URLs pass through. */
export function asset(path: string) {
  if (path.startsWith("/") && !path.startsWith("//")) {
    return `${BASE_PATH}${path}`
  }
  return path
}
