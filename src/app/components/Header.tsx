import React from "react";

type Props = {};
import "./header.scss";
import Link from "next/link";
export default function Header({}: Props) {
  return (
    <header id="header">
      <nav id="left">
        <img src="/d/htl.png" alt="" className="htl" />
        <img src="/d/htr.png" alt="" className="htr" />
        <Link className="btn btn-nav active" href={"/talents"}>
          Talents
        </Link>
        <Link className="btn btn-nav" href={"/about"}>
          About
        </Link>
        <Link className="btn btn-nav" href={"/news"}>
          News
        </Link>
      </nav>
      <Link href={"/"} className="btn" id="hd-logo">
        <img src="/g/logo_w.png" alt="" />
      </Link>
      <nav id="right">
        <Link className="btn btn-nav" href={"#"}>
          Store
        </Link>
        <Link className="btn btn-nav" href={"/audition"}>
          Audition
        </Link>
        <Link className="btn btn-nav" href={"/contact"}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
