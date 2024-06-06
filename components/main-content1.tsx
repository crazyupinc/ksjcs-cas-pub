import type { NextPage } from "next";

export type MainContent1Type = {
  className?: string;
};

const MainContent1: NextPage<MainContent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-bg-light max-w-full flex flex-col items-center justify-center py-0 px-5 box-border text-left text-17xl text-text-colors-gray font-headings-heading-3 ${className}`}
    >
      <div className="w-full rounded-lg overflow-hidden flex flex-row items-center justify-center py-[90px] px-0 box-border gap-[8px] max-w-[1300px] md:flex-col md:gap-[16px] md:items-center md:justify-start sm:pt-[60px] sm:pb-[60px] sm:box-border mq420:pt-[60px] mq420:pb-[60px] mq420:box-border">
        <div className="flex-1 flex flex-row items-center justify-center md:flex-[unset] md:self-stretch">
          <img
            className="w-60 relative h-[348.4px] object-cover"
            alt=""
            src="/dbpiaimg@2x.png"
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[36px] md:items-start md:justify-start md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
            <b className="self-stretch relative leading-[40px] md:text-center sm:text-7xl mq420:text-5xl">
              사이버커뮤니케이션 학보
            </b>
            <div className="self-stretch flex flex-col items-start justify-start text-sm text-text-text-small-light md:items-center md:justify-center mq420:flex-col mq420:items-center mq420:justify-start">
              <div className="relative leading-[20px] md:text-left sm:text-smi">
                사이버커뮤니케이션학회 제1호(1997)
              </div>
              <div className="relative leading-[20px] md:text-left sm:text-smi">
                제40권 제4호(2023) KCI등재
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] md:items-start md:justify-center">
            <button className="cursor-pointer py-3.5 px-7 bg-[transparent] rounded-md overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-button-colors-dark-sky hover:bg-gainsboro-100 sm:py-2 sm:px-4 sm:box-border">
              <div className="relative text-base leading-[24px] font-headings-heading-3 text-button-colors-dark-sky text-center sm:text-smi">
                논문투고 안내
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3.5 px-7 bg-text-colors-amber rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue sm:py-2 sm:px-4 sm:box-border">
              <div className="relative text-base leading-[24px] font-headings-heading-3 text-bg-white text-center sm:text-smi">
                온라인 논문투고
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent1;