"use client";
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

type Props = {};

export default function Dropdown({ q, a }: { q: string; a: string }) {
  const [o, setO] = useState(false);

  return (
    <div className={`faq ${o ? "open" : "closed"}`}>
      <div className="qp">
        <p>Q. {q}</p>
        <button className="btn btn-drop" onClick={() => setO(!o)}>
          <GoTriangleDown />
        </button>
      </div>

      <div className="ap">
        <p>{a}</p>
      </div>
    </div>
  );
}
