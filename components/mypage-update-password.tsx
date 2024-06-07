import type { NextPage } from "next";
import TableMypageRequiredInputRow from "./table-mypage-required-input-row";

export type MypageUpdatePasswordType = {
  className?: string;
};

const MypageUpdatePassword: NextPage<MypageUpdatePasswordType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1920px] bg-button-colors-white max-w-full flex flex-col items-start justify-start p-5 box-border text-left text-sm text-text-title-small font-sub-banner-title ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10 gap-[40px] md:pb-5 md:box-border mq420:pb-5 mq420:box-border">
          <div className="w-full flex flex-col items-center justify-center gap-[16px] max-w-[900px]">
            <div className="self-stretch relative text-right text-base text-semantic-error sm:text-sm mq420:text-sm">
              <b className="leading-[24px]">* </b>
              <span className="text-sm leading-[20px] text-text-text-small-light">
                표시는 필수 입력항목 입니다
              </span>
            </div>
            <TableMypageRequiredInputRow
              title="현재 비밀번호 "
              placeholder="현재 사용중인 비밀번호를 입력해주세요."
              hintText="송금일자를 정확히 입력해주시기 바랍니다."
              showThisIsA={false}
              showEmail={false}
              showIcon={false}
            />
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-button-colors-white sm:flex-col">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                  <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center">
                    <div className="relative inline-block min-w-[100px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                      <span className="leading-[20px]">새 비밀번호 </span>
                      <b className="text-base leading-[24px] text-semantic-error">
                        *
                      </b>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start text-dark-gray font-text-small sm:flex-[unset] sm:self-stretch">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[340px] relative leading-[22px] hidden">
                        Email
                      </div>
                      <div className="self-stretch rounded-default-border-raius bg-button-colors-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border mq420:p-1.5 mq420:box-border">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon5.svg"
                        />
                        <input
                          className="[border:none] [outline:none] font-sub-banner-title text-sm bg-[transparent] flex-1 relative leading-[20px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                          placeholder="비밀번호는 아래 요건을 반드시 충족해야 합니다."
                          type="password"
                        />
                      </div>
                      <div className="self-stretch relative text-xs leading-[16px] font-sub-banner-title text-semantic-warning mq420:text-2xs">{`* 6~20자의 영문 소/대문자(a-zA-Z) 또는 숫자(0-9) 또는 특수문자(~!@#$%^&*_-+=\`:;,.?/)`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-button-colors-white sm:flex-col">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                  <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center">
                    <div className="relative inline-block min-w-[100px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                      <span className="leading-[20px]">새 비밀번호 확인 </span>
                      <b className="text-base leading-[24px] text-semantic-error">
                        *
                      </b>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start text-base text-dark-gray sm:flex-[unset] sm:self-stretch mq420:min-w-[100px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[340px] relative leading-[24px] hidden">
                        Email
                      </div>
                      <div className="self-stretch rounded-default-border-raius bg-button-colors-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border mq420:p-1.5 mq420:box-border">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon5.svg"
                        />
                        <input
                          className="[border:none] [outline:none] font-sub-banner-title text-sm bg-[transparent] flex-1 relative leading-[20px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                          placeholder="입력한 새 비밀번호와 같게 다시 한 번 입력해주세요."
                          type="password"
                        />
                      </div>
                      <div className="w-[340px] relative leading-[24px] text-gray hidden mq420:text-2xs">{`* 6~20자의 영문 소/대문자(a-zA-Z) 또는 숫자(0-9) 또는 특수문자(~!@#$%^&*_-+=\`:;,.?/)`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-7 bg-button-colors-dark-sky rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue">
            <div className="relative text-sm leading-[20px] font-sub-banner-title text-button-colors-white text-center">
              변경
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MypageUpdatePassword;
