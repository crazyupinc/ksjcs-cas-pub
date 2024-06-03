import type { NextPage } from "next";
import SearchField from "./search-field";
import CardListRowAll from "./card-list-row-all";
import Pagination from "./pagination";

export type BbsVideoListType = {
  className?: string;
};

const BbsVideoList: NextPage<BbsVideoListType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full flex flex-col items-start justify-start p-5 box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10">
        <div className="w-full flex flex-col items-end justify-center gap-[26px] max-w-[1300px]">
          <SearchField
            iconSearch="/iconsearch.svg"
            showEmail={false}
            showIcon
            showThisIsA={false}
          />
          <div className="flex flex-row items-center justify-end">
            <button className="cursor-pointer [border:none] py-2 px-5 bg-bg-primary overflow-hidden flex flex-row items-center justify-center gap-[6px] hover:bg-royalblue">
              <img
                className="w-4 relative h-4"
                alt=""
                src="/icongridwhite.svg"
              />
              <div className="relative text-sm leading-[20px] font-body-text-smaller-text text-bg-white text-center">
                카드
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2 px-5 bg-bg-light-border overflow-hidden flex flex-row items-center justify-center gap-[6px] hover:bg-gainsboro-100">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/iconlistbold.svg"
              />
              <div className="relative text-sm leading-[20px] font-body-text-smaller-text text-bg-primary text-center">
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

export default BbsVideoList;
