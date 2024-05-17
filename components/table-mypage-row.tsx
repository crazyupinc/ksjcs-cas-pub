import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TableMypageRowType = {
  title?: string;
  method?: string;

  /** Style props */
  divColor?: CSSProperties["color"];
  divFontWeight?: CSSProperties["fontWeight"];
};

const TableMypageRow: NextPage<TableMypageRowType> = ({
  title,
  method,
  divColor,
  divFontWeight,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
      fontWeight: divFontWeight,
    };
  }, [divColor, divFontWeight]);

  return (
    <div className="max-w-full overflow-hidden flex flex-col items-start justify-center min-w-[200px] text-left text-sm text-text-title-small font-headings-headling-2 self-stretch hover:bg-bg-light sm:flex-col">
      <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
        <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
          <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
            <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
              {title}
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-2 px-0 sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:flex-[unset]">
            <div
              className="flex-1 relative leading-[20px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]"
              style={div1Style}
            >
              {method}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMypageRow;
