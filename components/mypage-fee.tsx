import type { NextPage } from "next";
import TableMypageFeeRow from "./table-mypage-fee-row";
import TableMypageFeeDataRow from "./table-mypage-fee-data-row";

export type MypageFeeType = {
  className?: string;
};

const MypageFee: NextPage<MypageFeeType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full flex flex-col items-center justify-start p-5 box-border text-left text-lg text-text-dark-gray font-body-text-smaller-text ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10 gap-[36px] mq420:pb-5 mq420:box-border">
          <div className="w-full shadow-[8px_10px_16px_rgba(0,_0,_0,_0.05)] [backdrop-filter:blur(12px)] rounded-xl bg-colors-blue-50 overflow-hidden flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border gap-[20px] max-w-[400px]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 sm:pl-4 sm:pr-2 sm:box-border mq420:pl-2.5 mq420:pr-2.5 mq420:box-border">
              <b className="relative mq420:text-sm">사이버커뮤니케이션 학회</b>
              <button className="cursor-pointer [border:none] py-1.5 px-0 bg-[transparent] rounded-md h-7 overflow-hidden flex flex-row items-center justify-center box-border sm:py-2.5 sm:px-4 sm:box-border mq420:py-2.5 mq420:px-4 mq420:box-border">
                <b className="relative text-xs leading-[16px] font-body-text-smaller-text text-bg-primary text-center hover:text-steelblue">
                  학회비 납부
                </b>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon4.svg"
                />
              </button>
            </div>
            <div className="self-stretch bg-bg-primary flex flex-row items-end justify-center p-5 text-sm text-bg-white">
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
          <div className="w-full bg-bg-white flex flex-col items-start justify-start max-w-[1300px]">
            <TableMypageFeeRow />
            <TableMypageFeeDataRow
              number="1"
              paymentName="가입비(준회원) 외 1건"
              price="80,000 원"
              date="2024-04-24"
            />
            <TableMypageFeeDataRow
              number="2"
              paymentName="가입비(준회원)"
              price="50,000 원"
              date="2024-04-24"
            />
            <TableMypageFeeDataRow
              number="3"
              paymentName="연회비(준회원)"
              price="80,000 원"
              date="2024-04-24"
            />
            <TableMypageFeeDataRow
              number="4"
              paymentName="연회비(정회원) 외 1건"
              price="80,000 원"
              date="2024-04-24"
            />
            <TableMypageFeeDataRow
              number="5"
              paymentName="가입비(정회원)"
              price="50,000 원"
              date="2024-04-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageFee;
