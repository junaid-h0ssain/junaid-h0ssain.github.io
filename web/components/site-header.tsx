"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "dark" ? (
        <span className="theme-icon-moon" aria-hidden="true">
          &#9790;
        </span>
      ) : (
        <span className="theme-icon-sun" aria-hidden="true">
          &#9788;
        </span>
      )}
    </button>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-navbar">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-sm btn-outline lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            &#9776;
          </button>
          <Link
            href="/"
            className="font-display text-xl font-bold"
            aria-label="Junaid Hossain home"
          >
            Junaid Hossain
          </Link>
        </div>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link"
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <details className="relative">
                <summary className="nav-link cursor-pointer list-none">
                  Contact
                </summary>
                <ul className="card absolute right-0 top-full z-50 mt-2 w-56 p-2">
                  <li>
                    <a
                      className="nav-link block"
                      href="mailto:junaid0182@gmail.com"
                    >
                      Mail: junaid0182@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link block"
                      href="https://github.com/junaid-h0ssain"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link block"
                      href="https://codeberg.org/juna1d"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Codeberg
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link block"
                      href="https://www.linkedin.com/in/junaid-h0ssain"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link block"
                      href="https://www.instagram.com/junaid.h0ssain/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t px-6 py-3 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link block"
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a className="nav-link block" href="mailto:junaid0182@gmail.com">
                Mail: junaid0182@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
