import type { NextPage } from "next";

export type ItemMenuMainType = {
  className?: string;
  title?: string;
};

const ItemMenuMain: NextPage<ItemMenuMainType> = ({
  className = "",
  title,
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] pt-spacing-5 px-spacing-0-5 pb-spacing-7 bg-[transparent] flex flex-col items-center justify-start box-border self-stretch flex-1 ${className}`}
    >
      <b className="relative text-lg leading-[20px] font-body-text-smaller-text text-text-title-medium text-center">
        학회 소개
      </b>
    </button>
  );
};

export default ItemMenuMain;
