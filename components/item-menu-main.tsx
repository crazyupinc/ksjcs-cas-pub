import type { NextPage } from "next";

export type ItemMenuMainType = {
  title?: string;
};

const ItemMenuMain: NextPage<ItemMenuMainType> = ({ title }) => {
  return (
    <button className="cursor-pointer [border:none] py-spacing-6 px-spacing-0-5 bg-[transparent] flex flex-col items-center justify-center box-border self-stretch flex-1">
      <b className="self-stretch relative text-lg leading-[20px] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
        {title}
      </b>
    </button>
  );
};

export default ItemMenuMain;
