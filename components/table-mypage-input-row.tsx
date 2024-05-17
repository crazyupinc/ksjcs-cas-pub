import type { NextPage } from "next";

const TableMypageInputRow: NextPage = () => {
  return (
    <div className="w-[900px] max-w-full overflow-hidden flex flex-col items-start justify-center min-w-[200px] text-left text-sm text-text-title-small font-headings-headling-2 hover:bg-bg-light lg:bg-bg-colors-white sm:flex-col">
      <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
        <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[140px] md:gap-[100px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
          <div className="flex flex-row items-center justify-start py-2 px-4 sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center">
            <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
              본인 확인용 비밀번호
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start text-base text-dark-gray sm:flex-[unset] sm:self-stretch mq420:min-w-[100px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[340px] relative leading-[24px] hidden">
                Email
              </div>
              <div className="self-stretch rounded-default-border-raius bg-bg-colors-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border mq420:p-1.5 mq420:box-border">
                <img
                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon5.svg"
                />
                <input
                  className="[border:none] [outline:none] font-headings-headling-2 text-sm bg-[transparent] flex-1 relative leading-[20px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                  placeholder="비밀번호를 입력하세요."
                  type="password"
                />
              </div>
              <div className="w-[340px] relative leading-[24px] text-gray hidden mq420:text-2xs">
                송금일자를 정확히 입력해주시기 바랍니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMypageInputRow;
