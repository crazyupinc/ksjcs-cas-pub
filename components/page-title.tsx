import type { NextPage } from "next";

export type PageTitleType = {
  className?: string;
};

const PageTitle: NextPage<PageTitleType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full h-[140px] flex flex-col items-center justify-center py-[50px] px-5 box-border text-center text-11xl text-text-title-large font-headings-heading-3 mq420:h-[100px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start">
        <b className="w-[113px] relative leading-[36px] flex items-end justify-center h-10 shrink-0 sm:text-11xl sm:h-10 mq420:text-5xl mq420:text-left">
          회원가입
        </b>
      </div>
    </div>
  );
};

export default PageTitle;