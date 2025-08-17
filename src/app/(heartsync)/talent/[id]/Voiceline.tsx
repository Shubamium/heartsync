"use client";
import { Media, Talent } from "@/payload-types";
import React, { useEffect, useRef, useState } from "react";
import { CgPlayButton, CgPlayPause } from "react-icons/cg";

type Props = {
  v: Talent["voiceline"];
};

export default function Voiceline({ v }: Props) {
  const audiref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audiref.current) {
      if (isPlaying) {
        audiref.current.play();
        audiref.current.currentTime = 0;
      } else {
        audiref.current.pause();
      }
    }
  }, [isPlaying]);
  return (
    <div className="voiceline">
      <div className="line">
        <p>"{v.voiceline}"</p>
      </div>
      <button
        className="btn btn-play"
        onClick={() => {
          if (isPlaying) {
            audiref.current?.pause();
            setIsPlaying(false);
          } else {
            audiref.current?.play();
            setIsPlaying(true);
          }
        }}
      >
        {!isPlaying ? <CgPlayButton /> : <CgPlayPause />}
      </button>
      <audio ref={audiref} src={(v.audio as Media).url ?? ""}></audio>
    </div>
  );
}
