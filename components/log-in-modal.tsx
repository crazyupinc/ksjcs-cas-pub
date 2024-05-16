import type { NextPage } from "next";

const LogInModal: NextPage = () => {
  return (
    <div className="w-[400px] shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] rounded-lg bg-bg-white max-w-[400px] overflow-hidden flex flex-col items-center justify-start py-2 px-0 box-border relative text-left text-sm text-text-text-small-light font-body-text-normal-text">
      <img
        className="w-[196px] relative h-[62px] object-cover z-[0]"
        alt=""
        src="/logo1@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start p-6 gap-[20px] z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
          <input
            className="[outline:none] font-body-text-normal-text text-sm bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 text-text-dark-gray border-[1px] border-solid border-bg-light-border"
            placeholder="아이디를 입력하세요."
            type="text"
          />
          <input
            className="[outline:none] bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 font-body-text-normal-text text-sm text-text-dark-gray border-[1px] border-solid border-bg-light-border"
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="w-4 relative bg-bg-white box-border h-4 border-[1px] border-solid border-colors-slate-400" />
            <div className="relative leading-[20px]">비밀번호 표시</div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3.5 px-7 bg-bg-primary self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue sm:py-2.5 sm:px-4 sm:box-border mq420:py-2.5 mq420:px-4 mq420:box-border">
          <div className="relative text-base leading-[24px] font-body-text-normal-text text-bg-white text-center sm:text-smi">
            로그인
          </div>
        </button>
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
