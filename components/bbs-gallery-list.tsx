import type { NextPage } from "next";
import CardListRowAll from "./card-list-row-all";
import Pagination from "./pagination";

export type BbsGalleryListType = {
  className?: string;
};

const BbsGalleryList: NextPage<BbsGalleryListType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full flex flex-col items-start justify-start p-5 box-border text-left text-base text-dark-gray font-headings-heading-3 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10">
        <div className="w-full flex flex-col items-end justify-center gap-[26px] max-w-[1300px]">
          <div className="w-80 flex flex-col items-start justify-start max-w-[320px] mq420:max-w-[320%]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[340px] relative leading-[24px] hidden">
                Email
              </div>
              <div className="self-stretch rounded-default-border-raius bg-bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border sm:pt-1.5 sm:pb-1.5 sm:box-border">
                <img
                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/iconsearch.svg"
                />
                <input
                  className="[border:none] [outline:none] font-headings-heading-3 text-base bg-[transparent] flex-1 relative leading-[24px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap sm:text-smi"
                  placeholder="검색어를 입력해주세요."
                  type="text"
                />
              </div>
              <div className="w-[340px] relative leading-[24px] text-gray hidden">
                This is a hint text for the user
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end">
            <button className="cursor-pointer [border:none] py-2 px-5 bg-button-colors-dark-sky overflow-hidden flex flex-row items-center justify-center gap-[6px] hover:bg-royalblue">
              <img
                className="w-4 relative h-4"
                alt=""
                src="/icongridwhite.svg"
              />
              <div className="relative text-sm leading-[20px] font-headings-heading-3 text-bg-white text-center">
                카드
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2 px-5 bg-bg-light-border overflow-hidden flex flex-row items-center justify-center gap-[6px] hover:bg-gainsboro-100">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/iconlistbold.svg"
              />
              <div className="relative text-sm leading-[20px] font-headings-heading-3 text-button-colors-dark-sky text-center">
                리스트
              </div>
            </button>
          </div>
          <CardListRowAll />
          <CardListRowAll />
          <CardListRowAll />
          <CardListRowAll />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default BbsGalleryList;
