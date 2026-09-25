const SOCIALS = [
  { href: "https://github.com/junaid-h0ssain", label: "GitHub" },
  { href: "https://www.linkedin.com/in/junaid-h0ssain", label: "LinkedIn" },
  { href: "https://www.instagram.com/junaid.h0ssain/", label: "Instagram" },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Junaid Hossain
          <br />
          Halishahar, Chattogram, Bangladesh
        </p>
        <nav aria-label="Social">
          <h6 className="mono-label mb-3" style={{ color: "#e7eee5" }}>
            Social
          </h6>
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${social.label} profile`}
              >
                {social.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  )
}
