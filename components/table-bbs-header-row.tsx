import type { NextPage } from "next";

const TableBbsHeaderRow: NextPage = () => {
  return (
    <div className="max-w-full overflow-hidden flex flex-col items-start justify-center min-w-[300px] text-center text-sm text-text-title-small font-headings-headling-2 self-stretch">
      <div className="w-[1301.5px] relative box-border h-[1.5px] hidden border-t-[1.5px] border-solid border-colors-cyan-950 sm:flex mq420:flex" />
      <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[20px] border-t-[1.5px] border-solid border-colors-cyan-950 border-b-[1px] sm:hidden">
        <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[20px]">
          <b className="w-10 relative leading-[20px] flex items-center justify-center shrink-0">
            순번
          </b>
          <b className="flex-1 relative leading-[20px]">제목</b>
        </div>
        <div className="h-6 flex flex-row items-center justify-start gap-[20px]">
          <b className="h-5 w-20 relative leading-[20px] flex items-center justify-center shrink-0 max-w-[80px]">
            작성자
          </b>
          <b className="w-[100px] relative leading-[20px] flex items-center justify-center shrink-0 max-w-[100px]">
            등록일
          </b>
          <b className="w-10 relative leading-[20px] flex items-center justify-center shrink-0 max-w-[40px]">
            조회수
          </b>
        </div>
      </div>
    </div>
  );
};

export default TableBbsHeaderRow;
