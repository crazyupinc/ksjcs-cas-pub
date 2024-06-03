import type { NextPage } from "next";

const HeaderLayout: NextPageHeaderLayoutType = () => {
  return (
    <div className="w-full relative bg-bg-colors-light-gray flex flex-col items-start justify-start text-left text-[0.875rem] text-text-colors-normal font-body-text-smaller-text">
      <div className="self-stretch bg-colors-red-50 h-[3.375rem] flex flex-col items-center justify-center py-spacing-4 px-[0.937rem] box-border md:hidden">
        <div className="w-full bg-colors-red-100 h-[1.4rem] flex flex-row items-center justify-end py-[0rem] px-[0.937rem] box-border max-w-[81.25rem]">
          <div className="self-stretch bg-colors-red-200 flex flex-row items-center justify-start">
            <div className="relative leading-[1.25rem]">로그인 | 회원가입</div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-colors-green-50 h-[4.375rem] flex flex-col items-center justify-center">
        <div className="w-full flex-1 bg-colors-green-100 flex flex-row items-center justify-between py-[0rem] px-[0.937rem] box-border max-w-[81.25rem]">
          <div className="self-stretch w-[20.313rem] bg-colors-green-200" />
          <div className="self-stretch flex-1 bg-colors-green-300 md:hidden" />
          <div className="w-[1.5rem] bg-colors-green-400 h-[1.5rem] overflow-hidden shrink-0 hidden min-w-[1.5rem] min-h-[1.5rem] md:flex" />
        </div>
      </div>
      <div className="self-stretch bg-colors-blue-50 flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-spacing-5 md:hidden">
        <div className="w-full bg-colors-blue-100 flex flex-row items-start justify-center py-[0rem] pr-[0.937rem] pl-[21.25rem] box-border max-w-[81.25rem]">
          <div className="flex-1 bg-colors-blue-200 flex flex-row items-start justify-center">
            <div className="flex-1 h-[12.5rem] min-h-[12.5rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
