import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";

import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://hieu-bowl.vercel.app";

const siteName = "HIEU BOWL";

const siteTitle = "HIEU BOWL — Modern Vietnamese Food";

const siteDescription =
  "HIEU BOWL is a modern Vietnamese food website featuring fresh bowls, vibrant flavors, fresh ingredients, and a bold contemporary Vietnamese food experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | HIEU BOWL",
  },

  description: siteDescription,

  applicationName: siteName,

  authors: [
    {
      name: "Maya",
    },
  ],

  creator: "Maya",

  publisher: "Maya",

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  category: "food",

  keywords: [
    "HIEU BOWL",
    "Vietnamese food",
    "Vietnamese food website",
    "Vietnamese cuisine",
    "Vietnamese bowls",
    "Vietnamese restaurant",
    "fresh Vietnamese food",
    "Vietnamese food website design",
    "Vietnamese restaurant website design",
    "food website design",
    "restaurant website design",
    "food website UI",
    "restaurant UI design",
    "food landing page",
    "restaurant landing page",
    "modern food website",
    "modern restaurant website",
    "Vietnamese food design",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,

    follow: true,

    nocache: false,

    googleBot: {
      index: true,

      follow: true,

      noimageindex: false,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: siteUrl,

    siteName: siteName,

    title: siteTitle,

    description: siteDescription,
  },

  twitter: {
    card: "summary",

    title: siteTitle,

    description: siteDescription,
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

  other: {
    "theme-color": "#bfe7ed",

    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 5,

  userScalable: true,

  colorScheme: "light",

  themeColor: "#bfe7ed",
};

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",

      "@id": `${siteUrl}/#website`,

      url: siteUrl,

      name: siteName,

      description: siteDescription,

      inLanguage: "en-US",

      creator: {
        "@type": "Person",

        name: "Maya",
      },
    },

    {
      "@type": "WebPage",

      "@id": `${siteUrl}/#webpage`,

      url: siteUrl,

      name: siteTitle,

      description: siteDescription,

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@type": "Thing",

        name: "Vietnamese food",
      },

      inLanguage: "en-US",

      creator: {
        "@type": "Person",

        name: "Maya",
      },
    },

    {
      "@type": "CreativeWork",

      "@id": `${siteUrl}/#project`,

      url: siteUrl,

      name: "HIEU BOWL",

      headline: "Modern Vietnamese Food Website",

      description:
        "A modern Vietnamese food website featuring fresh bowls, vibrant flavors, fresh ingredients, and a bold contemporary Vietnamese food experience.",

      genre: "Food Website Design",

      keywords:
        "Vietnamese food, Vietnamese food website, Vietnamese cuisine, Vietnamese bowls, food website design",

      creator: {
        "@type": "Person",

        name: "Maya",
      },

      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-background"
      suppressHydrationWarning
    >
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
