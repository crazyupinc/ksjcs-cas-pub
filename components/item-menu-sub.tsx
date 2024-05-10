import type { NextPage } from "next";

export type ItemMenuSubType = {
  title?: string;
};

const ItemMenuSub: NextPage<ItemMenuSubType> = ({ title }) => {
  return (
    <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] flex flex-col items-center justify-center box-border self-stretch">
      <div className="self-stretch relative text-sm leading-[20px] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
        {title}
      </div>
    </button>
  );
};

export default ItemMenuSub;
