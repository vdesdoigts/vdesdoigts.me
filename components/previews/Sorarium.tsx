"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "./sorarium.css";

export default function CollectionSwiperItem() {
  const swiperRef = useRef<any>(null);
  const direction = useRef<"next" | "prev">("next");
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    let timeout: any = null;
    let interval: any = null;

    if (hovered) {
      timeout = setTimeout(() => swipe(), 500);
      interval = setInterval(() => swipe(), 2800);
    } else {
      clearTimeout(timeout);
      clearInterval(interval);
    }
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [hovered]);

  const swipe = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      if (swiper.isEnd) {
        direction.current = "prev";
        swiper.slidePrev();
      } else if (swiper.isBeginning) {
        direction.current = "next";
        swiper.slideNext();
      } else if (direction.current === "next") {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }
    }
  };

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="relative w-full">
      <Image
        src="/images/sorarium/sorarium-white-bg.png"
        alt="Sorarium gradient background"
        width={1226}
        height={922}
      />
      <div
        className="absolute left-0 top-0 flex h-full w-full flex-col py-4"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex h-full w-full flex-col justify-center">
          <Swiper
            ref={swiperRef}
            allowTouchMove={false}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            initialSlide={1}
            speed={600}
          >
            <SwiperSlide>
              <Image
                priority
                src="/images/sorarium/lebron-james.webp"
                width={257}
                height={416}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                alt="Coucou"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                priority
                src="/images/sorarium/jaylen-brown.webp"
                width={257}
                height={416}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                alt="Coucou"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                priority
                src="/images/sorarium/joel-embiid.webp"
                width={257}
                height={416}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                alt="Coucou"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
