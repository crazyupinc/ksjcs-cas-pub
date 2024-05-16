import type { NextPage } from "next";
import InputField from "./input-field";

const FindForm: NextPage = () => {
  return (
    <div className="w-[600px] rounded-xl bg-bg-white max-w-[600px] flex flex-col items-center justify-start py-9 px-4 box-border gap-[40px] min-w-[300px] text-left text-sm text-text-text-small-light font-body-text-normal-text">
      <div className="box-border flex flex-row items-center justify-center gap-[6px] min-w-[150px] border-b-[1px] border-solid border-bg-light-border">
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-body-text-normal-text text-text-gray text-center flex items-center justify-center">
            Account
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-7 flex flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-extrabold font-body-text-normal-text text-text-dark-gray text-center flex items-center justify-center">
            아이디 찾기
          </div>
          <div className="self-stretch relative bg-bg-primary h-0.5" />
        </button>
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] h-7 flex flex-col items-center justify-center box-border">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-extrabold font-body-text-normal-text text-text-lightest-gray text-center flex items-center justify-center">
            비밀번호 찾기
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-body-text-normal-text text-text-gray text-center flex items-center justify-center">
            Theme
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-body-text-normal-text text-text-gray text-center flex items-center justify-center">
            Theme
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-body-text-normal-text text-text-gray text-center flex items-center justify-center">
            Theme
          </div>
        </button>
      </div>
      <div className="w-full relative leading-[20px] inline-block max-w-[528px]">
        <p className="m-0">
          회원가입 시 등록한 이름과 핸드폰 번호를 입력해주세요.
        </p>
        <p className="m-0">
          입력한 정보가 일치하면 아이디 정보를 확인하실 수 있습니다.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-[24px] max-w-[528px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[14px]">
          <InputField inputFieldPlaceholder="이름을 입력해주세요." />
          <InputField inputFieldPlaceholder="핸드폰 번호를 입력해주세요." />
        </div>
        <button className="cursor-pointer [border:none] py-3.5 px-7 bg-bg-primary self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue mq420:py-2.5 mq420:px-4 mq420:box-border">
          <div className="relative text-base leading-[24px] font-body-text-normal-text text-bg-white text-center mq420:text-smi">
            아이디 찾기
          </div>
        </button>
      </div>
    </div>
  );
};

export default FindForm;
