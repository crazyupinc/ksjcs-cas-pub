import type { NextPage } from "next";

export type TermsPopupType = {
  className?: string;
};

const TermsPopup: NextPage<TermsPopupType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[700px] max-w-full flex flex-col items-start justify-start text-center text-lg text-text-text-small-light font-body-text-smaller-text ${className}`}
    >
      <div className="self-stretch rounded-t-lg rounded-b-none bg-colors-blue-50 h-[55px] flex flex-row items-center justify-center py-0 pr-4 pl-8 box-border mq420:h-10">
        <b className="flex-1 relative leading-[24px] uppercase sm:text-base mq420:text-smi">
          이용약관
        </b>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/icon1.svg"
        />
      </div>
      <div className="self-stretch rounded-t-none rounded-b-lg bg-bg-white flex flex-row items-start justify-start p-5">
        <div className="flex-1 rounded-md bg-bg-light h-[700px]" />
      </div>
    </div>
  );
};

export default TermsPopup;
