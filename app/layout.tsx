import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";

const teachersMono = Teachers({
  variable: "--font-teachers-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Apply university with Bentech :: Bentech",
    template: '%s :: Bentech Application'
  },
  description: "This is the portal for applying in university with bentech",
  creator: 'Bentech',
  publisher: 'Bentech',
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Apply university with Bentech :: Bentech',
    description: 'This is the portal for applying in university with bentech',
    url: 'https://applywith.bentechrw.com',
    siteName: 'Bentech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Bentech :: Your Gateway to Digital Excellence',
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${teachersMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
