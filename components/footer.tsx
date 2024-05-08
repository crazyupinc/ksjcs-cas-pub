import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FooterType = {
  /** Style props */
  footerWidth?: CSSProperties["width"];
};

const Footer: NextPage<FooterType> = ({ footerWidth }) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      width: footerWidth,
    };
  }, [footerWidth]);

  return (
    <div
      className="w-[1920px] bg-text-colors-dark-gray max-w-full flex flex-col items-center justify-start p-2.5 box-border text-center text-17xl text-text-colors-amber font-headings-heading-4"
      style={footerStyle}
    >
      <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-[1300px]">
        <b className="relative leading-[40px]">TODO: FOOTER</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
        <b className="relative leading-[40px]">Footer Item1</b>
      </div>
    </div>
  );
};

export default Footer;
