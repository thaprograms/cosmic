import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adkins Enterprise LLC",
  description:"Adkins Enterprise LLC is a mission-driven organization focused on education, health, and sustainability through innovative digital platforms."
    ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}