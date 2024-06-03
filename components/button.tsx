import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ButtonType = {
  className?: string;
  button?: string;

  /** Style props */
  buttonAlignSelf?: CSSProperties["alignSelf"];
  buttonPadding?: CSSProperties["padding"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  buttonLineHeight?: CSSProperties["lineHeight"];
};

const Button: NextPage<ButtonType> = ({
  className = "",
  buttonAlignSelf,
  button,
  buttonPadding,
  buttonBackgroundColor,
  buttonLineHeight,
}) => {
  const button2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: buttonAlignSelf,
      padding: buttonPadding,
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonAlignSelf, buttonPadding, buttonBackgroundColor]);

  const button3Style: CSSProperties = useMemo(() => {
    return {
      lineHeight: buttonLineHeight,
    };
  }, [buttonLineHeight]);

  return (
    <button
      className={`cursor-pointer [border:none] py-3.5 px-7 bg-bg-primary rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue sm:py-2.5 sm:px-4 sm:box-border mq420:py-2.5 mq420:px-4 mq420:box-border ${className}`}
      style={button2Style}
    >
      <div
        className="relative text-base leading-[24px] font-body-text-smaller-text text-bg-white text-center sm:text-smi mq420:text-smi"
        style={button3Style}
      >
        {button}
      </div>
    </button>
  );
};

export default Button;
