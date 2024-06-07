import type { NextPage } from "next";

export type MainPopupType = {
  className?: string;
};

const MainPopup: NextPage<MainPopupType> = ({ className = "" }) => {
  return (
    <div
      className={`max-w-full flex flex-col items-center justify-start sm:hidden ${className}`}
    >
      <div className="w-[400px] relative bg-gainsboro-200 h-[571px]" />
      <div className="self-stretch bg-colors-cyan-950 h-10 flex flex-row items-center justify-between py-3 px-2.5 box-border mq420:h-10">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs leading-[16px] font-sub-banner-title text-button-colors-white text-left inline-block">{`하루 동안 다시 열지않습니다 `}</button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-4 relative h-4">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconcross.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default MainPopup;
