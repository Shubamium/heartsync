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
        <h2 className="h">TALENTS</h2>
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
