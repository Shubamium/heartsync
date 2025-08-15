import React from "react";

type Props = {};
import "./contact.scss";
import { FaPaperPlane, FaYoutube } from "react-icons/fa";
import { GiPaperPlane } from "react-icons/gi";
import { BsAirplane } from "react-icons/bs";
import { GoPaperAirplane } from "react-icons/go";
export default function page({}: Props) {
  return (
    <main id="p_contact">
      <section id="panel">
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
              <FaYoutube />
            </a>
            <a href="#" className="btn btn-soc">
              <FaYoutube />
            </a>
          </div>
        </div>
        <form className="r">
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
              name="name"
              placeholder="Write your subject here . . ."
            />
          </div>
          <div className="input">
            <label htmlFor="name">Message</label>
            <textarea name="name" placeholder="Write your message here . . ." />
          </div>
          <button className="btn send" type="submit">
            Send <GoPaperAirplane />
          </button>
        </form>
      </section>
    </main>
  );
}
