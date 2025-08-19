import type { Metadata } from "next";
import { Gluten } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/Header";
import LocalFont from "next/font/local";
import Footer from "./components/footer/Footer";
export const dynamic = "force-dynamic";
const lt = LocalFont({
  src: [
    {
      path: "/fonts/LTKaraoke-Light.ttf",
      weight: "300",
      style: "Light",
    },
    {
      path: "/fonts/LTKaraoke-Regular.ttf",
      weight: "400",
      style: "Regular",
    },
    {
      path: "/fonts/LTKaraoke-Medium.ttf",
      weight: "500",
      style: "Medium",
    },
    {
      path: "/fonts/LTKaraoke-Bold.ttf",
      weight: "700",
      style: "Bold",
    },
  ],
});

const gluten = Gluten({
  subsets: ["latin"],
  weight: "400",
});

const title = "Heart Sync";

const description = "HeartSync official website.";
const banner =
  "https://shubastore.caprover.venmi.art/api/public/dl/qZrRuJU2?inline=true";
const url = "https://heartsync-live.com";

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),

  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  description: description,
  keywords:
    "HeartSync, Virtual Youtuber, VTuber Agency, VTuber, Heart Sync, Kumu Cotton, Siena Olena, Miki Kokoa".split(
      ","
    ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""}
        style={
          {
            "--fontL": lt.style.fontFamily,
            "--fontG": gluten.style.fontFamily,
          } as CSSProperties
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
