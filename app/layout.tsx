import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaymond Mach — Full Stack Developer",
  description:
    "Full-stack developer building production web applications with Next.js, TypeScript, and PostgreSQL. Based in Kelowna, BC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-display antialiased">
        {children}
      </body>
    </html>
  );
}
