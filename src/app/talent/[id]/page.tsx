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
        <div className="l">
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
        <div className="r">
          <Link href="#" className="btn next-tal">
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
        </div>
      </section>
    </main>
  );
}
