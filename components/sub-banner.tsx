import type { NextPage } from "next";
import { useMemo, type CSSProperties, useEffect } from "react";
import DropdownClose from "./dropdown-close";

export type SubBannerType = {
  title?: string;
  desc?: string;

  /** Style props */
  bgImage?: CSSProperties["backgroundImage"];
};

const SubBanner: NextPage<SubBannerType> = ({ title, desc, bgImage }) => {
  const subBannerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: bgImage,
    };
  }, [bgImage]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="max-w-full h-[220px] flex flex-col items-center justify-end bg-[url('/subbanner@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-29xl text-bg-colors-white font-headings-headling-2 self-stretch mq640:h-[170px]"
      style={subBannerStyle}
    >
      <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-5">
        <div className="self-stretch flex flex-col items-center justify-center">
          <h1
            className="m-0 self-stretch h-[70px] relative text-inherit leading-[48px] font-normal font-inherit flex items-end justify-center shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] mq640:text-17xl"
            data-animate-on-scroll
          >
            {title}
          </h1>
          <div
            className="self-stretch h-[23px] relative text-base font-body-text-normal-text inline-block shrink-0 [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in-left] opacity-[0] mq640:text-sm"
            data-animate-on-scroll
          >
            {desc}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-5">
        <div className="w-[640px] flex flex-row flex-wrap items-start justify-center max-w-[640px]">
          <div className="flex-1 h-[50px] flex flex-col items-center justify-end min-w-[300px] max-w-[400px] mq640:hidden">
            <DropdownClose />
          </div>
          <div className="flex-1 h-[50px] flex flex-col items-center justify-end min-w-[300px] max-w-[400px]">
            <DropdownClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
