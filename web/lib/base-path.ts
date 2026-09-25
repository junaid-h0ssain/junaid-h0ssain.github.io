// Subpath the app is served from, if any ("" for the site root).
export const BASE_PATH = ""

/** Prefix root-absolute local paths ("/assets/…") with BASE_PATH. Remote URLs pass through. */
export function asset(path: string) {
  if (path.startsWith("/") && !path.startsWith("//")) {
    return `${BASE_PATH}${path}`
  }
  return path
}
