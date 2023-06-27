
import "./globals.css"
import { DM_Sans } from "next/font/google"
import { VercelAnalytics } from '~/features/VercelAnalytics';
import { config } from "~/config";

const dmSans = DM_Sans({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--dm-sans"
})

export const metadata = config.seo

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={config.site.language} className={dmSans.className}>
      <head />
      <body>
        {children}
        <VercelAnalytics />
      </body>
    </html>
  )
}
