import React, { CSSProperties } from "react";

import "./talent.scss";
import { FaArrowRight, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { CgPlayButton } from "react-icons/cg";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { redirect } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
import { Media, Talent } from "@/payload-types";
import Voiceline from "./Voiceline";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const config = await payloadConfig;
  const payload = await getPayload({ config });

  const td = await payload.find({
    collection: "talent",
    where: {
      slug: {
        equals: id,
      },
    },
  });

  const banner = td.docs[0].sidet as Media;
  return {
    title: `${td.docs[0].name} | HeartSync`,
    description: td.docs[0].bio,
    openGraph: {
      images: [banner.url ?? undefined],
    },
    twitter: {
      images: [banner.url ?? undefined],
    },
  };
}
export default async function page({ params }: Props) {
  const { id } = await params;

  const config = await payloadConfig;
  const payload = await getPayload({ config });
  const td = await payload.find({
    collection: "talent",
    where: {
      slug: {
        equals: id,
      },
    },
  });
  if (td?.docs[0] === undefined) {
    redirect("/not-found");
  }
  const t = td.docs[0];

  const nt = t?.nt as Talent;

  return (
    <main
      id="p_tallist"
      style={
        {
          "--bg": t.color ?? "grey",
        } as CSSProperties
      }
    >
      <section id="display">
        <img src="/d/ttl.png" alt="" className="ttl" />
        <img src="/d/ttr.png" alt="" className="ttr" />
        <img src="/d/tgr.png" alt="" className="tgr" />
        <img src="/d/tgl.png" alt="" className="tgl" />
        <div className="l">
          <img src="/d/pkd.png" alt="" className="pkd" />
          <div className="info">
            <h2 className="name">
              {t.name}
              <img src="/d/empty-heart.png" alt="" className="eh" />
            </h2>
            <p className="bio">{t.bio}</p>

            <div className="contacts">
              <a href={t?.yt.url} target="_blank" className="btn btn-tct">
                <FaYoutube /> {t?.yt?.handle}
              </a>
              <a href={t?.x.url} target="_blank" className="btn btn-tct x">
                <FaXTwitter /> {t?.x?.handle}
              </a>
            </div>
          </div>
        </div>
        <div className="tal-art">
          <img
            src={(t?.main as Media).url ?? undefined}
            alt=""
            className="tal"
          />
        </div>
        <div className="strokebar"></div>
        <div className="r">
          <div className="top">
            <svg
              width="1087"
              height="838"
              viewBox="0 0 1087 838"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="th"
            >
              <g opacity="0.28" clipPath="url(#clip0_266_1009)">
                <path
                  d="M1087 323.593C1056.49 370.363 1019.01 419.557 976.84 468.685C853.643 612.337 690.554 755.726 544.347 837.607C544.021 837.738 543.826 837.935 543.5 838.066C543.239 837.935 542.979 837.804 542.653 837.607C396.511 755.661 233.357 612.337 110.16 468.685C67.9864 419.557 30.5059 370.363 0 323.593C114.658 170.246 242.352 63.867 383.735 0C423.562 18.9308 479.62 51.0936 543.5 93.2785C607.38 51.0936 663.438 18.9963 703.265 0C844.648 63.867 972.342 170.246 1087 323.593Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_266_1009">
                  <rect width="1087" height="838" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Link href={"/talent/" + t?.slug} className="btn next-tal">
              <svg
                width="195"
                height="63"
                viewBox="0 0 195 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke"
              >
                <path
                  d="M112.718 60.629L100.38 27.3506L91.8505 44.7735L83.2484 33.4741L23.6353 33.7657L23.6171 29.5558L85.326 29.2642L91.0668 36.8093L100.926 16.6891L112.171 47.0333L124.819 2L134.697 29.5558H161.961V33.7657H131.744L125.311 15.8144L112.718 60.629Z"
                  fill="#FB3965"
                  stroke="#FB3965"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.5506 29.592H8.29004V33.8202H18.5506V29.592Z"
                  fill="#FB3965"
                  stroke="#FB3965"
                  strokeMiterlimit="10"
                />
                <path
                  d="M177.343 29.592H167.082V33.8202H177.343V29.592Z"
                  fill="#FB3965"
                  stroke="#FB3965"
                  strokeMiterlimit="10"
                />
                <path
                  d="M186.692 29.592H182.464V33.8202H186.692V29.592Z"
                  fill="#FB3965"
                  stroke="#FB3965"
                  strokeMiterlimit="10"
                />
                <path
                  d="M194 29.592H191.813V33.8202H194V29.592Z"
                  fill="#FB3965"
                  stroke="#FB3965"
                  strokeMiterlimit="10"
                />
                <path
                  d="M3.18697 29.592H1V33.8202H3.18697V29.592Z"
                  fill="#FB3965"
                  stroke="#FB3965"
                  strokeMiterlimit="10"
                />
              </svg>
              <div className="info">
                <h2>{nt.name} </h2>
                <p>
                  View More <FaArrowRight />
                </p>
              </div>
              <img
                src={(nt.pfp as Media)?.url ?? undefined}
                alt=""
                className="pfp"
              />
            </Link>

            <div className="il">
              {t?.il?.map((d, i) => (
                <div className="i" key={d.id}>
                  <h2>{d?.title}</h2>
                  <p>{d?.value}</p>
                </div>
              ))}
            </div>

            <div className="tsides">
              <img src="/d/speech.png" alt="" className="spe" />
              <div className="top">
                <img
                  src={(t?.sidet as Media).url ?? undefined}
                  alt=""
                  className="art"
                />
              </div>
              <div className="top bottom">
                <img
                  src={(t?.sideb as Media).url ?? undefined}
                  alt=""
                  className="art"
                />
              </div>
            </div>
          </div>
          <div className="bottom">
            {t.voiceline && <Voiceline v={t.voiceline} />}
          </div>
        </div>
      </section>
    </main>
  );
}
