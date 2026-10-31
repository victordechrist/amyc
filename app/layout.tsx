import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amyc.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adaobi Muonago Youth Center | Empowering Youth in Tech",
    template: "%s | Adaobi Muonago Youth Center",
  },
  description:
    "AMYC empowers youth through hands-on tech education, industry certification pathways, mentorship, and portfolio-driven project learning.",
  keywords: [
    "Adaobi Muonago Youth Center",
    "AMYC",
    "Youth Tech Education",
    "Tech Certifications",
    "Cloud Computing",
    "Cybersecurity",
    "Software Development",
    "Networking",
    "DevOps",
  ],
  authors: [{ name: "Adaobi Muonago Youth Center" }],
  creator: "Adaobi Muonago Youth Center",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Adaobi Muonago Youth Center | Empowering Youth in Tech",
    description:
      "Empowering youth through market-driven tech skills, industry certifications, and hands-on project learning.",
    siteName: "Adaobi Muonago Youth Center (AMYC)",
    images: [
      {
        url: "/images/logo/amyc-logo-full@2x.png",
        width: 1200,
        height: 965,
        alt: "Adaobi Muonago Youth Center (AMYC) logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adaobi Muonago Youth Center (AMYC)",
    description:
      "Empowering youth through market-driven tech skills and industry certifications.",
    images: ["/images/logo/amyc-logo-full@2x.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020712" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Adaobi Muonago Youth Center",
      alternateName: "AMYC",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      description:
        "Non-profit youth center offering free/subsidized hands-on technical education, certification preparation, and mentorship in tech skills.",
      sameAs: [
        "https://github.com/amyc-tech",
        "https://linkedin.com/company/amyc-tech",
        "https://twitter.com/amyc_tech",
      ],
    },
    {
      "@type": "EducationalOccupationalProgram",
      "@id": `${siteUrl}/#program`,
      name: "AMYC Tech Certification Pathways",
      description:
        "5 specialized technical learning tracks covering Cloud Computing, Cybersecurity, Software Development, Networking, and DevOps.",
      educationalProgramMode: "Blended",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
