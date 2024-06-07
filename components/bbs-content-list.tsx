import type { NextPage } from "next";
import TableBbsHeaderRow from "./table-bbs-header-row";
import TableBbsDataRow from "./table-bbs-data-row";
import Pagination from "./pagination";

export type BbsContentListType = {
  className?: string;
};

const BbsContentList: NextPage<BbsContentListType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full flex flex-col items-start justify-start p-5 box-border text-left text-base text-dark-gray font-headings-heading-3 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10">
        <div className="w-full flex flex-col items-end justify-center gap-[26px] max-w-[1300px]">
          <div className="w-80 flex flex-col items-start justify-start max-w-[320px] mq420:max-w-[320%]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[340px] relative leading-[24px] hidden">
                Email
              </div>
              <div className="self-stretch rounded-default-border-raius bg-bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border sm:pt-1.5 sm:pb-1.5 sm:box-border">
                <img
                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/iconsearch.svg"
                />
                <input
                  className="[border:none] [outline:none] font-headings-heading-3 text-base bg-[transparent] flex-1 relative leading-[24px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap sm:text-smi"
                  placeholder="검색어를 입력해주세요."
                  type="text"
                />
              </div>
              <div className="w-[340px] relative leading-[24px] text-gray hidden">
                This is a hint text for the user
              </div>
            </div>
          </div>
          <div className="self-stretch bg-bg-white flex flex-col items-center justify-start text-center text-sm text-text-gray">
            <TableBbsHeaderRow />
            <TableBbsDataRow
              prop="820"
              prop1={`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): `}
              funnelFlex="1"
            />
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  819
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 `}</div>
                  <div className="flex flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">3</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  818
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 Ⅳ `}</div>
                  <div className="flex flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  817
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니`}</div>
                  <div className="flex flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  816
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel`}</div>
                  <div className="flex flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  815
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결`}</div>
                  <div className="flex flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  814
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): `}</div>
                  <div className="hidden flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  813
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 `}</div>
                  <div className="hidden flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  812
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): `}</div>
                  <div className="hidden flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  811
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운`}</div>
                  <div className="hidden flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  810
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): `}</div>
                  <div className="hidden flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  809
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구`}</div>
                  <div className="hidden flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  808
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="relative leading-[20px]">
                    2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내
                  </div>
                  <div className="flex flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  807
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="flex-1 relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새로운 마케팅 새로운 마케팅 커뮤니케이션 패러다임의 도래> 2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로(Funnel): 새`}</div>
                  <div className="hidden flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px]">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
                  806
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-button-colors-dark-sky">
                  <div className="relative leading-[20px]">{`2024 봄철 정기학술대회 특별기획세션 발제자 선정 결과 안내 <무너진 구매 경로>`}</div>
                  <div className="flex flex-col items-start justify-start py-0.5 px-0 text-xs text-bg-white">
                    <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#0369a1] flex flex-row items-center justify-start py-0 pr-0.5 pl-1">
                      <img
                        className="w-3 relative h-3"
                        alt=""
                        src="/iconfiletextwhite.svg"
                      />
                      <div className="relative leading-[16px]">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-1 px-0 gap-[20px] text-text-text-small sm:gap-[20px] sm:pt-0 sm:pb-0 sm:box-border">
                <div className="w-20 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconuser.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    관리자
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconcalendar.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">
                    2024.04.15
                  </div>
                </div>
                <div className="w-10 flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
                    alt=""
                    src="/iconeye.svg"
                  />
                  <div className="relative leading-[20px] sm:text-left">89</div>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default BbsContentList;
