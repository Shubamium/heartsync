import React, { CSSProperties } from "react";

type Props = {};
import "./talent.scss";
import { FaArrowRight, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { CgPlayButton } from "react-icons/cg";
export default function page({}: Props) {
  return (
    <main
      id="p_tal"
      style={
        {
          "--bg": "#FFCFD7",
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
              Kumu Cotton
              <img src="/d/empty-heart.png" alt="" className="eh" />
            </h2>
            <p className="bio">
              A silly matchmaker with a knack for finding herself in troublesome
              situations. It’s amazing how she can be so mean, yet endearing.
            </p>

            <div className="contacts">
              <a href="#" className="btn btn-tct">
                <FaYoutube /> @KumuCotton
              </a>
              <a href="#" className="btn btn-tct">
                <FaYoutube /> @KumuCotton
              </a>
            </div>
          </div>
        </div>
        <div className="tal-art">
          <img src="/g/pchsplash.png" alt="" className="tal" />
        </div>
        <div className="voiceline">
          <div className="line">
            <p>
              “Cotto~ I’m Kumu! Are you ready to meet your other half? Really?!
              You’re taken? I don’t believe it.”
            </p>
          </div>
          <button className="btn btn-play">
            <CgPlayButton />
          </button>
        </div>
        <div className="strokebar"></div>
        <div className="r">
          <svg
            width="1087"
            height="838"
            viewBox="0 0 1087 838"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="th"
          >
            <g opacity="0.28" clip-path="url(#clip0_266_1009)">
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

          <Link href="#" className="btn next-tal">
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
              <h2>Siena Olena</h2>
              <p>
                View More <FaArrowRight />
              </p>
            </div>
            <img src="/g/pfp.png" alt="" className="pfp" />
          </Link>

          <div className="il">
            <div className="i">
              <h2>Birthday</h2>
              <p>27 June</p>
            </div>
            <div className="i">
              <h2>Birthday</h2>
              <p>27 June</p>
            </div>
            <div className="i">
              <h2>Birthday</h2>
              <p>27 June</p>
            </div>
          </div>

          <div className="tsides">
            <img src="/d/speech.png" alt="" className="spe" />
            <div className="top">
              <img src="/g/tside.png" alt="" className="art" />
            </div>
            <div className="top bottom">
              <img src="/g/tside2.png" alt="" className="art" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
