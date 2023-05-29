"use client";

import Image from "next/image";
// @ts-ignore
import HoverVideoPlayer from "react-hover-video-player";

export default function Journey() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/images/the-journey/journey-browser.png"
        alt="Browser icon"
        width={1226}
        height={922}
        className="pointer-events-none relative z-10 w-full"
      />
      <div className="absolute bottom-0 left-0 top-0 h-full">
        <HoverVideoPlayer
          videoSrc="/images/the-journey/journey-preview.mp4"
          className="h-full w-full object-contain"
          videoClassName="h-full object-cover"
        />
      </div>
    </div>
  );
}
