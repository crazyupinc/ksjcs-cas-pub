import type { NextPage } from "next";

export type FindFormResultType = {
  className?: string;
};

const FindFormResult: NextPage<FindFormResultType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[600px] rounded-xl bg-bg-white max-w-[600px] flex flex-col items-center justify-start py-9 px-4 box-border gap-[40px] min-w-[300px] text-left text-sm text-text-text-small-light font-headings-heading-3 ${className}`}
    >
      <div className="box-border flex flex-row items-center justify-center gap-[6px] min-w-[150px] border-b-[1px] border-solid border-bg-light-border">
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
            Account
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-7 flex flex-col items-center justify-center">
          <b className="self-stretch flex-1 relative text-xs leading-[16px] flex font-headings-heading-3 text-text-dark-gray text-center items-center justify-center">
            아이디 찾기
          </b>
          <div className="self-stretch relative bg-button-colors-dark-sky h-0.5" />
        </button>
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] h-7 flex flex-col items-center justify-center box-border">
          <b className="self-stretch flex-1 relative text-xs leading-[16px] flex font-headings-heading-3 text-text-hint-text text-center items-center justify-center">
            비밀번호 찾기
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
            Theme
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
            Theme
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-xs leading-[16px] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
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
      <div className="w-full flex flex-col items-center justify-start gap-[24px] max-w-[528px] text-button-colors-dark-sky">
        <div className="self-stretch flex flex-col items-center justify-start gap-[14px]">
          <input
            className="[outline:none] bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 font-headings-heading-3 text-sm text-text-dark-gray border-[1px] border-solid border-bg-light-border"
            placeholder="이름을 입력해주세요."
            type="text"
          />
          <input
            className="[outline:none] font-headings-heading-3 text-sm bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-2.5 px-3.5 text-text-dark-gray border-[1px] border-solid border-bg-light-border"
            placeholder="이름을 입력해주세요."
            type="text"
          />
        </div>
        <button className="cursor-pointer [border:none] py-3.5 px-7 bg-button-colors-dark-sky self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue mq420:py-2.5 mq420:px-4 mq420:box-border">
          <div className="relative text-base leading-[24px] font-headings-heading-3 text-bg-white text-center mq420:text-smi">
            아이디 찾기
          </div>
        </button>
        <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
          <div className="self-stretch flex flex-col items-start justify-start p-2.5">
            <b className="self-stretch relative leading-[20px]">검색결과</b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start p-2.5 text-center text-text-text-small-light">
            <div className="self-stretch relative leading-[20px]">
              <span>{`아이디는 `}</span>
              <b className="text-semantic-error">
                jiminyee(jiminyee@gmail.com)
              </b>
              <span> 입니다</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindFormResult;
