import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My App',
  description: 'Next.js App Router 기본 레이아웃',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  )
}
