import type { NextPage } from "next";
import GalleryCard from "./gallery-card";

export type CardListRowType = {
  className?: string;
};

const CardListRow: NextPage<CardListRowType> = ({ className = "" }) => {
  return (
    <div
      className={`max-w-full flex flex-row flex-wrap items-center justify-center gap-[18px] flex-1 sm:flex-col mq420:flex-col ${className}`}
    >
      <GalleryCard
        image="/image4@2x.png"
        datetime="2023-11-24"
        title="2023 가을철 정기학술대회 (4) (2023.11.24)"
      />
      <GalleryCard
        image="/image5@2x.png"
        datetime="2023-11-24"
        title="2023 가을철 정기학술대회 (4) (2023.11.24)"
      />
    </div>
  );
};

export default CardListRow;
