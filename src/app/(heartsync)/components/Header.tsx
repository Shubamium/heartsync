"use client";
import React, { useState } from "react";

type Props = {};
import "./header.scss";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
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
        <button className="btn btn-menu" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </button>
        <nav id="right">
          <a className="btn btn-nav" href={"https://shop.heartsync-live.com"}>
            Store
          </a>
          <Link className="btn btn-nav" href={"/audition"}>
            Audition
          </Link>
          <Link className="btn btn-nav" href={"/contact"}>
            Contact
          </Link>
        </nav>
      </header>

      <div
        id="fsh"
        className={`${open ? "open" : "closed"}`}
        onClickCapture={() => {
          setOpen(false);
        }}
      >
        <Link className="btn btn-nav " href={"/"}>
          Home
        </Link>
        <Link className="btn btn-nav " href={"/talents"}>
          Talents
        </Link>
        <Link className="btn btn-nav" href={"/about"}>
          About
        </Link>
        <Link className="btn btn-nav" href={"/news"}>
          News
        </Link>
        <a className="btn btn-nav" href={"https://shop.heartsync-live.com"}>
          Store
        </a>
        <Link className="btn btn-nav" href={"/audition"}>
          Audition
        </Link>
        <Link className="btn btn-nav" href={"/contact"}>
          Contact
        </Link>
        <div className="btn btn-nav">Close</div>
      </div>
    </>
  );
}
