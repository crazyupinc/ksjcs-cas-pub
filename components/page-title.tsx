import type { NextPage } from "next";

const PageTitle: NextPage = () => {
  return (
    <div className="w-[1920px] bg-bg-colors-white max-w-full h-[180px] flex flex-col items-center justify-center py-[50px] px-5 box-border text-left text-11xl text-text-colors-normal font-headings-heading-4">
      <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
        <div className="flex flex-row items-start justify-center py-0 pr-[23px] pl-0 gap-[6px]">
          <img
            className="w-[23px] relative h-[22px] object-cover"
            alt=""
            src="/logo@2x.png"
          />
          <b className="w-[113px] relative leading-[36px] flex items-end h-10 shrink-0 sm:text-5xl">
            회원가입
          </b>
        </div>
        <b className="w-[1880px] relative text-base hidden text-text-colors-gray text-center">
          description
        </b>
      </div>
    </div>
  );
};

export default PageTitle;
