import type { NextPage } from "next";
import CardListRow from "./card-list-row";

export type CardListRowAllType = {
  className?: string;
};

const CardListRowAll: NextPage<CardListRowAllType> = ({ className = "" }) => {
  return (
    <div
      className={`max-w-full flex flex-row items-center justify-center gap-[18px] self-stretch md:flex-col ${className}`}
    >
      <CardListRow />
      <CardListRow />
    </div>
  );
};

export default CardListRowAll;
