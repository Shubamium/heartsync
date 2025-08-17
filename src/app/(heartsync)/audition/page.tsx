import React from "react";

type Props = {};
import "./audition.scss";
import { FaCalendarXmark } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import { BsHeartFill } from "react-icons/bs";
import Dropdown from "./Dropdown";
export default async function page({}: Props) {
  const config = await payloadConfig;
  const p = await getPayload({ config });
  const a = await p.findGlobal({ slug: "audition" });

  return (
    <main id="p_audi">
      <section id="main">
        <img src="/d/adl.png" alt="" className="adl" />
        <img src="/d/adr.png" alt="" className="adr" />
        <div className="confine">
          <div className="l">
            <img src="/g/logo_w.png" alt="" className="logo" />
          </div>
          <div className="r">
            <div className="content">
              <h2 className="sh">HeartSync</h2>
              <h2 className="mh">AUDITIONS</h2>
              <div className="status">
                {!a.status ? (
                  <>
                    <FaCalendarXmark />
                    <p>CLOSED</p>
                  </>
                ) : (
                  <>
                    <BsHeartFill />
                    <p className="open">OPEN</p>
                  </>
                )}
              </div>
              <p className="stat-text">{a["status-text"]}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="requirements">
        <img src="/d/arl.png" alt="" className="arl" />
        <img src="/d/arl.png" alt="" className="arr" />

        <div className="rh">
          <h2>REQUIREMENTS</h2>
        </div>
        <div className="rg">
          <div className="r">
            <p>Must be aged 18 or older.</p>
          </div>
          <div className="r">
            <p>Female presenting applicants only.</p>
          </div>
        </div>
        <div className="rg">
          <div className="r">
            <p>Nationality does not matter.</p>
          </div>
          <div className="r">
            <p>Fluency in the English language..</p>
          </div>
        </div>
        <div className="r">
          A clear vision for the kind of creator you wish to be.
        </div>
      </section>
      <section id="timeline">
        <div className="l">
          <div className="btn time">
            <p className="num">
              1
              <svg
                width="111"
                height="86"
                viewBox="0 0 111 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_252_866)">
                  <path
                    d="M111 33.2088C107.885 38.0086 104.058 43.0571 99.7509 48.099C87.1705 62.8412 70.5166 77.5566 55.5865 85.9597C55.5533 85.9731 55.5333 85.9933 55.5 86.0067C55.4734 85.9933 55.4467 85.9798 55.4135 85.9597C40.4901 77.5499 23.8295 62.8412 11.2491 48.099C6.94249 43.0571 3.11514 38.0086 0 33.2088C11.7084 17.4716 24.748 6.55437 39.1855 0C43.2525 1.94278 48.9769 5.24349 55.5 9.57274C62.0231 5.24349 67.7475 1.9495 71.8145 0C86.252 6.55437 99.2916 17.4716 111 33.2088Z"
                    fill="#BE2346"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_252_866">
                    <rect width="111" height="86" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <h2 className="t">Application and interviews.</h2>
            <p className="d">
              This step consists of applicants submitting their auditions. Staff
              will review them and select applicants will be asked to
              participate in multiple stages of interviews, with eliminations
              happening each round.
            </p>
          </div>
          <div className="btn time">
            <p className="num">
              2
              <svg
                width="111"
                height="86"
                viewBox="0 0 111 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_252_866)">
                  <path
                    d="M111 33.2088C107.885 38.0086 104.058 43.0571 99.7509 48.099C87.1705 62.8412 70.5166 77.5566 55.5865 85.9597C55.5533 85.9731 55.5333 85.9933 55.5 86.0067C55.4734 85.9933 55.4467 85.9798 55.4135 85.9597C40.4901 77.5499 23.8295 62.8412 11.2491 48.099C6.94249 43.0571 3.11514 38.0086 0 33.2088C11.7084 17.4716 24.748 6.55437 39.1855 0C43.2525 1.94278 48.9769 5.24349 55.5 9.57274C62.0231 5.24349 67.7475 1.9495 71.8145 0C86.252 6.55437 99.2916 17.4716 111 33.2088Z"
                    fill="#BE2346"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_252_866">
                    <rect width="111" height="86" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <h2 className="t">Preparations</h2>
            <p className="d">
              Chosen applicants will then be asked to assist in building a brand
              for themselves that best fits them and the character they will
              portray. Training and production of assets will happen at this
              stage
            </p>
          </div>
          <div className="btn time">
            <p className="num">
              3
              <svg
                width="111"
                height="86"
                viewBox="0 0 111 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_252_866)">
                  <path
                    d="M111 33.2088C107.885 38.0086 104.058 43.0571 99.7509 48.099C87.1705 62.8412 70.5166 77.5566 55.5865 85.9597C55.5533 85.9731 55.5333 85.9933 55.5 86.0067C55.4734 85.9933 55.4467 85.9798 55.4135 85.9597C40.4901 77.5499 23.8295 62.8412 11.2491 48.099C6.94249 43.0571 3.11514 38.0086 0 33.2088C11.7084 17.4716 24.748 6.55437 39.1855 0C43.2525 1.94278 48.9769 5.24349 55.5 9.57274C62.0231 5.24349 67.7475 1.9495 71.8145 0C86.252 6.55437 99.2916 17.4716 111 33.2088Z"
                    fill="#BE2346"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_252_866">
                    <rect width="111" height="86" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <h2 className="t">Debut</h2>
            <p className="d">
              The talents will be able to start producing public content under
              the identity that is built under
            </p>
          </div>
        </div>
        <div className="r">
          <h2 className="sh">AUDITION</h2>
          <h2 className="mh">TIMELINE</h2>
          <img src="/g/audi.png" alt="" />
        </div>
      </section>
      <section id="audifaq">
        <div className="h">
          <div className="confine">
            <h2 className="sh">FREQUENTLY</h2>
            <h2 className="mh">ASKED QUESTIONS</h2>
            <svg
              width="195"
              height="63"
              viewBox="0 0 195 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112.718 60.629L100.38 27.3506L91.8505 44.7735L83.2484 33.4741L23.6353 33.7657L23.6171 29.5558L85.326 29.2642L91.0668 36.8093L100.926 16.6891L112.171 47.0333L124.819 2L134.697 29.5558H161.961V33.7657H131.744L125.311 15.8144L112.718 60.629Z"
                fill="white"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M18.5506 29.592H8.29004V33.8202H18.5506V29.592Z"
                fill="white"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M177.343 29.592H167.082V33.8202H177.343V29.592Z"
                fill="white"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M186.692 29.592H182.464V33.8202H186.692V29.592Z"
                fill="white"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M194 29.592H191.813V33.8202H194V29.592Z"
                fill="white"
                stroke="white"
                strokeMiterlimit="10"
              />
              <path
                d="M3.18697 29.592H1V33.8202H3.18697V29.592Z"
                fill="white"
                stroke="white"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
        <div className="list">
          <div className="confine">
            {a?.faq?.map((fq, i) => {
              return (
                <Dropdown
                  key={fq.id}
                  q={fq.question ?? ""}
                  a={fq.answer ?? ""}
                ></Dropdown>
              );
            })}
            {/* <div className="faq">
              <div className="qp">
                <p>Q. Am I able to join HeartSync with my current IP?</p>
                <button className="btn btn-drop">
                  <GoTriangleDown />
                </button>
              </div>

              <div className="ap">
                <p>
                  This will depend on a case by case basis. Please do not apply
                  expecting to be able to continue streaming with your current
                  IP under HeartSync.
                </p>
              </div>
            </div>
            <div className="faq">
              <div className="qp">
                <p>Q. Am I able to join HeartSync with my current IP?”</p>
                <button className="btn btn-drop">
                  <GoTriangleDown />
                </button>
              </div>

              <div className="ap">
                <p>
                  This will depend on a case by case basis. Please do not apply
                  expecting to be able to continue streaming with your current
                  IP under HeartSync.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
