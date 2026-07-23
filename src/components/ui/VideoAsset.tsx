"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useMotionOK } from "@/components/motion/useMotionOK";

type VideoAssetProps = {
  src: string;
  poster: string;
  alt: string;
  /** Hero poster should pass priority for LCP */
  priority?: boolean;
  className?: string;
};

/**
 * Poster-first media block. The poster (next/image) always renders and is
 * the LCP element; the video mounts only in-viewport with motion allowed,
 * cross-fading over the poster once it can play. Any video error falls
 * back silently to the poster.
 */
export default function VideoAsset({
  src,
  poster,
  alt,
  priority,
  className,
}: VideoAssetProps) {
  const motionOK = useMotionOK();
  const holder = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: "20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const showVideo = motionOK && inView && !failed;

  return (
    <div ref={holder} className={clsx("relative overflow-hidden", className)}>
      <Image
        src={poster}
        alt={alt}
        fill
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        sizes="100vw"
        className="object-cover"
      />
      {showVideo && (
        <video
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          onCanPlay={() => setPlaying(true)}
          onError={() => setFailed(true)}
          className={clsx(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            playing ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
