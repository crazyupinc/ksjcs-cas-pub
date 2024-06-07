import type { NextPage } from "next";
import { useEffect } from "react";

const SubBanner1: NextPageSubBanner1Type = () => {
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
    <div className="w-full relative h-[13.75rem] flex flex-col items-center justify-end bg-[url('/subbanner1@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-normal text-center text-[3rem] text-button-colors-white font-sub-banner-title">
      <div className="self-stretch flex-1 flex flex-col items-center justify-center py-[0rem] px-[1.25rem]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[0.25rem]">
          <h1
            className="m-0 self-stretch h-[3rem] relative text-inherit leading-[3rem] font-bold font-inherit inline-block [&.animate]:animate-[0.3s_ease-in_0s_1_normal_forwards_fade-in-left] opacity-[0] sm:text-[2.25rem] sm:leading-[2.25rem]"
            data-animate-on-scroll
          >
            학회 소개
          </h1>
          <div
            className="self-stretch h-[1rem] relative text-[1rem] inline-block [&.animate]:animate-[0.2s_ease-in_0.5s_1_normal_forwards_fade-in] opacity-[0] sm:text-[0.75rem]"
            data-animate-on-scroll
          >
            Cybercommunication Academic Society
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-[0rem] px-[1rem] text-left text-[1rem] text-text-text-small-light">
        <div className="w-[40rem] flex flex-row flex-wrap items-start justify-center max-w-[40rem]">
          <div className="flex-1 h-[3.125rem] flex flex-col items-center justify-end min-w-[18.563rem] max-w-[25rem] sm:hidden">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-button-colors-white box-border h-[3.169rem] flex flex-row items-center justify-start p-[0.875rem] gap-[0.875rem] border-[0.7px] border-solid border-colors-slate-300">
                <div className="flex-1 relative leading-[1.5rem] overflow-hidden text-ellipsis whitespace-nowrap">
                  학회 소개
                </div>
                <img
                  className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icon-chevron-down.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 h-[3.125rem] flex flex-col items-center justify-end min-w-[18.563rem] max-w-[25rem]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-button-colors-white box-border h-[3.169rem] flex flex-row items-center justify-start p-[0.875rem] gap-[0.875rem] border-[0.7px] border-solid border-colors-slate-300">
                <div className="flex-1 relative leading-[1.5rem] overflow-hidden text-ellipsis whitespace-nowrap">
                  회장인사말
                </div>
                <img
                  className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icon-chevron-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner1;
