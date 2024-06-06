import type { NextPage } from "next";

export type TableMypageFeeDataRowType = {
  className?: string;
  number?: string;
  paymentName?: string;
  price?: string;
  date?: string;
};

const TableMypageFeeDataRow: NextPage<TableMypageFeeDataRowType> = ({
  className = "",
  number,
  paymentName,
  price,
  date,
}) => {
  return (
    <div
      className={`max-w-full overflow-hidden flex flex-col items-start justify-center min-w-[200px] text-center text-sm text-text-title-small font-headings-heading-3 self-stretch hover:bg-bg-light lg:bg-bg-light md:hover:bg-bg-light sm:flex-col ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[20px] border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-col">
        <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[20px] max-w-[300px] md:gap-[8px] sm:flex-[unset] sm:self-stretch">
          <div className="w-10 relative leading-[20px] flex items-center justify-center shrink-0 md:flex sm:hidden mq420:hidden">
            {number}
          </div>
          <div className="flex-1 relative leading-[20px] text-button-colors-dark-sky text-left mq420:text-smi">
            {paymentName}
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start md:flex-row sm:flex-row sm:flex-wrap sm:gap-[16px] sm:items-start sm:justify-start sm:flex-[unset] sm:self-stretch">
          <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
            {price}
          </div>
          <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
            무통장 입금
          </div>
          <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
            {date}
          </div>
          <div className="flex-1 relative leading-[20px] inline-block min-w-[90px] mq420:text-smi">
            결제 대기중
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMypageFeeDataRow;