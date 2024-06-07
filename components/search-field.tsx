import type { NextPage } from "next";

export type SearchFieldType = {
  className?: string;
  iconSearch?: string;
  showEmail?: boolean;
  showIcon?: boolean;
  showThisIsA?: boolean;
};

const SearchField: NextPage<SearchFieldType> = ({
  className = "",
  iconSearch,
  showEmail,
  showIcon,
  showThisIsA,
}) => {
  return (
    <div
      className={`w-80 flex flex-col items-start justify-start max-w-[320px] text-left text-base text-dark-gray font-headings-heading-3 mq420:max-w-[320%] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <div className="w-[340px] relative leading-[24px] hidden">Email</div>
        <div className="self-stretch rounded-default-border-raius bg-bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border sm:pt-1.5 sm:pb-1.5 sm:box-border">
          <img
            className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
            alt=""
            src={iconSearch}
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
  );
};

export default SearchField;
