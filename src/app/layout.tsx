import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "SEM Frontend",
  description: "SEM Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto">{children}</body>
    </html>
  );
}
