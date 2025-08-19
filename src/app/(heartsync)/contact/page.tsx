"use client";
import React, { useState } from "react";

type Props = {};
import "./contact.scss";
import { FaPaperPlane, FaYoutube } from "react-icons/fa";
import { GiPaperPlane } from "react-icons/gi";
import { BsAirplane, BsDiscord } from "react-icons/bs";
import { GoPaperAirplane } from "react-icons/go";
import { submitForm } from "../util/util";
import { BiLoaderCircle } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export default function page({}: Props) {
  const [l, setL] = useState(false);
  const [s, setS] = useState("Loading . . .");
  return (
    <main id="p_contact">
      <div className={`ctloading ${l ? "visible" : "closed"}`}>
        <BiLoaderCircle />
        <p>{s}</p>
      </div>
      <section id="panel">
        <svg
          width="195"
          height="63"
          viewBox="0 0 195 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke sl"
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

        <svg
          width="195"
          height="63"
          viewBox="0 0 195 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke sr"
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

        <div className="l">
          <img src="/g/logo_w.png" alt="" className="logo" />
          <h2 className="sh">REACH OUT</h2>
          <h2 className="mh">CONTACT US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>

          <div className="socials">
            <a href="#" className="btn btn-soc">
              <FaYoutube />
            </a>
            <a href="#" className="btn btn-soc">
              <FaXTwitter />
            </a>
            <a href="#" className="btn btn-soc">
              <BsDiscord />
            </a>
          </div>
        </div>
        <form
          className="r"
          onSubmit={async (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            setL(true);
            setS("Sending . . .");
            const res = await submitForm(data);
            if (res) {
              setS("Message submitted, we will get back to you soon.");
            } else {
              setS("Something went wrong, please try again.");
            }
            setTimeout(() => {
              setL(false);
            }, 3000);
          }}
        >
          <div className="input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Write your name here . . ."
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Write your name here . . ."
            />
          </div>
          <div className="input">
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Write your subject here . . ."
            />
          </div>
          <div className="input">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here . . ."
            />
          </div>
          <button className="btn send" type="submit">
            Send <GoPaperAirplane />
          </button>
        </form>
      </section>
    </main>
  );
}
