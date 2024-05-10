import type { NextPage } from "next";

const SkeletonMain: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start">
      <div className="self-stretch bg-colors-red-300 h-[7.75rem] md:h-[4.375rem]" />
      <div className="self-stretch bg-colors-blue-300 h-[37.5rem] sm:h-[25rem]" />
      <div className="self-stretch bg-colors-cyan-950 h-[12.5rem] min-h-[12.5rem]" />
      <div className="self-stretch bg-bg-colors-white h-[31.25rem] min-h-[31.25rem]" />
      <div className="self-stretch bg-colors-gray-300 h-[31.25rem] min-h-[31.25rem]" />
      <div className="self-stretch bg-bg-colors-white h-[31.25rem] min-h-[31.25rem]" />
      <div className="self-stretch bg-colors-green-300 h-[13.125rem] min-h-[13.125rem]" />
    </div>
  );
};

export default SkeletonMain;
