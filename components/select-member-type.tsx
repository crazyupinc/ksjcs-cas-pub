import type { NextPage } from "next";

export type SelectMemberTypeType = {
  className?: string;
};

const SelectMemberType: NextPage<SelectMemberTypeType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full overflow-hidden flex flex-row items-center justify-center p-5 box-border text-center text-sm text-dark-gray font-sub-sub-item md:flex-col ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-center justify-center md:flex-[unset] md:self-stretch">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10 gap-[36px] sm:gap-[16px] sm:pt-0 sm:pb-5 sm:box-border">
          <img
            className="w-80 h-[233.2px] relative object-cover sm:w-[260px] sm:h-[200px]"
            alt=""
            src="/usergroupicon@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start gap-[36px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch h-6 relative text-5xl font-extrabold inline-block sm:text-[22px]">
                회원 유형 선택
              </div>
              <div className="self-stretch relative sm:text-smi">
                아래에서 자신에게 해당하는 유형을 선택하고,
              </div>
              <div className="self-stretch relative sm:text-smi">
                더 많은 혜택을 누려보세요.
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[16px]">
              <button className="cursor-pointer [border:none] py-3.5 px-7 bg-bg-primary rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue">
                <div className="relative text-base leading-[24px] font-body-text-smaller-text text-bg-white text-center sm:text-smi">
                  개인회원 가입
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-3.5 px-7 bg-bg-primary rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue">
                <div className="relative text-base leading-[24px] font-body-text-smaller-text text-bg-white text-center sm:text-smi">
                  기관회원 가입
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectMemberType;
