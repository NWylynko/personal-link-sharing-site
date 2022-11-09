
import "./globals.css"
import { DM_Sans } from "@next/font/google"

const dmSans = DM_Sans({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--dm-sans"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={dmSans.className}>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
