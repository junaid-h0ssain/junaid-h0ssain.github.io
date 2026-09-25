import type { Metadata } from "next"
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Junaid Hossain - Portfolio",
  description:
    "Welcome to Junaid Hossain's portfolio, i am a dude with an chill attitude.",
  authors: [{ name: "Junaid Hossain" }],
  icons: {
    icon: "/icon.png",
  },  openGraph: {
    type: "website",
    siteName: "Junaid Hossain",
    title: "Junaid Hossain - Portfolio",
    description:
      "Welcome to Junaid Hossain's portfolio, i like cake and burgers.",
    url: "https://junaid-h0ssain.github.io/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased",
          inter.variable,
          display.variable,
          mono.variable
        )}
      >
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
