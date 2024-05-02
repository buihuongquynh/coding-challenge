import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../font/Scandia-Regular.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/Scandia-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/Scandia-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

// const myFont = localFont({
//   src: "../font/Scandia-Regular.woff",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Coding challenge",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
