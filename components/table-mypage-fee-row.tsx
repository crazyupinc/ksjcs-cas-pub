import type { NextPage } from "next";

export type TableMypageFeeRowType = {
  className?: string;
};

const TableMypageFeeRow: NextPage<TableMypageFeeRowType> = ({
  className = "",
}) => {
  return (
    <div
      className={`max-w-full overflow-hidden flex flex-col items-center justify-center min-w-[300px] text-center text-sm text-text-title-small font-body-text-smaller-text self-stretch sm:flex ${className}`}
    >
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
  );
};

export default TableMypageFeeRow;
