import { Media } from "@/payload-types";
import Link from "next/link";
import React from "react";

type Props = {
  art: Media;
};

export default function HeroSection({ art }: Props) {
  return (
    <section id="hero">
      <div className="text-scroll"></div>

      <img src="/d/herotl.png" alt="" className="herotl" />
      <img src="/d/herobl.png" alt="" className="herobl" />
      <img src="/d/herobr.png" alt="" className="herobr" />
      <div className="panel">
        <img src="/d/heroside.png" alt="" className="side sider" />
        <img src="/d/heroside.png" alt="" className="side sidel" />
        <article className="l">
          <h2 className="ht">LET OUR HEARTS</h2>
          <h2 className="hb">BEAT IN SYNC</h2>
          <p>
            In our world, sometimes all you need is to
            <strong>&nbsp;feel the heart of another</strong>. Our mission is to
            connect fans with streamers on an even deeper level, letting us all
            feel as one.
          </p>

          <div className="action">
            <Link href={"/about"} className="btn btn-hero">
              Learn more about us!
            </Link>
            <svg
              width="195"
              height="63"
              viewBox="0 0 195 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          </div>
        </article>
        <div className="r">
          <img src="/g/hero-card.png" alt="" className="card" />
          <img src={art.url ?? "/g/hero-art.png"} alt="" className="ha" />
        </div>
      </div>
      <img src="/d/grid1.png" alt="" className="dgrid" />
      <div className="text-scroll b"></div>
    </section>
  );
}
