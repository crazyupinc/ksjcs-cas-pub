import type { NextPage } from "next";
import CardListRow from "./card-list-row";

const CardListRowAll: NextPage = () => {
  return (
    <div className="max-w-full flex flex-row items-center justify-center gap-[18px] self-stretch md:flex-col">
      <CardListRow />
      <CardListRow />
    </div>
  );
};

export default CardListRowAll;
