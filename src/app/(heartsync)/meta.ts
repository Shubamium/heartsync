import { Metadata } from "next";

const title = "Heart Sync";

const description = "HeartSync official website.";
const banner =
  "https://shubastore.venmiart.com/api/public/dl/qZrRuJU2?inline=true";
const url = "heartsync-live.com";

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
      ",",
    ),
};
