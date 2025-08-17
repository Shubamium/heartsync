import React from "react";

import "./news.scss";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function page({ params }: Props) {
  const { slug } = await params;
  const config = await payloadConfig;
  const p = await getPayload({ config });
  const n = await p.find({
    collection: "news",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const nd = n.docs[0];
  const ndate = new Date(nd.date).toDateString();
  const nbanner = nd.banner as Media;
  return (
    <main id="p_read">
      <section id="article">
        <div className="page">
          <div className="ph">
            <p className="d">{ndate}</p>
            <h2 className="h">{nd.title}</h2>
          </div>
          <img src={nbanner.url ?? undefined} alt="" className="ban" />
          <article>
            <RichText data={nd.article} />
          </article>

          <div className="action">
            <Link href={"/news"} className="btn btn-all">
              <FaArrowLeft /> All News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
