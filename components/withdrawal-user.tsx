import type { NextPage } from "next";
import TableMypageRow from "./table-mypage-row";

export type WithdrawalUserType = {
  className?: string;
};

const WithdrawalUser: NextPage<WithdrawalUserType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1456px] max-w-full flex flex-col items-start justify-start min-w-[500px] text-left text-sm text-text-title-small font-headings-headling-2 ${className}`}
    >
      <div className="self-stretch rounded bg-bg-colors-white flex flex-col items-start justify-start p-4 border-[1px] border-solid border-gray1">
        <TableMypageRow title="이름(실명)" method="민지이" />
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
          <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
            <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
              <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
                <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                  아이디
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start py-2 px-0 sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:flex-[unset]">
                <div className="flex-1 relative leading-[20px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                  jiminyee
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
          <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
            <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
              <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
                <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                  이메일
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start py-2 px-0 sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:flex-[unset]">
                <div className="flex-1 relative leading-[20px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                  jiminyee@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
          <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
            <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
              <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
                <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                  휴대폰
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start py-2 px-0 sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:flex-[unset]">
                <div className="flex-1 relative leading-[20px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                  010-8707-1111
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
          <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
            <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
              <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
                <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                  탈퇴 사유
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start py-2 px-0 sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:flex-[unset]">
                <div className="flex-1 relative leading-[20px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                  학회 사이트 이용빈도가 낮아서
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
          <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
            <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
              <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
                <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                  탈퇴 날짜
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start py-2 px-0 sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:flex-[unset]">
                <div className="flex-1 relative leading-[20px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                  2024.06.14
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalUser;
