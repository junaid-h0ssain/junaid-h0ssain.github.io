const BASE = '/astro-learn';

export function getPathWithBase(path: string): string {
  if (path === '/') {
    return BASE + '/';
  }
  return BASE + path;
}

