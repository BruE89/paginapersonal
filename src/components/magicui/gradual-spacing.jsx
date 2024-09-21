"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}) {
  const [prevText, setPrevText] = useState(text);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setPrevText(text);
      setIsFirstRender(false);
    }
  }, [text, isFirstRender]);

  return (
    <div className="flex">
      {text.split("").map((char, i) => (
        <motion.h1
          key={i}
          initial={isFirstRender ? "hidden" : false}
          animate={isFirstRender ? "visible" : false}
          variants={framerProps}
          transition={{
            duration,
            delay: isFirstRender ? i * delayMultiple : 0,
          }}
          className={cn("drop-shadow-sm", className)}
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.h1>
      ))}
    </div>
  );
}