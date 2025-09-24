import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: "Trieu Vo - Software Engineer",
  description: "I am a dedicated and passionate software engineer with 4 years of experience in web development. I am seeking opportunities to further enhance my skills and knowledge in a professional environment, collaborating with experienced professionals and staying updated with industry trends. I am committed to continuous learning and eager to contribute my expertise to meaningful projects while pursuing personal and professional growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
