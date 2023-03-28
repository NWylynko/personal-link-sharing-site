
import "./globals.css"
import { DM_Sans } from "next/font/google"
import { VercelAnalytics } from '~/features/VercelAnalytics';
import { config } from "~/config";

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
    <html lang={config.site.language} className={dmSans.className}>
      <head>
        <title>Nick Wylynko</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}
        <VercelAnalytics />
      </body>
    </html>
  )
}
