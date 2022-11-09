
import "./globals.css"
import { DM_Sans } from "@next/font/google"
import { AnalyticsWrapper } from '../components/Analytics';

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
      <head>
        <title>Nick Wylynko</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
