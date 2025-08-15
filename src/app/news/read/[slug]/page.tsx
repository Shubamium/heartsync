import React from "react";

type Props = {};
import "./news.scss";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
export default function page({}: Props) {
  return (
    <main id="p_read">
      <section id="article">
        <div className="page">
          <div className="ph">
            <p className="d">27 Jun 2025</p>
            <h2 className="h">HEADLINE HERE</h2>
          </div>
          <img src="/g/pch.png" alt="" className="ban" />
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </article>

          <div className="action">
            <Link href={"/news"} className="btn btn-all">
              <FaArrowLeft /> All News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
