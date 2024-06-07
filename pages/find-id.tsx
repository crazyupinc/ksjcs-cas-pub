import type { NextPage } from "next";

const FindId: NextPageFindIdType = () => {
  return (
    <div className="w-full relative bg-colors-blue-50 flex flex-col items-center justify-center p-[1.25rem] box-border text-left text-[0.875rem] text-text-text-small-light font-sub-banner-title">
      <div className="self-stretch flex flex-col items-center justify-start py-[3.75rem] px-[0rem] gap-[1.625rem]">
        <img
          className="w-[12.5rem] relative h-[3.956rem] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <div className="w-full rounded-xl bg-button-colors-white flex flex-col items-center justify-start py-[2.25rem] px-[1rem] box-border gap-[2.5rem] min-w-[18.75rem] max-w-[37.5rem]">
          <div className="box-border flex flex-row items-center justify-center gap-[0.375rem] min-w-[9.375rem] border-b-[1px] border-solid border-bg-light-border">
            <button className="cursor-pointer [border:none] pt-[0rem] px-[0rem] pb-[0.125rem] bg-[transparent] self-stretch hidden flex-col items-center justify-center">
              <div className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
                Account
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.75rem] flex flex-col items-center justify-center">
              <b className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] flex font-sub-banner-title text-text-dark-gray text-center items-center justify-center">
                아이디 찾기
              </b>
              <div className="self-stretch relative bg-button-colors-dark-sky h-[0.125rem]" />
            </button>
            <button className="cursor-pointer [border:none] pt-[0rem] px-[0rem] pb-[0.125rem] bg-[transparent] h-[1.75rem] flex flex-col items-center justify-center box-border">
              <b className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] flex font-sub-banner-title text-text-hint-text text-center items-center justify-center">
                비밀번호 찾기
              </b>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
              <div className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
                Theme
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
              <div className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
                Theme
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch hidden flex-col items-center justify-center">
              <div className="self-stretch flex-1 relative text-[0.75rem] leading-[1rem] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
                Theme
              </div>
            </button>
          </div>
          <div className="w-full relative leading-[1.25rem] inline-block max-w-[33rem]">
            <p className="m-0">
              <span className="text-text-text-small-light">{`회원가입 시 등록한 `}</span>
              <span className="text-button-colors-dark-sky">
                이름과 핸드폰 번호
              </span>
              <span>를 입력해주세요.</span>
            </p>
            <p className="m-0">
              입력한 정보가 일치하면 아이디 정보를 확인하실 수 있습니다.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-[1.5rem] max-w-[33rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.875rem]">
              <input
                className="[outline:none] bg-button-colors-white self-stretch rounded flex flex-col items-start justify-start py-[0.625rem] px-[0.875rem] font-sub-banner-title text-[0.875rem] text-text-dark-gray border-[1px] border-solid border-bg-light-border"
                placeholder="이름을 입력해주세요."
                type="text"
              />
              <input
                className="[outline:none] font-sub-banner-title text-[0.875rem] bg-button-colors-white self-stretch rounded flex flex-col items-start justify-start py-[0.625rem] px-[0.875rem] text-text-dark-gray border-[1px] border-solid border-bg-light-border"
                placeholder="핸드폰 번호를 입력해주세요."
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] py-[0.875rem] px-[1.75rem] bg-button-colors-dark-sky self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue mq420:py-[0.625rem] mq420:px-[1rem] mq420:box-border">
              <div className="relative text-[1rem] leading-[1.5rem] font-sub-banner-title text-button-colors-white text-center mq420:text-[0.813rem]">
                아이디 찾기
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[0.375rem] text-center text-text-hint-text">
          <a className="[text-decoration:none] self-stretch relative leading-[1.25rem] text-[inherit] mq420:text-[0.813rem]">
            <span>{`대표 이메일 `}</span>
            <span className="text-button-colors-dark-sky">
              cybercom2013@naver.com
            </span>
          </a>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center">
            <div className="relative leading-[1.25rem] mq420:text-[0.813rem]">
              Copyright © 2023 by cybercom.
            </div>
            <div className="relative leading-[1.25rem] sm:text-[0.813rem] mq420:text-[0.813rem]">
              All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindId;
