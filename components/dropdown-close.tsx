import type { NextPage } from "next";

const DropdownClose: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start text-left text-base text-text-colors-gray font-body-text-normal-text self-stretch flex-1">
      <div className="self-stretch bg-bg-colors-white box-border h-[50.7px] flex flex-row items-center justify-start p-3.5 gap-[14px] border-[0.7px] border-solid border-slate-300">
        <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
          드롭다운 메뉴
        </div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/icondown.svg"
        />
      </div>
    </div>
  );
};

export default DropdownClose;
