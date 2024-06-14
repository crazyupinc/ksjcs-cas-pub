import type { NextPage } from "next";
import TableMypageRow from "./table-mypage-row";

export type WithdrawalUserType = {
  className?: string;
};

const WithdrawalUser: NextPage<WithdrawalUserType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1456px] max-w-full flex flex-col items-start justify-start min-w-[500px] ${className}`}
    >
      <div className="self-stretch rounded bg-bg-colors-white flex flex-col items-start justify-start p-4 border-[1px] border-solid border-gray1">
        <TableMypageRow title="이름(실명)" method="민지이" />
        <TableMypageRow title="아이디" method="jiminyee" />
        <TableMypageRow title="이메일" method="jiminyee@gmail.com" />
        <TableMypageRow title="휴대폰" method="010-8707-1111" />
        <TableMypageRow
          title="탈퇴 사유"
          method="학회 사이트 이용빈도가 낮아서"
        />
        <TableMypageRow title="탈퇴 날짜" method="2024.06.14" />
      </div>
    </div>
  );
};

export default WithdrawalUser;
