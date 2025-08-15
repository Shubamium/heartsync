import React from "react";

type Props = {};
import "./about.scss";

export default function page({}: Props) {
  return (
    <main id="p_about">
      <section id="mission">
        <div className="confine">
          <div className="l">
            <div className="heading">
              <h2 className="sh">OUR</h2>
              <h2 className="hb">MISSION</h2>
              <p>
                HeartSync is a talent agency that focuses on content that
                provides comfort to the world. Each of our talents have their
                own unique sense and style, HeartSync aims to enable our talents
                to grow that part of themselves.
              </p>
              <p>
                We strive to provide a comfortable experience for our talents
                since they are the forefront of our mission
              </p>
            </div>
          </div>
          <div className="r">
            <img src="/g/logo_w.png" alt="" />
          </div>
        </div>
      </section>
      <section id="story">
        <div className="panel">
          <img src="/g/stl.png" alt="" className="stl" />
          <div className="content">
            <h2 className="sh">OUR</h2>
            <h2 className="h">STORY</h2>
            <p>
              In our darkest times, humans tend to seek comfort. After years of
              feeling lost in our lives we start to find passions and dreams,
              HeartSync was one of those dreams. We exist to create a place for
              those who feel like they belong nowhere, yet dream of being seen
              everywhere. A spark starts a flame, and flames burn brightest when
              nurtured. HeartSync works to nurture sparks into heart engulfing
              flames
            </p>
          </div>
          <img src="/g/str.png" alt="" className="str" />
        </div>
      </section>
      <section id="staff">
        <div className="staff-h">
          <div className="panel">
            <h2 className="sh">HeartSync</h2>
            <h2 className="mh">Meet Our Staff</h2>
          </div>
        </div>
        <div className="staff-l">
          <div className="pane">
            <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div>
            <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div>
            <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div>
            <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div>
            <div className="btn staff">
              <img src="/g/staffpch.png" alt="" className="art" />
              <p className="role">Role</p>
              <h2 className="n">Staff Name</h2>
              <p className="o">Anything and everything</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
