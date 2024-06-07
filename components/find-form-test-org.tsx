import type { NextPage } from "next";

export type FindFormTestOrgType = {
  className?: string;
};

const FindFormTestOrg: NextPage<FindFormTestOrgType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[492px] bg-text-gray max-w-full overflow-hidden flex flex-col items-center justify-center p-2.5 box-border text-left text-sm text-text-text-small-light font-sub-banner-title ${className}`}
    >
      <div className="w-full rounded-xl bg-button-colors-white box-border flex flex-col items-center justify-start p-9 gap-[40px] min-w-[320px] max-w-[600px] border-[1px] border-solid border-colors-neutral-300 mq420:pl-4 mq420:pr-4 mq420:box-border">
        <div className="box-border flex flex-row items-center justify-center gap-[6px] min-w-[150px] border-b-[1px] border-solid border-bg-light-border">
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
            <div className="self-stretch flex-1 relative text-xs leading-[16px] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
              Account
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-7 flex flex-col items-center justify-center">
            <b className="self-stretch flex-1 relative text-xs leading-[16px] flex font-sub-banner-title text-text-dark-gray text-center items-center justify-center">
              아이디 찾기
            </b>
            <div className="self-stretch relative bg-button-colors-dark-sky h-0.5" />
          </button>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] h-7 flex flex-col items-center justify-center box-border">
            <b className="self-stretch flex-1 relative text-xs leading-[16px] flex font-sub-banner-title text-text-hint-text text-center items-center justify-center">
              비밀번호 찾기
            </b>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
            <div className="self-stretch flex-1 relative text-xs leading-[16px] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
              Theme
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
            <div className="self-stretch flex-1 relative text-xs leading-[16px] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
              Theme
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
            <div className="self-stretch flex-1 relative text-xs leading-[16px] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
              Theme
            </div>
          </button>
        </div>
        <div className="self-stretch h-10 relative leading-[20px] inline-block mq420:text-smi">
          <p className="m-0">
            회원가입 시 등록한 이름과 핸드폰 번호를 입력해주세요.
          </p>
          <p className="m-0">
            입력한 정보가 일치하면 아이디 정보를 확인하실 수 있습니다.
          </p>
        </div>
        <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
            <input
              className="[outline:none] bg-button-colors-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 font-sub-banner-title text-sm text-text-dark-gray border-[1px] border-solid border-bg-light-border"
              placeholder="이름을 입력해주세요."
              type="text"
            />
            <input
              className="[outline:none] font-sub-banner-title text-sm bg-button-colors-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 text-text-dark-gray border-[1px] border-solid border-bg-light-border"
              placeholder="핸드폰 번호를 입력해주세요."
              type="tel"
            />
          </div>
          <button className="cursor-pointer [border:none] py-3.5 px-7 bg-button-colors-dark-sky self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue mq420:py-2.5 mq420:px-4 mq420:box-border">
            <div className="relative text-base leading-[24px] font-sub-banner-title text-button-colors-white text-center mq420:text-smi">
              아이디 찾기
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindFormTestOrg;
