import type { NextPage } from "next";
import SubBanner1 from "./sub-banner1";
import Footer1 from "./footer1";

const SkeletonSubExample: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start text-left text-[1.875rem] text-text-colors-normal font-headings-headling-2">
      <div className="self-stretch bg-colors-red-300 h-[7.75rem] flex flex-col items-center justify-start md:h-[4.375rem]">
        <div className="self-stretch bg-bg-colors-light-gray flex flex-col items-start justify-start">
          <div className="self-stretch bg-bg-colors-light-gray h-[3.375rem] flex flex-col items-center justify-center py-spacing-4 px-[0.937rem] box-border md:hidden">
            <div className="w-full h-[1.4rem] flex flex-row items-center justify-end py-[0rem] px-[0.937rem] box-border max-w-[81.25rem]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[0.25rem]">
                  <img
                    className="w-[0.875rem] relative h-[0.875rem]"
                    alt="icon-login"
                    src="/iconlogin.svg"
                  />
                  <div className="w-[2.788rem] relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-left flex items-center h-[1.4rem] shrink-0 hover:text-button-colors-dark-sky">
                    {" "}
                    로그인
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[0.25rem]">
                  <img
                    className="w-[1.094rem] relative h-[0.875rem]"
                    alt="icon-register"
                    src="/iconregister.svg"
                  />
                  <div className="w-[3.625rem] relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-left flex items-center h-[1.4rem] shrink-0 hover:text-button-colors-dark-sky">
                    {" "}
                    회원가입
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-bg-colors-light-gray h-[4.375rem] flex flex-col items-center justify-center">
            <div className="w-full flex-1 flex flex-row items-center justify-between py-[0rem] px-[0.937rem] box-border max-w-[81.25rem]">
              <div className="self-stretch w-[20.313rem] flex flex-row items-center justify-start">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
                  <img
                    className="w-[12.5rem] relative h-[3.613rem] object-cover mq420:w-[9.375rem] mq420:h-[2.688rem]"
                    alt="CyberComLogo"
                    loading="eager"
                    src="/navbarbrand@2x.png"
                  />
                </button>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-between md:hidden">
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] pt-spacing-5 px-spacing-0-5 pb-spacing-7 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-start">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회 소개
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] pt-spacing-5 px-spacing-0-5 pb-spacing-7 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-start">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회 소식
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] pt-spacing-5 px-spacing-0-5 pb-spacing-7 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-start">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학술지
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] pt-spacing-5 px-spacing-0-5 pb-spacing-7 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-start">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      게시판
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] pt-spacing-5 px-spacing-0-5 pb-spacing-7 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-start">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회원 공간
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] pt-spacing-5 px-spacing-0-5 pb-spacing-7 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-start">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      자료실
                    </b>
                  </button>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center md:flex">
                <img
                  className="w-[1.5rem] relative h-[1.5rem]"
                  alt="icon hamburger"
                  src="/iconhamburger.svg"
                />
              </button>
            </div>
          </div>
          <div className="self-stretch bg-bg-colors-light-gray flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-spacing-5 md:hidden">
            <div className="w-full flex flex-row items-start justify-center py-[0rem] pr-[0.937rem] pl-[21.25rem] box-border max-w-[81.25rem]">
              <div className="flex-1 flex flex-row items-start justify-between">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회장인사말
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회정관
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      선거관리규정
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회연혁
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      임원진
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      공지사항
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      주요행사
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      공모안내
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회앨범
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      논문검색
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      온라인 논문 투고
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      편집위원회
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학술지규정
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회원동정
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      채용정보
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      외부공모 및 행사안내
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회원가입안내
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회원가입
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      연회비 납부현황
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      증명서 발급 안내
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      개인정보보호정책
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학술대회 자료집
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      세미나 자료집
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      영상 자료실
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-headling-2 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      사진 자료실
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-colors-blue-300 h-[13.75rem] flex flex-col items-center justify-start sm:h-[10.625rem]">
        <SubBanner1 />
      </div>
      <div className="self-stretch bg-colors-indigo-300 h-[11.25rem] flex flex-col items-center justify-start sm:h-[7.5rem]">
        <div className="self-stretch flex-1 bg-bg-colors-white flex flex-col items-center justify-center py-[3.125rem] px-[1.25rem]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.375rem]">
            <div className="flex flex-row items-start justify-center py-[0rem] pr-[1.437rem] pl-[0rem] gap-[0.375rem]">
              <img
                className="w-[1.438rem] relative h-[1.375rem] object-cover"
                alt=""
                src="/logo@2x.png"
              />
              <b className="w-[7.063rem] relative leading-[2.25rem] flex items-end h-[2.5rem] shrink-0 sm:text-[1.5rem]">
                회원가입
              </b>
            </div>
            <b className="w-[117.5rem] relative text-[1rem] hidden text-text-colors-gray text-center">
              description
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-bg-colors-white flex flex-col items-center justify-start min-h-[31.25rem] text-black">
        <div className="self-stretch flex flex-col items-center justify-start py-[1.25rem] px-[0rem]">
          <div className="w-full flex flex-col items-start justify-start p-[0.625rem] box-border max-w-[81.25rem]">
            <b className="self-stretch relative leading-[2.25rem]">
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content
            </b>
          </div>
        </div>
        <div className="self-stretch bg-colors-gray-300 flex flex-col items-center justify-start py-[1.25rem] px-[0rem]">
          <div className="w-full flex flex-col items-start justify-start p-[0.625rem] box-border max-w-[81.25rem]">
            <b className="self-stretch relative leading-[2.25rem]">
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-[1.25rem] px-[0rem]">
          <div className="w-full flex flex-col items-start justify-start p-[0.625rem] box-border max-w-[81.25rem]">
            <b className="self-stretch relative leading-[2.25rem]">
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-colors-green-300 flex flex-col items-center justify-start min-h-[13.125rem]">
        <Footer1 />
      </div>
    </div>
  );
};

export default SkeletonSubExample;
