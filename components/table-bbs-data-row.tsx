import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TableBbsDataRowType = {
  className?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  funnelFlex?: CSSProperties["flex"];
};

const TableBbsDataRow: NextPage<TableBbsDataRowType> = ({
  className = "",
  prop,
  prop1,
  funnelFlex,
}) => {
  const funnelStyle: CSSProperties = useMemo(() => {
    return {
      flex: funnelFlex,
    };
  }, [funnelFlex]);

  return (
    <div
      className={`box-border max-w-full overflow-hidden flex flex-row items-center justify-start py-3 px-5 gap-[20px] min-w-[320px] text-center text-sm text-text-gray font-body-text-smaller-text self-stretch border-b-[1px] border-solid border-bg-light-border hover:bg-bg-light sm:flex-col sm:gap-[8px] sm:items-start sm:justify-center mq420:min-w-[300px] ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] sm:pt-0 sm:pb-0 sm:box-border sm:flex-[unset] sm:self-stretch">
        <div className="self-stretch w-10 relative leading-[20px] flex items-center justify-center shrink-0 min-w-[40px] sm:hidden">
          {prop}
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-bg-primary">
          <div className="flex-1 relative leading-[20px]" style={funnelStyle}>
            {prop1}
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
          <div className="relative leading-[20px] sm:text-left">관리자</div>
        </div>
        <div className="w-[100px] flex flex-row items-center justify-center gap-[4px] sm:w-auto sm:[align-self:unset]">
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 hidden sm:flex"
            alt=""
            src="/iconcalendar.svg"
          />
          <div className="relative leading-[20px] sm:text-left">2024.04.15</div>
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
  );
};

export default TableBbsDataRow;
