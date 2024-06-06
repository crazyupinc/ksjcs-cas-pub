import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MoMenuSubItemType = {
  className?: string;
  subMenuName?: string;

  /** Style props */
  moMenuSubItemBorderLeft?: CSSProperties["borderLeft"];
};

const MoMenuSubItem: NextPage<MoMenuSubItemType> = ({
  className = "",
  subMenuName,
  moMenuSubItemBorderLeft,
}) => {
  const moMenuSubItemStyle: CSSProperties = useMemo(() => {
    return {
      borderLeft: moMenuSubItemBorderLeft,
    };
  }, [moMenuSubItemBorderLeft]);

  return (
    <button
      className={`cursor-pointer [border:none] py-0 pr-0 pl-1 bg-[transparent] w-[170px] box-border flex flex-col items-start justify-start border-l-[1px] border-solid border-bg-light-border ${className}`}
      style={moMenuSubItemStyle}
    >
      <div className="self-stretch relative text-xs leading-[16px] font-headings-heading-3 text-bg-white text-left flex items-center h-10 shrink-0">
        {subMenuName}
      </div>
    </button>
  );
};

export default MoMenuSubItem;