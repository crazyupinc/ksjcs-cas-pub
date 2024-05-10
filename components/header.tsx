import type { NextPage } from "next";
import ItemMenuMain from "./item-menu-main";
import ItemMenuSub from "./item-menu-sub";

const Header: NextPage = () => {
  return (
    <div className="w-[1920px] bg-bg-colors-light-gray max-w-full flex flex-col items-start justify-start">
      <div className="self-stretch h-[54px] flex flex-col items-center justify-center py-spacing-4 px-[15px] box-border md:hidden">
        <div className="w-full h-[22.4px] flex flex-row items-center justify-end py-0 px-[15px] box-border max-w-[1300px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[4px]">
              <img
                className="w-3.5 relative h-3.5"
                alt="icon-login"
                src="/iconlogin.svg"
              />
              <div className="w-[44.6px] relative text-sm leading-[20px] font-headings-heading-4 text-text-colors-normal text-left flex items-center h-[22.4px] shrink-0 hover:text-button-colors-dark-sky">
                {" "}
                로그인
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[4px]">
              <img
                className="w-[17.5px] relative h-3.5"
                alt="icon-register"
                src="/iconregister.svg"
              />
              <div className="w-[58px] relative text-sm leading-[20px] font-headings-heading-4 text-text-colors-normal text-left flex items-center h-[22.4px] shrink-0 hover:text-button-colors-dark-sky">
                {" "}
                회원가입
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[70px] flex flex-col items-center justify-center">
        <div className="w-full flex-1 flex flex-row items-start justify-between py-0 px-[15px] box-border max-w-[1300px]">
          <div className="w-[325px] flex flex-row items-center justify-start">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-center">
              <img
                className="w-[138px] relative h-10 object-cover mq420:w-[103px] mq420:h-[30px]"
                alt="CyberComLogo"
                loading="eager"
                src="/navbarbrand@2x.png"
              />
            </button>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-between md:hidden">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start">
              <ItemMenuMain title="학회 소개" />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start">
              <ItemMenuMain title="학회 소식" />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start">
              <ItemMenuMain title="학술지" />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start">
              <ItemMenuMain title="게시판" />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start">
              <ItemMenuMain title="회원 공간" />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start">
              <ItemMenuMain title="자료실" />
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center md:flex">
            <img
              className="w-6 relative h-6"
              alt="icon hamburger"
              src="/iconhamburger.svg"
            />
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-spacing-5 md:hidden">
        <div className="w-full flex flex-row items-start justify-center py-0 pr-[15px] pl-[340px] box-border max-w-[1300px]">
          <div className="flex-1 flex flex-row items-start justify-between">
            <div className="flex-1 flex flex-col items-center justify-start">
              <ItemMenuSub title="회장인사말" />
              <ItemMenuSub title="학회정관" />
              <ItemMenuSub title="선거관리규정" />
              <ItemMenuSub title="학회연혁" />
              <ItemMenuSub title="임원진" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-start">
              <ItemMenuSub title="공지사항" />
              <ItemMenuSub title="주요행사" />
              <ItemMenuSub title="공모안내" />
              <ItemMenuSub title="학회앨범" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-start">
              <ItemMenuSub title="논문검색" />
              <ItemMenuSub title="온라인 논문 투고" />
              <ItemMenuSub title="편집위원회" />
              <ItemMenuSub title="학술지규정" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-start">
              <ItemMenuSub title="회원동정" />
              <ItemMenuSub title="채용정보" />
              <ItemMenuSub title="외부공모 및 행사안내" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-start">
              <ItemMenuSub title="회원가입안내" />
              <ItemMenuSub title="회원가입" />
              <ItemMenuSub title="연회비 납부현황" />
              <ItemMenuSub title="증명서 발급 안내" />
              <ItemMenuSub title="개인정보보호정책" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-start">
              <ItemMenuSub title="학술대회 자료집" />
              <ItemMenuSub title="세미나 자료집" />
              <ItemMenuSub title="영상 자료실" />
              <ItemMenuSub title="사진 자료실" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
