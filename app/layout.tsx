import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: "Trieu Vo - Software Engineer",
  description: "I am a dedicated and passionate software engineer with 4 years of experience in web development. I am seeking opportunities to further enhance my skills and knowledge in a professional environment, collaborating with experienced professionals and staying updated with industry trends. I am committed to continuous learning and eager to contribute my expertise to meaningful projects while pursuing personal and professional growth.",
  openGraph: {
    title: "Trieu Vo - Software Engineer",
    description: "I am a dedicated and passionate software engineer with 4 years of experience in web development.",
    url: "https://trieuvo.com/",
    siteName: "Trieu Vo Portfolio",
    images: [
      {
        url: "https://trieuvo.com/avatar.jpg",
        width: 500,
        height: 500,
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
    images: ["https://trieuvo.com/avatar.jpg"]
  },
  keywords: ["Trieu Vo", "Triều Võ", "Software Engineer", "Web Developer", "Portfolio", "JavaScript", "TypeScript", "React", "Node.js", "Next.js", "Frontend Developer", "Backend Developer", "Fullstack Developer", "Programming", "Coding", "Tech Enthusiast"],
  authors: [{ name: "Trieu Vo", url: "https://trieuvo.com" }],
  creator: "Trieu Vo",
  publisher: "Trieu Vo",
  other: {
    // Google Search meta tags
    // "google-site-verification": "your-google-site-verification-code"
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
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T79LSQ98');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Trieu Vo",
  "url": "https://trieuvo.com",
  "image": "https://trieuvo.com/profile.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/vominhtrieu/",
    "https://www.facebook.com/trieu.vm",
    "https://github.com/vominhtrieu",
  ],
  "jobTitle": "Software Engineer"
}`
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T79LSQ98"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden'
            }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
