import type { NextPage } from "next";
import { useEffect } from "react";

const SkeletonSubExample: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="w-full relative flex flex-col items-start justify-start text-center text-[1.875rem] text-bg-colors-white font-headings-heading-4">
      <div className="self-stretch bg-colors-red-300 h-[7.75rem] flex flex-col items-center justify-start md:h-[4.375rem]">
        <div className="self-stretch bg-bg-colors-light-gray flex flex-col items-start justify-start">
          <div className="self-stretch h-[3.375rem] flex flex-col items-center justify-center py-spacing-4 px-[0.937rem] box-border md:hidden">
            <div className="w-full h-[1.4rem] flex flex-row items-center justify-end py-[0rem] px-[0.937rem] box-border max-w-[81.25rem]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[0.25rem]">
                  <img
                    className="w-[0.875rem] relative h-[0.875rem]"
                    alt="icon-login"
                    src="/iconlogin.svg"
                  />
                  <div className="w-[2.788rem] relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-left flex items-center h-[1.4rem] shrink-0 hover:text-button-colors-dark-sky">
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
                  <div className="w-[3.625rem] relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-left flex items-center h-[1.4rem] shrink-0 hover:text-button-colors-dark-sky">
                    {" "}
                    회원가입
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[4.375rem] flex flex-col items-center justify-center">
            <div className="w-full flex-1 flex flex-row items-center justify-between py-[0rem] px-[0.937rem] box-border max-w-[81.25rem]">
              <div className="w-[20.313rem] flex flex-row items-center justify-start">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-center">
                  <img
                    className="w-[8.625rem] relative h-[2.5rem] object-cover mq420:w-[6.438rem] mq420:h-[1.875rem]"
                    alt="CyberComLogo"
                    loading="eager"
                    src="/navbarbrand@2x.png"
                  />
                </button>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-between md:hidden">
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-6 px-spacing-0-5 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-center">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회 소개
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-6 px-spacing-0-5 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-center">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회 소식
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-6 px-spacing-0-5 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-center">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학술지
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-6 px-spacing-0-5 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-center">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      게시판
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-6 px-spacing-0-5 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-center">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회원 공간
                    </b>
                  </button>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-6 px-spacing-0-5 bg-[transparent] self-stretch flex-1 flex flex-col items-center justify-center">
                    <b className="self-stretch relative text-[1.125rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
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
          <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-spacing-5 md:hidden">
            <div className="w-full flex flex-row items-start justify-center py-[0rem] pr-[0.937rem] pl-[21.25rem] box-border max-w-[81.25rem]">
              <div className="flex-1 flex flex-row items-start justify-between">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회장인사말
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회정관
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      선거관리규정
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회연혁
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      임원진
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      공지사항
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      주요행사
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      공모안내
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학회앨범
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      논문검색
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      온라인 논문 투고
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      편집위원회
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학술지규정
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회원동정
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      채용정보
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      외부공모 및 행사안내
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회원가입안내
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      회원가입
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      연회비 납부현황
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      증명서 발급 안내
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      개인정보보호정책
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      학술대회 자료집
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      세미나 자료집
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      영상 자료실
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-spacing-2-5 px-spacing-0-5 bg-[transparent] self-stretch flex flex-col items-center justify-center">
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-headings-heading-4 text-text-colors-normal text-center hover:text-button-colors-dark-sky">
                      사진 자료실
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-colors-blue-300 h-[13.75rem] flex flex-col items-center justify-start text-[3rem] sm:h-[10.625rem]">
        <div className="self-stretch flex-1 flex flex-col items-center justify-end bg-[url('/subbanner1@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-normal">
          <div className="self-stretch flex-1 flex flex-col items-center justify-center py-[0rem] px-[1.25rem]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[0.25rem]">
              <h1
                className="m-0 self-stretch h-[3rem] relative text-inherit leading-[3rem] font-bold font-inherit inline-block [&.animate]:animate-[0.3s_ease-in_0s_1_normal_forwards_fade-in-left] opacity-[0] sm:text-[2.25rem] sm:leading-[2.25rem]"
                data-animate-on-scroll
              >
                학회 소개
              </h1>
              <div
                className="self-stretch h-[1rem] relative text-[1rem] inline-block [&.animate]:animate-[0.2s_ease-in_0.5s_1_normal_forwards_fade-in] opacity-[0] sm:text-[0.75rem]"
                data-animate-on-scroll
              >
                Cybercommunication Academic Society
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-[0rem] px-[1rem] text-left text-[1rem] text-text-colors-gray">
            <div className="w-[40rem] flex flex-row flex-wrap items-start justify-center max-w-[40rem]">
              <div className="flex-1 h-[3.125rem] flex flex-col items-center justify-end min-w-[18.563rem] max-w-[25rem] sm:hidden">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-bg-colors-white box-border h-[3.169rem] flex flex-row items-center justify-start p-[0.875rem] gap-[0.875rem] border-[0.7px] border-solid border-colors-slate-300">
                    <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                      학회 소개
                    </div>
                    <img
                      className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icondown.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[3.125rem] flex flex-col items-center justify-end min-w-[18.563rem] max-w-[25rem]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-bg-colors-white box-border h-[3.169rem] flex flex-row items-center justify-start p-[0.875rem] gap-[0.875rem] border-[0.7px] border-solid border-colors-slate-300">
                    <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                      회장인사말
                    </div>
                    <img
                      className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icondown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-colors-indigo-300 h-[11.25rem] flex flex-col items-center justify-start text-left text-text-colors-normal sm:h-[7.5rem]">
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
      <div className="self-stretch bg-bg-colors-white flex flex-col items-center justify-start min-h-[31.25rem] text-left text-black">
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
      <div className="self-stretch bg-colors-green-300 flex flex-col items-center justify-start min-h-[13.125rem] text-[2.25rem] text-text-colors-amber">
        <div className="self-stretch bg-text-colors-normal flex flex-col items-center justify-start p-[0.625rem]">
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[0.625rem] max-w-[81.25rem]">
            <b className="relative leading-[2.5rem]">TODO: FOOTER</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
            <b className="relative leading-[2.5rem]">Footer Item1</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSubExample;
