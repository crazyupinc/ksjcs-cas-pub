import type { NextPage } from "next";
import Button from "./button";

export type LogInModalType = {
  className?: string;
};

const LogInModal: NextPage<LogInModalType> = ({ className = "" }) => {
  return (
    <div
      className={`shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] rounded-lg bg-bg-white overflow-hidden flex flex-col items-center justify-start py-2 px-0 box-border relative min-w-[320px] max-w-[400px] text-left text-sm text-text-text-small-light font-body-text-smaller-text ${className}`}
    >
      <img
        className="w-[196px] relative h-[62px] object-cover z-[0]"
        alt=""
        src="/logo1@2x.png"
      />
      <div className="w-full flex flex-col items-start justify-start p-6 box-border gap-[20px] min-w-[320px] max-w-[400px] z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
          <input
            className="[outline:none] font-body-text-smaller-text text-sm bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 text-text-dark-gray border-[1px] border-solid border-bg-light-border"
            placeholder="아이디를 입력하세요."
            type="text"
          />
          <input
            className="[outline:none] bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 font-body-text-smaller-text text-sm text-text-dark-gray border-[1px] border-solid border-bg-light-border"
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="w-4 relative bg-bg-white box-border h-4 border-[1px] border-solid border-colors-slate-400" />
            <div className="relative leading-[20px]">비밀번호 표시</div>
          </div>
        </div>
        <Button
          buttonAlignSelf="stretch"
          button="로그인"
          buttonPadding="14px 28px"
          buttonBackgroundColor="#0369a1"
          buttonLineHeight="24px"
        />
        <div className="self-stretch flex flex-row items-start justify-center gap-[20px] text-center">
          <div className="relative leading-[20px]">회원가입</div>
          <div className="relative leading-[20px] text-left">
            아이디/비밀번호 찾기
          </div>
        </div>
      </div>
      <img
        className="w-4 absolute !m-[0] top-[10px] right-[10px] h-4 overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/iconx.svg"
      />
    </div>
  );
};

export default LogInModal;
