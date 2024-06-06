import type { NextPage } from "next";

export type MainContentType = {
  className?: string;
};

const MainContent: NextPage<MainContentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-bg-white max-w-full flex flex-col items-center justify-start py-[110px] px-5 box-border gap-[36px] text-center text-base text-text-hint-text font-headings-heading-3 sm:pl-0 sm:pr-0 sm:box-border mq420:pl-0 mq420:pr-0 mq420:box-border ${className}`}
    >
      <div className="w-full bg-bg-white overflow-hidden flex flex-col items-center justify-start gap-[46px] max-w-[1300px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
          <b className="w-[1300px] relative leading-[24px] hidden mq420:text-2xs">
            CYBERCOMMUNICATION ACADEMIC SOCIETY
          </b>
          <b className="self-stretch relative text-17xl leading-[40px] text-text-colors-gray sm:text-7xl mq420:text-5xl">
            학회 갤러리
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[22px] text-left text-text-text-small-light md:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start md:flex-[unset] md:self-stretch">
            <div className="self-stretch rounded bg-bg-light overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px] sm:pl-5 sm:box-border mq420:p-5 mq420:box-border">
              <img
                className="self-stretch relative rounded-10xs max-w-full overflow-hidden h-[403px] shrink-0 object-cover sm:w-[100%!important] sm:h-[auto!important]"
                alt=""
                src="/img2@2x.png"
              />
              <div className="self-stretch h-[90px] flex flex-col items-start justify-start gap-[6px]">
                <b className="self-stretch relative leading-[24px] mq420:text-sm">
                  2024 봄철 정기학술대회 사진모음
                </b>
                <div className="self-stretch relative text-sm leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq420:text-xs">
                  3줄 이상의 컨텐츠 -2024 봄철 정기학술대회를 진행하였습니다.
                  2024 봄철 정기학술대회를 진행하였습니다. 2024 봄철
                  정기학술대회를 진행하였습니다. 2024 봄철 정기학술대회를
                  진행하였습니다. 2024 봄철 정기학술대회를 진행하였습니다.2024
                  봄철 정기학술대회를 진행하였습니다.2024 봄철 정기학술대회를
                  진행하였습니다.2024 봄철 정기학술대회...
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[20px] md:flex-[unset] md:self-stretch mq420:gap-[8px]">
            <div className="self-stretch rounded bg-bg-light h-[171px] overflow-hidden shrink-0 flex flex-row items-start justify-center p-5 box-border gap-[22px] mq420:gap-[16px] mq420:p-5 mq420:box-border">
              <img
                className="self-stretch flex-1 relative rounded-10xs max-w-[240px] overflow-hidden max-h-full object-cover sm:w-[100%!important] sm:h-[auto!important]"
                alt=""
                src="/img11@2x.png"
              />
              <div className="flex-1 h-[131px] overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                <b className="self-stretch relative leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0 mq420:text-smi">
                  2024 봄철 정기학술대회 사진모음
                </b>
                <div className="self-stretch relative text-sm leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq420:text-xs">
                  3줄 이상의 컨텐츠 -2024 봄철 정기학술대회를 진행하였습니다.
                  2024 봄철 정기학술대회를 진행하였습니다. 2024 봄철
                  정기학술대회를 진행하였습니다. 2024 봄철 정기학술대회를
                  진행하였습니다.2024 봄철 정기학술대회를 진행하였습니다. 2024
                  봄철 정. 2024 봄철 정기학기. 2024 봄철 정기학. 2024 봄철
                  정기학학술대회...
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-bg-light h-[171px] overflow-hidden shrink-0 flex flex-row items-start justify-center p-5 box-border gap-[22px] mq420:gap-[16px] mq420:p-5 mq420:box-border">
              <img
                className="self-stretch flex-1 relative rounded-10xs max-w-[240px] overflow-hidden max-h-full object-cover sm:w-[100%!important] sm:h-[auto!important]"
                alt=""
                src="/img11@2x.png"
              />
              <div className="flex-1 h-[131px] overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                <b className="self-stretch relative leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0 mq420:text-smi">
                  2024 봄철 정기학술대회 사진모음
                </b>
                <div className="self-stretch relative text-sm leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq420:text-xs">
                  3줄 이상의 컨텐츠 -2024 봄철 정기학술대회를 진행하였습니다.
                  2024 봄철 정기학술대회를 진행하였습니다. 2024 봄철
                  정기학술대회를 진행하였습니다. 2024 봄철 정기학술대회를
                  진행하였습니다.2024 봄철 정기학술대회를 진행하였습니다. 2024
                  봄철 정. 2024 봄철 정기학기. 2024 봄철 정기학. 2024 봄철
                  정기학학술대회...
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-bg-light h-[171px] overflow-hidden shrink-0 flex flex-row items-start justify-center p-5 box-border gap-[22px] sm:pl-[22px] sm:box-border mq420:gap-[16px] mq420:p-5 mq420:box-border">
              <img
                className="self-stretch flex-1 relative rounded-10xs max-w-[240px] overflow-hidden max-h-full object-cover sm:w-[100%!important] sm:h-[auto!important]"
                alt=""
                src="/img11@2x.png"
              />
              <div className="flex-1 h-[131px] overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                <b className="self-stretch relative leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0 mq420:text-smi">
                  2024 봄철 정기학술대회 사진모음
                </b>
                <div className="self-stretch relative text-sm leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq420:text-xs">
                  3줄 이상의 컨텐츠 -2024 봄철 정기학술대회를 진행하였습니다.
                  2024 봄철 정기학술대회를 진행하였습니다. 2024 봄철
                  정기학술대회를 진행하였습니다. 2024 봄철 정기학술대회를
                  진행하였습니다.2024 봄철 정기학술대회를 진행하였습니다. 2024
                  봄철 정. 2024 봄철 정기학기. 2024 봄철 정기학. 2024 봄철
                  정기학학술대회...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer py-1.5 px-4 bg-[transparent] rounded-xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-button-colors-dark-sky hover:bg-gainsboro-100">
        <div className="relative text-xs leading-[16px] font-headings-heading-3 text-button-colors-dark-sky text-center mq420:text-2xs">
          더보기
        </div>
      </button>
    </div>
  );
};

export default MainContent;