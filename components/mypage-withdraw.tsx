import type { NextPage } from "next";

export type MypageWithdrawType = {
  className?: string;
};

const MypageWithdraw: NextPage<MypageWithdrawType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full flex flex-col items-start justify-start p-5 box-border text-left text-sm text-semantic-error font-headings-heading-3 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10 gap-[40px] md:pb-5 md:box-border mq420:pb-5 mq420:box-border">
          <div className="w-full flex flex-col items-center justify-center gap-[16px] max-w-[900px] text-xl">
            <b className="self-stretch relative leading-[28px] sm:text-xl mq420:text-lg">
              회원탈퇴 시 사이버커뮤니케이션에 제공된 개인정보는 즉시
              삭제됩니다.
            </b>
            <div className="self-stretch bg-colors-rose-50 flex flex-col items-center justify-center p-5 text-sm text-text-text-small-light border-[1px] border-solid border-semantic-error">
              <div className="self-stretch relative leading-[24px] sm:text-sm mq420:text-sm">
                <p className="m-0">
                  회원탈퇴를 하더라도 서비스 약관 및 개인정보 취급방침에 따라
                  아래의 회원의 활동정보를 보관합니다.
                </p>
                <p className="m-0">- 회원 아이디</p>
                <p className="m-0">- 회원 가입일, 마지막 방문일</p>
                <p className="m-0">- 회원이 직접 남긴 게시글</p>
                <p className="m-0">
                  - 학회비 납부 내역 및 대금 결제에 관한 기록
                </p>
                <p className="m-0">
                  - 사전등록, 초록접수, 학술대회신청, 논문투고등의 회원이
                  작성하는 활동 정보
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[16px] max-w-[900px] text-text-text-small-light">
            <div className="self-stretch flex flex-row items-center justify-center text-xl text-text-colors-gray border-b-[1px] border-solid border-bg-light-border">
              <b className="flex-1 relative leading-[28px] inline-block h-10 sm:text-xl mq420:text-lg">
                탈퇴 안내
              </b>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[6px]">
              <b className="self-stretch relative leading-[20px] sm:text-sm mq420:text-sm">
                1. 탈퇴 신청한 아이디로 재가입이 불가능합니다
              </b>
              <div className="self-stretch relative leading-[20px] sm:text-sm mq420:text-sm">
                - 다른 아이디로 재가입 하더라도 기존의 활동정보를 연동하는것은
                불가능 합니다.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[6px]">
              <b className="self-stretch relative leading-[20px] sm:text-sm mq420:text-sm">
                2. 탈퇴 후 작성한 게시글은 삭제되지 않습니다.
              </b>
              <div className="self-stretch relative leading-[24px] sm:text-sm mq420:text-sm">
                <p className="m-0">
                  - 사이버커뮤니케이션 게시판에 작성한 게시글 및 댓글(코멘트)는
                  탈퇴 후에도 유지됩니다.
                </p>
                <p className="m-0">
                  - 단, 작성자명은 (휴면/탈퇴회원)으로 남아 작성자를 특정할 순
                  없습니다.
                </p>
                <p className="m-0">
                  - 해당 게시물이나 코멘트에 대한 삭제를 원하는 경우 반드시 탈퇴
                  전에 직접 삭제해주시기 바랍니다.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[6px]">
              <b className="self-stretch relative leading-[20px] sm:text-sm mq420:text-sm">
                3. 학회비, 사전등록, 초록접수등의 학회 활동정보는 삭제되지
                않습니다.
              </b>
              <div className="self-stretch relative leading-[24px] sm:text-sm mq420:text-sm">
                <p className="m-0">
                  - 학회 회원 관리와 운영에 대한 기록으로써 회원님의 학회비 납부
                  내역, 사전등록 및 학술대회등의 신청내역은 삭제되지 않습니다.
                </p>
                <p className="m-0">
                  - 회원 각각의 활동정보는 공개적으로 게시되거나 활용되지 않으며
                  학회 사무국 또는 담당자가 학회 운영용도로만 제한적으로
                  사용됩니다.
                </p>
                <p className="m-0">
                  - 탈퇴 후에 해당 활동정보에 대한 증명자료가 필요하시면 학회
                  사무국 또는 담당자에게 연락주시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[16px] max-w-[900px] text-text-title-small">
            <div className="self-stretch flex flex-row items-center justify-center text-xl text-text-colors-gray border-b-[1px] border-solid border-bg-light-border">
              <b className="flex-1 relative leading-[28px] inline-block h-10 sm:text-xl mq420:text-lg">
                탈퇴 신청
              </b>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col sm:items-start sm:justify-center">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] sm:w-auto sm:[align-self:unset] sm:flex-col sm:gap-[8px] sm:items-center sm:justify-start mq420:flex-col mq420:gap-[20px]">
                  <div className="flex flex-row items-center justify-start py-2 px-4 sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:flex-row sm:gap-[0px] sm:items-center sm:justify-center sm:pl-4 sm:box-border">
                    <div className="w-[200px] relative leading-[20px] flex items-center shrink-0 md:w-[200px] sm:text-center sm:w-[60px] mq420:text-smi mq420:text-left mq420:w-[60px]">
                      탈퇴 사유
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[3px] text-text-text-small-light">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                      <div className="relative leading-[20px]">
                        아이디 변경을 위해
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                      <div className="relative leading-[20px]">
                        일시적으로 가입했기 때문에
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                      <div className="relative leading-[20px]">
                        더 이상 학회 회원이 아니라서
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                      <div className="relative leading-[20px]">
                        학회 사이트 이용빈도가 낮아서
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                      <div className="relative leading-[20px]">
                        학회 사이트에 유익한 콘텐츠나 정보가 없어서
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                      <div className="relative leading-[20px]">
                        학회 사이트 이용이 불편하고 장애가 많아서
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                      <div className="relative leading-[20px]">
                        학회 광고(메일, 팝업 등)가 불편해서
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                      <div className="relative leading-[20px]">
                        해당 없음(단순 탈퇴)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-white sm:flex-col">
              <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                  <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center">
                    <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                      본인 확인용 비밀번호
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start text-base text-dark-gray sm:flex-[unset] sm:self-stretch mq420:min-w-[100px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="w-[340px] relative leading-[24px] hidden">
                        Email
                      </div>
                      <div className="self-stretch rounded-default-border-raius bg-bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border mq420:p-1.5 mq420:box-border">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon5.svg"
                        />
                        <input
                          className="[border:none] [outline:none] font-headings-heading-3 text-sm bg-[transparent] flex-1 relative leading-[20px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                          placeholder="비밀번호를 입력하세요."
                          type="password"
                        />
                      </div>
                      <div className="w-[340px] relative leading-[24px] text-gray hidden mq420:text-2xs">
                        송금일자를 정확히 입력해주시기 바랍니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-7 bg-button-colors-dark-sky rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue">
            <div className="relative text-sm leading-[20px] font-headings-heading-3 text-bg-white text-center">
              탈퇴
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MypageWithdraw;
