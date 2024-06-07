import type { NextPage } from "next";

const FindFormTest: NextPage = () => {
  return (
    <div className="w-full relative bg-text-gray flex flex-row items-center justify-center p-[0.625rem] box-border text-left text-[0.875rem] text-text-text-small-light font-headings-heading-3">
      <div className="flex-1 rounded-xl bg-bg-white flex flex-col items-center justify-start py-[2.25rem] px-[1rem] box-border gap-[2.5rem] max-w-[37.5rem]">
        <div className="box-border flex flex-row items-center justify-center gap-[0.375rem] min-w-[9.375rem] border-b-[1px] border-solid border-bg-light-border">
          <button className="cursor-pointer [border:none] pt-[0rem] px-[0rem] pb-[0.125rem] bg-[transparent] self-stretch hidden flex-col items-center justify-center">
            <div className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
              Account
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.75rem] flex flex-col items-center justify-center">
            <b className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] flex font-headings-heading-3 text-text-dark-gray text-center items-center justify-center">
              아이디 찾기
            </b>
            <div className="self-stretch relative bg-button-colors-dark-sky h-[0.125rem]" />
          </button>
          <button className="cursor-pointer [border:none] pt-[0rem] px-[0rem] pb-[0.125rem] bg-[transparent] h-[1.75rem] flex flex-col items-center justify-center box-border">
            <b className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] flex font-headings-heading-3 text-text-hint-text text-center items-center justify-center">
              비밀번호 찾기
            </b>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
            <div className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
              Theme
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
            <div className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
              Theme
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
            <div className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
              Theme
            </div>
          </button>
        </div>
        <div className="w-full relative leading-[1.25rem] inline-block max-w-[33rem]">
          <p className="m-0">
            회원가입 시 등록한 이름과 핸드폰 번호를 입력해주세요.
          </p>
          <p className="m-0">
            입력한 정보가 일치하면 아이디 정보를 확인하실 수 있습니다.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-[1.5rem] max-w-[33rem]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.875rem]">
            <input
              className="[outline:none] bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-[0.625rem] px-[0.875rem] font-headings-heading-3 text-[0.875rem] text-text-dark-gray border-[1px] border-solid border-bg-light-border"
              placeholder="이름을 입력해주세요."
              type="text"
            />
            <input
              className="[outline:none] font-headings-heading-3 text-[0.875rem] bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-[0.625rem] px-[0.875rem] text-text-dark-gray border-[1px] border-solid border-bg-light-border"
              placeholder="이름을 입력해주세요."
              type="text"
            />
          </div>
          <button className="cursor-pointer [border:none] py-[0.875rem] px-[1.75rem] bg-button-colors-dark-sky self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue mq420:py-[0.625rem] mq420:px-[1rem] mq420:box-border">
            <div className="relative text-[1rem] leading-[1.5rem] font-headings-heading-3 text-bg-white text-center mq420:text-[0.813rem]">
              아이디 찾기
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindFormTest;