import type { NextPage } from "next";

const MypageFee: NextPage = () => {
  return (
    <div className="w-[1920px] bg-bg-colors-white max-w-full flex flex-col items-center justify-start p-5 box-border text-left text-lg text-text-dark-gray font-headings-headling-2">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10 gap-[36px] mq420:pb-5 mq420:box-border">
          <div className="w-full shadow-[8px_10px_16px_rgba(0,_0,_0,_0.05)] [backdrop-filter:blur(12px)] rounded-xl bg-colors-blue-50 overflow-hidden flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border gap-[20px] max-w-[400px]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 sm:pl-4 sm:pr-2 sm:box-border mq420:pl-2.5 mq420:pr-2.5 mq420:box-border">
              <b className="relative mq420:text-sm">사이버커뮤니케이션 학회</b>
              <button className="cursor-pointer [border:none] py-1.5 px-0 bg-[transparent] rounded-md h-7 overflow-hidden flex flex-row items-center justify-center box-border hover:bg-royalblue sm:py-2.5 sm:px-4 sm:box-border mq420:py-2.5 mq420:px-4 mq420:box-border">
                <b className="relative text-xs leading-[16px] font-headings-headling-2 text-button-colors-dark-sky text-center">
                  학회비 납부
                </b>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon4.svg"
                />
              </button>
            </div>
            <div className="self-stretch bg-button-colors-dark-sky flex flex-row items-end justify-center p-5 text-sm text-bg-colors-white">
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                  <b className="relative leading-[20px] mq420:text-smi">
                    회원명:
                  </b>
                  <b className="flex-1 relative leading-[20px] mq420:text-smi">
                    민지이
                  </b>
                  <b className="relative leading-[20px] mq420:text-smi">
                    회원등급: 인터넷회원
                  </b>
                </div>
                <b className="relative leading-[20px] mq420:text-smi">
                  회원가입일: 2024-04-24
                </b>
                <b className="relative leading-[20px] mq420:text-smi">
                  현재 등급 취득일: 2024-04-24
                </b>
                <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="flex flex-row flex-wrap items-start justify-start">
                      <b className="relative leading-[20px] mq420:text-smi">
                        등급 유지기간:
                      </b>
                      <b className="relative leading-[20px] mq420:text-smi">
                        2024-04-24~2025-04-24
                      </b>
                    </div>
                  </div>
                  <div className="rounded bg-bg-light flex flex-col items-center justify-center py-[3px] px-[9px]">
                    <img
                      className="w-[26px] relative h-[25px] object-cover"
                      alt=""
                      src="/cardlogo@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-bg-colors-white flex flex-col items-start justify-start max-w-[1300px] text-center text-sm text-text-title-small">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center min-w-[300px] sm:flex">
              <div className="w-[1301.5px] relative box-border h-[1.5px] hidden border-t-[1.5px] border-solid border-colors-cyan-950 sm:flex mq420:flex" />
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[20px] border-t-[1.5px] border-solid border-colors-cyan-950 border-b-[1px] sm:hidden">
                <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[20px] max-w-[300px] md:gap-[8px]">
                  <b className="w-10 relative leading-[20px] flex items-center justify-center shrink-0 md:flex mq420:hidden">
                    순번
                  </b>
                  <b className="flex-1 relative leading-[20px]">납부명</b>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start">
                  <b className="flex-1 relative leading-[20px] inline-block min-w-[90px]">
                    납부 금액
                  </b>
                  <b className="flex-1 relative leading-[20px] inline-block min-w-[90px]">
                    결제 수단
                  </b>
                  <b className="flex-1 relative leading-[20px] inline-block min-w-[90px]">
                    신청 일시
                  </b>
                  <b className="flex-1 relative leading-[20px] inline-block min-w-[90px]">
                    납부상태
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-light md:hover:bg-bg-light sm:flex-col">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[20px] border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-col">
                <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[20px] max-w-[300px] md:gap-[8px] sm:flex-[unset] sm:self-stretch">
                  <div className="w-10 relative leading-[20px] flex items-center justify-center shrink-0 md:flex sm:hidden mq420:hidden">
                    1
                  </div>
                  <div className="flex-1 relative leading-[20px] text-button-colors-dark-sky text-left mq420:text-smi">
                    가입비(준회원) 외 1건
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start md:flex-row sm:flex-row sm:flex-wrap sm:gap-[16px] sm:items-start sm:justify-start sm:flex-[unset] sm:self-stretch">
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    80,000 원
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    무통장 입금
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    2024-04-24
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    결제 대기중
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-light md:hover:bg-bg-light sm:flex-col">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[20px] border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-col">
                <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[20px] max-w-[300px] md:gap-[8px] sm:flex-[unset] sm:self-stretch">
                  <div className="w-10 relative leading-[20px] flex items-center justify-center shrink-0 md:flex sm:hidden mq420:hidden">
                    2
                  </div>
                  <div className="flex-1 relative leading-[20px] text-button-colors-dark-sky text-left mq420:text-smi">
                    가입비(준회원)
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start md:flex-row sm:flex-row sm:flex-wrap sm:gap-[16px] sm:items-start sm:justify-start sm:flex-[unset] sm:self-stretch">
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    50,000 원
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    무통장 입금
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    2024-04-24
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    결제 대기중
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-light md:hover:bg-bg-light sm:flex-col">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[20px] border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-col">
                <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[20px] max-w-[300px] md:gap-[8px] sm:flex-[unset] sm:self-stretch">
                  <div className="w-10 relative leading-[20px] flex items-center justify-center shrink-0 md:flex sm:hidden mq420:hidden">
                    3
                  </div>
                  <div className="flex-1 relative leading-[20px] text-button-colors-dark-sky text-left mq420:text-smi">
                    연회비(준회원)
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start md:flex-row sm:flex-row sm:flex-wrap sm:gap-[16px] sm:items-start sm:justify-start sm:flex-[unset] sm:self-stretch">
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    80,000 원
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    무통장 입금
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    2024-04-24
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    결제 대기중
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-light md:hover:bg-bg-light sm:flex-col">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[20px] border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-col">
                <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[20px] max-w-[300px] md:gap-[8px] sm:flex-[unset] sm:self-stretch">
                  <div className="w-10 relative leading-[20px] flex items-center justify-center shrink-0 md:flex sm:hidden mq420:hidden">
                    4
                  </div>
                  <div className="flex-1 relative leading-[20px] text-button-colors-dark-sky text-left mq420:text-smi">
                    연회비(정회원) 외 1건
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start md:flex-row sm:flex-row sm:flex-wrap sm:gap-[16px] sm:items-start sm:justify-start sm:flex-[unset] sm:self-stretch">
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    80,000 원
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    무통장 입금
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    2024-04-24
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    결제 대기중
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-light md:hover:bg-bg-light sm:flex-col">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[20px] border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-col">
                <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[20px] max-w-[300px] md:gap-[8px] sm:flex-[unset] sm:self-stretch">
                  <div className="w-10 relative leading-[20px] flex items-center justify-center shrink-0 md:flex sm:hidden mq420:hidden">
                    5
                  </div>
                  <div className="flex-1 relative leading-[20px] text-button-colors-dark-sky text-left mq420:text-smi">
                    가입비(정회원)
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start md:flex-row sm:flex-row sm:flex-wrap sm:gap-[16px] sm:items-start sm:justify-start sm:flex-[unset] sm:self-stretch">
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    50,000 원
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    무통장 입금
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    2024-04-24
                  </div>
                  <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
                    결제 대기중
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageFee;
