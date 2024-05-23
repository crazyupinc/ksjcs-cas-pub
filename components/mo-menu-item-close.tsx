import type { NextPage } from "next";

export type MoMenuItemCloseType = {
  className?: string;
  menuName?: string;
  iconChevronDownWhite?: string;
};

const MoMenuItemClose: NextPage<MoMenuItemCloseType> = ({
  className = "",
  menuName,
  iconChevronDownWhite,
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] pt-0 px-0 pb-px bg-[transparent] box-border max-w-full flex flex-col items-start justify-start self-stretch border-b-[1px] border-solid border-bg-light-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-3 px-4">
        <div className="flex-1 relative text-sm leading-[20px] font-headings-heading-3 text-bg-white text-left">
          {menuName}
        </div>
        <img className="w-6 relative h-6" alt="" src={iconChevronDownWhite} />
      </div>
    </button>
  );
};

export default MoMenuItemClose;
