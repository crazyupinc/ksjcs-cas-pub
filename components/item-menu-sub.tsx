import type { NextPage } from "next";

export type ItemMenuSubType = {
  className?: string;
  title?: string;
};

const ItemMenuSub: NextPage<ItemMenuSubType> = ({ className = "", title }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] flex flex-col items-center justify-center box-border self-stretch ${className}`}
    >
      <div className="self-stretch relative text-sm leading-[20px] font-body-text-smaller-text text-text-text-small text-center hover:text-bg-primary">
        {title}
      </div>
    </button>
  );
};

export default ItemMenuSub;
