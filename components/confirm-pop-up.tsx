import type { NextPage } from "next";

const ConfirmPopUp: NextPage = () => {
  return (
    <div className="w-[400px] shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] rounded-lg bg-bg-colors-white max-w-[400px] h-[207px] flex flex-col items-center justify-start gap-[24px] text-left text-xs text-bg-colors-white font-headings-headling-2">
      <div className="self-stretch rounded-t-lg rounded-b-none bg-button-colors-dark-sky h-12 flex flex-col items-center justify-center py-0 px-5 box-border">
        <b className="self-stretch flex-1 relative leading-[16px] flex items-center">
          비밀번호 변경 안내
        </b>
      </div>
      <div className="self-stretch h-[70px] flex flex-col items-center justify-center py-0 px-4 box-border gap-[6px] text-center text-sm text-text-text-small-light">
        <div className="self-stretch relative leading-[20px]">
          변경한 비밀번호는 다음 로그인부터 적용됩니다.
        </div>
        <div className="self-stretch relative leading-[20px]">
          정말 비밀번호를 변경하시겠습니까?
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[40px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative text-sm leading-[20px] font-bold font-headings-headling-2 text-button-colors-dark-sky text-center inline-block shrink-0">
          네
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative text-sm leading-[20px] font-bold font-headings-headling-2 text-text-hint-text text-left inline-block shrink-0">
          아니오
        </button>
      </div>
    </div>
  );
};

export default ConfirmPopUp;
