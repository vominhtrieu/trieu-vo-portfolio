import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: "Trieu Vo - Software Engineer",
  description: "I am a dedicated and passionate software engineer with 4 years of experience in web development. I am seeking opportunities to further enhance my skills and knowledge in a professional environment, collaborating with experienced professionals and staying updated with industry trends. I am committed to continuous learning and eager to contribute my expertise to meaningful projects while pursuing personal and professional growth.",
  openGraph: {
    title: "Trieu Vo - Software Engineer",
    description: "I am a dedicated and passionate software engineer with 4 years of experience in web development.",
    url: "https://your-domain.com/",
    siteName: "Trieu Vo Portfolio",
    images: [
      {
        url: "/public/placeholder-user.jpg",
        width: 800,
        height: 600,
        alt: "Trieu Vo Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Trieu Vo - Software Engineer",
    description: "I am a dedicated and passionate software engineer with 4 years of experience in web development.",
    site: "@yourtwitterhandle",
    images: ["/public/placeholder-user.jpg"]
  },
  other: {
    // Google Search meta tags
    "google-site-verification": "your-google-site-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Facebook Open Graph & Google meta tags for SEO */}
        <meta property="og:title" content="Trieu Vo - Software Engineer" />
        <meta property="og:description" content="I am a dedicated and passionate software engineer with 4 years of experience in web development." />
        <meta property="og:image" content="/avatar.jpg" />
        <meta property="og:url" content="https://trieuvo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Trieu Vo Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trieu Vo - Software Engineer" />
        <meta name="twitter:description" content="I am a dedicated and passionate software engineer with 4 years of experience in web development." />
        <meta name="twitter:image" content="/avatar.jpg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
