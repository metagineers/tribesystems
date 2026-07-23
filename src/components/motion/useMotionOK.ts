"use client";

import { useEffect, useState } from "react";

/**
 * True once mounted when the user has not requested reduced motion.
 * Starts false so SSR/first paint never assumes motion is allowed.
 */
export function useMotionOK() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setOk(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return ok;
}
