import type { NextPage } from "next";
import BbsContentInfo from "./bbs-content-info";

const BbsGalleryDetail: NextPage = () => {
  return (
    <div className="w-[1920px] bg-bg-colors-white max-w-full flex flex-col items-start justify-start p-5 box-border text-left text-5xl text-text-title-small font-headings-headling-2">
      <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10">
        <div className="w-full h-[722px] flex flex-col items-end justify-center gap-[8px] max-w-[1300px]">
          <div className="self-stretch overflow-hidden flex flex-col items-end justify-center py-1.5 px-0 gap-[8px] border-b-[1px] border-solid border-bg-light-border">
            <div className="self-stretch relative leading-[32px] overflow-hidden text-ellipsis whitespace-nowrap">{`2024 봄철 정기학술대회 특별기획세션 `}</div>
            <BbsContentInfo />
          </div>
          <div className="self-stretch bg-bg-light-border h-[634px]" />
        </div>
        <div className="w-full flex flex-col items-start justify-center py-5 px-0 box-border max-w-[1300px] text-center text-sm text-text-gray">
          <div className="self-stretch flex flex-row items-center justify-start border-t-[1px] border-solid border-colors-cyan-950">
            <div className="self-stretch w-[60px] bg-bg-light-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-0 box-border mq420:w-[50px]">
              <img
                className="w-6 relative h-6"
                alt=""
                src="/iconchevronupwhite.svg"
              />
            </div>
            <div className="flex-1 box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light mq420:pl-2 mq420:box-border mq420:min-w-[200px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  819
                </div>
                <div className="flex-1 relative leading-[24px] text-button-colors-dark-sky text-left overflow-hidden text-ellipsis whitespace-nowrap">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(`}</div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 text-text-text-small sm:hidden sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-[120px] flex flex-row items-center justify-center sm:w-auto sm:[align-self:unset]">
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="self-stretch w-[60px] bg-bg-light-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-0 box-border mq420:w-[50px]">
              <img
                className="w-6 relative h-6"
                alt=""
                src="/iconchevrondownwhite.svg"
              />
            </div>
            <div className="flex-1 box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light mq420:pl-2 mq420:box-border mq420:min-w-[200px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  817
                </div>
                <div className="flex-1 relative leading-[24px] text-button-colors-dark-sky text-left overflow-hidden text-ellipsis whitespace-nowrap">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(`}</div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 text-text-text-small sm:hidden sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-[120px] flex flex-row items-center justify-center sm:w-auto sm:[align-self:unset]">
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2 px-7 bg-text-gray rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue sm:py-2.5 sm:px-4 sm:box-border mq420:py-2.5 mq420:px-4 mq420:box-border">
          <div className="relative text-sm leading-[20px] font-headings-headling-2 text-bg-colors-white text-center">
            목록
          </div>
        </button>
      </div>
    </div>
  );
};

export default BbsGalleryDetail;
