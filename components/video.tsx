import type { NextPage } from "next";

export type VideoType = {
  className?: string;
};

const Video: NextPage<VideoType> = ({ className = "" }) => {
  return (
    <video
      className={`w-full bg-plum flex flex-col items-start justify-start min-w-[320px] max-w-[1280px] max-h-[720px] ${className}`}
      controls
    >
      <source src />
    </video>
  );
};

export default Video;
