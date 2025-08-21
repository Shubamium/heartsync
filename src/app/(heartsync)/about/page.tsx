import React from "react";

type Props = {};
import "./about.scss";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { Metadata } from "next";
import { Media } from "@/payload-types";

export const metadata: Metadata = {
  title: "About | HeartSync",
};
export default async function page({}: Props) {
  const config = await payloadConfig;
  const p = await getPayload({ config });
  const staff = await p.find({
    collection: "staff",
  });
  return (
    <main id="p_about">
      <img src="/d/pkd.png" alt="" className="pkd pl" />
      <img src="/d/pkd.png" alt="" className="pkd pr" />

      <section id="mission">
        <div className="confine">
          <div className="l">
            <div className="heading">
              <h2 className="sh">OUR</h2>
              <h2 className="hb">
                MISSION{" "}
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
              </h2>
              <p>
                HeartSync is a talent agency that focuses on content that
                provides comfort to the world. Each of our talents have their
                own unique sense and style, HeartSync aims to enable our talents
                to grow that part of themselves.
              </p>
              <p>
                We strive to provide a comfortable experience for our talents
                since they are the forefront of our mission
              </p>
            </div>
          </div>
          <div className="r">
            <img src="/g/logo_w.png" alt="" />
          </div>
        </div>
      </section>
      <section id="story">
        <div className="panel">
          <img src="/g/stl.png" alt="" className="stl" />
          <div className="content">
            <img src="/d/star2.png" alt="" className="star" />
            <h2 className="sh">OUR</h2>
            <h2 className="h">STORY</h2>
            <p>
              In our darkest times, humans tend to seek comfort. After years of
              feeling lost in our lives we start to find passions and dreams,
              HeartSync was one of those dreams. We exist to create a place for
              those who feel like they belong nowhere, yet dream of being seen
              everywhere. A spark starts a flame, and flames burn brightest when
              nurtured. HeartSync works to nurture sparks into heart engulfing
              flames
            </p>
          </div>
          <img src="/g/str.png" alt="" className="str" />
        </div>
      </section>
      <section id="staff">
        <img src="/d/grid2.png" alt="" className="grid" />
        <img src="/d/staffl.png" alt="" className="staffl" />
        <div className="staff-h">
          <img src="/d/star.png" alt="" className="star" />
          <div className="panel">
            <h2 className="sh">HeartSync</h2>
            <h2 className="mh">
              Meet Our Staff{" "}
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
            </h2>
          </div>
        </div>
        <div className="staff-l">
          <div className="pane">
            {staff?.docs?.map((s) => {
              const im = s.image as Media;
              return (
                <div className="btn staff" key={s.id}>
                  <img src={im.url ?? undefined} alt="" className="art" />
                  <p className="role">{s.role}</p>
                  <h2 className="n">{s.name}</h2>
                  <p className="o">{s.description}</p>
                </div>
              );
            })}
            {/* <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div>
            <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div>
            <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div>
            <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
