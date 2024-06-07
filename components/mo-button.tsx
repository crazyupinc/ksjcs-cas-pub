import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MoButtonType = {
  className?: string;
  title?: string;

  /** Style props */
  moButtonBorder?: CSSProperties["border"];
};

const MoButton: NextPage<MoButtonType> = ({
  className = "",
  title,
  moButtonBorder,
}) => {
  const moButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: moButtonBorder,
    };
  }, [moButtonBorder]);

  return (
    <button
      className={`cursor-pointer py-px px-0 bg-[transparent] w-[300px] box-border h-[42px] flex flex-col items-center justify-center min-w-[150px] max-w-[300px] border-[1px] border-solid border-bg-light-border ${className}`}
      style={moButtonStyle}
    >
      <div className="self-stretch relative text-sm leading-[20px] font-headings-heading-3 text-bg-white text-center">
        {title}
      </div>
    </button>
  );
};

export default MoButton;
