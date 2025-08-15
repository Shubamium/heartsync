"use client";
import React from "react";

type Props = {};
import "./talentList.scss";
import { useRouter } from "next/navigation";
export default function TalentList({}: Props) {
  const navigate = useRouter();
  return (
    <div id="talent-list">
      <div className="th">
        <p className="sh">HeartSync</p>
        <h2 className="h">
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
          TALENTS
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
      <div className="tl">
        <div
          className="tc"
          onClick={() => {
            navigate.push("/talent/miki-kokoa");
          }}
        >
          <div className="artpart">
            <img src="/g/tlpch.png" alt="" className="talart" />
          </div>
          <div className="info">
            <h2 className="n">Miki Kokoa</h2>
            <p className="t">Talent Title here</p>
          </div>
        </div>
        <div
          className="tc"
          onClick={() => {
            navigate.push("/talent/miki-kokoa");
          }}
        >
          <div className="artpart">
            <img src="/g/tlpch.png" alt="" className="talart" />
          </div>
          <div className="info">
            <h2 className="n">Miki Kokoa</h2>
            <p className="t">Talent Title here</p>
          </div>
        </div>
        <div
          className="tc"
          onClick={() => {
            navigate.push("/talent/miki-kokoa");
          }}
        >
          <div className="artpart">
            <img src="/g/tlpch.png" alt="" className="talart" />
          </div>
          <div className="info">
            <h2 className="n">Miki Kokoa</h2>
            <p className="t">Talent Title here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
