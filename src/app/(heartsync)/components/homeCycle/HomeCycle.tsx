"use client";
import { Home, Media } from "@/payload-types";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  medias: Home["corner"];
};

export default function HomeCycle({ medias }: Props) {
  const [ci, setCi] = useState(0);

  const curr = medias[(ci + medias.length) % medias.length];
  const m = curr?.image as Media;

  useEffect(() => {
    const interval = setInterval(() => {
      setCi((ci) => ci + 1);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div className="cycle">
      <AnimatePresence mode="wait">
        {/* {medias?.map((m, i) => {
          if (typeof m === "string") return undefined;
          if (ci !== i) return undefined;
          const media = m.image as Media;
          return (
            <motion.a
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 0, x: 0 }}
              exit={{ opacity: 0, x: 500 }}
              href={m.url ?? undefined}
              target="_blank"
            >
              <img
                key={media.alt + i}
                src={media.url ?? undefined}
                alt={media.alt}
                className={`item ${ci === i ? "active" : "hidden"}`}
              />
            </motion.a>
          );
        })} */}
        <motion.a
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          href={curr?.url ?? undefined}
          target="_blank"
          key={curr?.id}
        >
          <img src={m?.url ?? undefined} className={`item `} />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
