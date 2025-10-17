import Script from 'next/script';
import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";

const teachersMono = Teachers({
  variable: "--font-teachers-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ApplyWITH - Official University Application Portal | Bentech',
  description: "Start your future today! Access the official ApplyWITH portal by Bentech to seamlessly submit and track your university application",
  creator: 'Bentech',
  publisher: 'Bentech',
  metadataBase: new URL('http://bentechrw.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ApplyWITH - Official University Application Portal | Bentech',
    description: 'Start your future today! Access the official ApplyWITH portal by Bentech to seamlessly submit and track your university application',
    url: 'https://applywith.bentechrw.com',
    siteName: 'ApplyWITH by Bentech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'ApplyWITH - Official University Application Portal | Bentech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApplyWITH - Official University Application Portal | Bentech',
    description: 'Start your future today! Access the official ApplyWITH portal by Bentech to seamlessly submit and track your university application',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'wYDWPH4bK-CGnMR-NnRn_DTdpHMyyB7eRx4YqfjDDQ4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KZNSK69328"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KZNSK69328', {
                cookie_domain: 'bentechrw.com'
              });
            `,
          }}
        />
      </head>
      <body
        className={`${teachersMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
