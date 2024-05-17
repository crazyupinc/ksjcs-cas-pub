import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FindFormType = {
  /** Style props */
  themeFontSize1?: CSSProperties["fontSize"];
  themeLineHeight1?: CSSProperties["lineHeight"];
  themeFontSize2?: CSSProperties["fontSize"];
  themeLineHeight2?: CSSProperties["lineHeight"];
  themeFontSize3?: CSSProperties["fontSize"];
  themeLineHeight3?: CSSProperties["lineHeight"];
  divFontSize?: CSSProperties["fontSize"];
  divLineHeight?: CSSProperties["lineHeight"];
  formGap?: CSSProperties["gap"];
  inputGap?: CSSProperties["gap"];
  inputFieldPadding?: CSSProperties["padding"];
  inputFieldFontSize?: CSSProperties["fontSize"];
  inputFieldFontSize1?: CSSProperties["fontSize"];
  inputFieldPadding1?: CSSProperties["padding"];
  buttonPadding?: CSSProperties["padding"];
  buttonFontSize?: CSSProperties["fontSize"];
  buttonLineHeight?: CSSProperties["lineHeight"];
};

const FindForm: NextPage<FindFormType> = ({
  themeFontSize1,
  themeLineHeight1,
  themeFontSize2,
  themeLineHeight2,
  themeFontSize3,
  themeLineHeight3,
  divFontSize,
  divLineHeight,
  formGap,
  inputGap,
  inputFieldPadding,
  inputFieldFontSize,
  inputFieldFontSize1,
  inputFieldPadding1,
  buttonPadding,
  buttonFontSize,
  buttonLineHeight,
}) => {
  const themeStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: themeFontSize1,
      lineHeight: themeLineHeight1,
    };
  }, [themeFontSize1, themeLineHeight1]);

  const theme1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: themeFontSize2,
      lineHeight: themeLineHeight2,
    };
  }, [themeFontSize2, themeLineHeight2]);

  const theme2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: themeFontSize3,
      lineHeight: themeLineHeight3,
    };
  }, [themeFontSize3, themeLineHeight3]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize,
      lineHeight: divLineHeight,
    };
  }, [divFontSize, divLineHeight]);

  const formStyle: CSSProperties = useMemo(() => {
    return {
      gap: formGap,
    };
  }, [formGap]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      gap: inputGap,
    };
  }, [inputGap]);

  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      padding: inputFieldPadding,
      fontSize: inputFieldFontSize,
    };
  }, [inputFieldPadding, inputFieldFontSize]);

  const inputField1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: inputFieldFontSize1,
      padding: inputFieldPadding1,
    };
  }, [inputFieldFontSize1, inputFieldPadding1]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      padding: buttonPadding,
    };
  }, [buttonPadding]);

  const button2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
    };
  }, [buttonFontSize, buttonLineHeight]);

  return (
    <div className="w-[600px] rounded-xl bg-bg-colors-white max-w-[600px] flex flex-col items-center justify-start py-9 px-4 box-border gap-[40px] min-w-[300px] text-left text-sm text-text-text-small-light font-headings-headling-2">
      <div className="box-border flex flex-row items-center justify-center gap-[6px] min-w-[150px] border-b-[1px] border-solid border-bg-light-border">
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-headings-headling-2 text-text-gray text-center flex items-center justify-center">
            Account
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-7 flex flex-col items-center justify-center">
          <b className="self-stretch flex-1 relative text-xs leading-[16px] flex font-headings-headling-2 text-text-dark-gray text-center items-center justify-center">
            아이디 찾기
          </b>
          <div className="self-stretch relative bg-button-colors-dark-sky h-0.5" />
        </button>
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] h-7 flex flex-col items-center justify-center box-border">
          <b className="self-stretch flex-1 relative text-xs leading-[16px] flex font-headings-headling-2 text-text-hint-text text-center items-center justify-center">
            비밀번호 찾기
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div
            className="self-stretch flex-1 relative text-xs leading-[16px] font-headings-headling-2 text-text-gray text-center flex items-center justify-center"
            style={themeStyle}
          >
            Theme
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div
            className="self-stretch flex-1 relative text-xs leading-[16px] font-headings-headling-2 text-text-gray text-center flex items-center justify-center"
            style={theme1Style}
          >
            Theme
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div
            className="self-stretch flex-1 relative text-xs leading-[16px] font-headings-headling-2 text-text-gray text-center flex items-center justify-center"
            style={theme2Style}
          >
            Theme
          </div>
        </button>
      </div>
      <div
        className="w-full relative leading-[20px] inline-block max-w-[528px]"
        style={divStyle}
      >
        <p className="m-0">
          회원가입 시 등록한 이름과 핸드폰 번호를 입력해주세요.
        </p>
        <p className="m-0">
          입력한 정보가 일치하면 아이디 정보를 확인하실 수 있습니다.
        </p>
      </div>
      <div
        className="w-full flex flex-col items-center justify-start gap-[24px] max-w-[528px]"
        style={formStyle}
      >
        <div
          className="self-stretch flex flex-col items-center justify-start gap-[14px]"
          style={inputStyle}
        >
          <input
            className="[outline:none] bg-bg-colors-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 font-headings-headling-2 text-sm text-text-dark-gray border-[1px] border-solid border-bg-light-border"
            placeholder="이름을 입력해주세요."
            type="text"
            style={inputFieldStyle}
          />
          <input
            className="[outline:none] font-headings-headling-2 text-sm bg-bg-colors-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 text-text-dark-gray border-[1px] border-solid border-bg-light-border"
            placeholder="이름을 입력해주세요."
            type="text"
            style={inputField1Style}
          />
        </div>
        <button
          className="cursor-pointer [border:none] py-3.5 px-7 bg-button-colors-dark-sky self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue mq420:py-2.5 mq420:px-4 mq420:box-border"
          style={button1Style}
        >
          <div
            className="relative text-base leading-[24px] font-headings-headling-2 text-bg-colors-white text-center mq420:text-smi"
            style={button2Style}
          >
            아이디 찾기
          </div>
        </button>
      </div>
    </div>
  );
};

export default FindForm;
