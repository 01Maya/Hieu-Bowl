import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Barlow_Condensed, DM_Sans } from "next/font/google";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const siteUrl = "https://hieu-bowl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "HIEU BOWL — Vietnamese Food Website Concept",
    template: "%s | HIEU BOWL",
  },

  description:
    "HIEU BOWL is a modern Vietnamese food website concept featuring fresh bowls, vibrant flavors, and a bold, playful visual experience.",

  keywords: [
    "HIEU BOWL",
    "Vietnamese food website",
    "Vietnamese restaurant website design",
    "Vietnamese food website design",
    "food website design",
    "restaurant website design",
    "Vietnamese bowls",
    "food landing page",
    "restaurant landing page",
    "food UI design",
  ],

  applicationName: "HIEU BOWL",

  authors: [
    {
      name: "Maya",
    },
  ],

  creator: "Maya",
  publisher: "Maya",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "HIEU BOWL — Vietnamese Food Website Concept",
    description:
      "A modern Vietnamese food website concept featuring fresh bowls, vibrant flavors, and a bold visual experience.",
    url: siteUrl,
    siteName: "HIEU BOWL",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: "HIEU BOWL — Vietnamese Food Website Concept",
    description:
      "A modern Vietnamese food website concept featuring fresh bowls, vibrant flavors, and a bold visual experience.",
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#bfe7ed",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "HIEU BOWL",
      description:
        "A modern Vietnamese food website concept featuring fresh bowls, vibrant flavors, and a bold visual experience.",
      creator: {
        "@type": "Person",
        name: "Maya",
      },
      inLanguage: "en",
    },
    {
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#project`,
      name: "HIEU BOWL",
      url: siteUrl,
      description:
        "A modern Vietnamese food website concept designed around fresh bowls, vibrant flavors, and a bold visual experience.",
      creator: {
        "@type": "Person",
        name: "Maya",
      },
      genre: "Web Design",
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
