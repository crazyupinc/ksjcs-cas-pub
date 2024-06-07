import type { NextPage } from "next";

export type BbsContentInfoType = {
  className?: string;
};

const BbsContentInfo: NextPage<BbsContentInfoType> = ({ className = "" }) => {
  return (
    <div
      className={`max-w-full flex flex-row items-center justify-start py-1 px-0 box-border gap-[3px] text-center text-sm text-text-hint-text font-headings-heading-3 self-stretch ${className}`}
    >
      <div className="w-20 flex flex-row items-center justify-center gap-[4px] text-text-text-small sm:w-auto sm:[align-self:unset]">
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/iconuser.svg"
        />
        <div className="relative leading-[20px] sm:text-left">관리자</div>
      </div>
      <div className="w-[120px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 sm:flex"
          alt=""
          src="/iconcalendar1.svg"
        />
        <div className="relative leading-[20px] sm:text-left">2024.04.15</div>
      </div>
      <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 sm:flex"
          alt=""
          src="/iconeye1.svg"
        />
        <div className="relative leading-[20px] sm:text-left">89</div>
      </div>
    </div>
  );
};

export default BbsContentInfo;
