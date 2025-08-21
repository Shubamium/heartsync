import React from "react";
import "./footer.scss";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <img src="/d/ftl.png" alt="" className="ftr" />
      <img src={"/d/ftr.png"} alt="" className="ftl" />
      <div className="top-bar">
        <Link href={"/guidelines"} className="btn btn-add">
          Guidelines
        </Link>
        <Link href={"/privacy-policy"} className="btn btn-add">
          Privacy Policy
        </Link>
        <Link href={"/talents"} className="btn btn-add">
          Talents
        </Link>
        <Link href={"/contact"} className="btn btn-add">
          Contacts
        </Link>
      </div>
      <div className="center">
        <a href="#header">
          <img src="/g/footerico.svg" alt="" className="btn ico" />
        </a>
        <svg
          width="195"
          height="63"
          viewBox="0 0 195 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke"
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

        <div className="socials">
          <div className="st">
            <a
              href="https://youtube.com/@HeartSyncLive"
              className="btn btn-socials"
            >
              <FaYoutube />
            </a>
            <a href="https://x.com/HeartSyncLive" className="btn btn-socials">
              <FaXTwitter />
            </a>
            {/* <a href="#" className="btn btn-socials">
              <BsDiscord />
            </a> */}
          </div>
          <div className="attrib">
            <p>
              website design by{" "}
              <a href="https://www.x.com/Shubamium2">SHUBAMIUM</a>
            </p>
          </div>
        </div>

        <svg
          width="109"
          height="84"
          viewBox="0 0 109 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="heart"
        >
          <g clipPath="url(#clip0_246_5164)">
            <path
              d="M109 32.4365C105.941 37.1247 102.183 42.0558 97.9536 46.9804C85.5999 61.3798 69.246 75.753 54.585 83.9606C54.5523 83.9737 54.5327 83.9934 54.5 84.0066C54.4739 83.9934 54.4477 83.9803 54.415 83.9606C39.7606 75.7464 23.4001 61.3798 11.0464 46.9804C6.8174 42.0558 3.05901 37.1247 0 32.4365C11.4974 17.0653 24.3021 6.40194 38.4794 0C42.4731 1.8976 48.0944 5.12155 54.5 9.35011C60.9056 5.12155 66.5269 1.90417 70.5206 0C84.6979 6.40194 97.5026 17.0653 109 32.4365Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_246_5164">
              <rect width="109" height="84" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="bottom">
        <p>&copy; 2025 HeartSync LLC</p>
      </div>
    </footer>
  );
}
