import type { NextPage } from "next";
import PaymentItems from "./payment-items";
import TableMypageRequiredInputRow from "./table-mypage-required-input-row";

export type FeeOrderType = {
  className?: string;
};

const FeeOrder: NextPage<FeeOrderType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full flex flex-col items-start justify-start p-5 box-border text-left text-sm text-text-text-small-light font-body-text-smaller-text ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10 gap-[40px] md:pb-5 md:box-border mq420:pb-5 mq420:box-border">
          <div className="w-full flex flex-col items-center justify-center gap-[8px] max-w-[900px]">
            <div className="self-stretch flex flex-col items-center justify-center py-[3px] px-0 gap-[6px] border-b-[1px] border-solid border-bg-light-border">
              <div className="self-stretch relative leading-[20px] text-center sm:text-sm mq420:text-smi">
                <span>{`납부 내역 확인은 `}</span>
                <span className="text-bg-primary">{`마이페이지 > 납부내역`}</span>
                <span>{` 에서 확인 할 수 있습니다. `}</span>
              </div>
              <b className="self-stretch relative text-xl leading-[28px] flex text-text-title-medium items-center h-[50px] shrink-0 sm:text-xl mq420:text-lg">
                납부 항목
              </b>
              <div className="self-stretch relative text-xs leading-[16px] text-semantic-warning sm:text-xs mq420:text-xs">
                준회원, 정회원, 평생회원은 가입비 선택 시 동일한 회원의 연회비만
                선택 가능, 기관회원은 연회비만 선택 가능합니다.
              </div>
            </div>
            <PaymentItems
              membershipFee="가입비(준회원)"
              showPrice
              priceAlignSelf="stretch"
              priceWidth="unset"
              price="50,000 원"
            />
            <PaymentItems
              membershipFee="가입비(정회원)"
              showPrice
              priceAlignSelf="stretch"
              priceWidth="unset"
              price="50,000 원"
            />
            <PaymentItems
              membershipFee="가입비(평생회원)"
              showPrice
              priceAlignSelf="stretch"
              priceWidth="unset"
              price="50,000 원"
            />
            <PaymentItems
              membershipFee="연회비(준회원)"
              showPrice={false}
              priceAlignSelf="unset"
              priceWidth="104px"
              price="30,000 원"
            />
            <PaymentItems
              membershipFee="연회비(정회원)"
              showPrice={false}
              priceAlignSelf="unset"
              priceWidth="104px"
              price="50,000 원"
            />
            <PaymentItems
              membershipFee="평생회비(평생회원)"
              showPrice={false}
              priceAlignSelf="unset"
              priceWidth="104px"
              price="300,000 원"
            />
            <PaymentItems
              membershipFee="연회회비(기관회원)"
              showPrice={false}
              priceAlignSelf="unset"
              priceWidth="104px"
              price="1,000,000 원"
            />
            <div className="self-stretch relative text-right flex items-center h-16 shrink-0 text-11xl text-bg-primary sm:text-lg mq420:text-lg">
              <span>
                <span className="text-base leading-[24px] font-body-text-smaller-text text-text-title-medium">
                  결제금액 총
                </span>
                <b>
                  <span className="text-xl leading-[28px]">{` `}</span>
                </b>
                <b>
                  <span className="leading-[36px]">0</span>
                </b>
                <span className="text-base leading-[24px] text-text-title-medium">
                  {" "}
                  원
                </span>
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center max-w-[900px] text-xl text-text-title-medium">
            <div className="w-full flex flex-col items-center justify-center gap-[24px] max-w-[900px]">
              <b className="self-stretch relative leading-[28px] sm:text-lg mq420:text-lg">
                납부자 정보
              </b>
              <div className="w-full bg-bg-white box-border flex flex-col items-start justify-start max-w-[1300px] text-sm text-text-title-small border-t-[1px] border-solid border-text-hint-text">
                <TableMypageRequiredInputRow
                  title="납부자명 "
                  placeholder="납부자명을 입력해주세요."
                  hintText="송금일자를 정확히 입력해주시기 바랍니다."
                  showThisIsA={false}
                  showEmail={false}
                  showIcon={false}
                />
                <TableMypageRequiredInputRow
                  title="이메일 "
                  placeholder="이메일을 입력해주세요."
                  hintText="송금일자를 정확히 입력해주시기 바랍니다."
                  showEmail={false}
                  showIcon={false}
                />
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-white sm:flex-col">
                  <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                    <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                      <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center">
                        <div className="relative inline-block min-w-[100px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                          <span className="leading-[20px]">휴대폰 </span>
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
                          <div className="self-stretch rounded-default-border-raius bg-bg-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border mq420:p-1.5 mq420:box-border">
                            <img
                              className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/icon5.svg"
                            />
                            <input
                              className="[border:none] [outline:none] font-body-text-smaller-text text-sm bg-[transparent] flex-1 relative leading-[20px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                              placeholder="휴대폰 번호를 입력해주세요."
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
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
                  <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                    <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[100px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                      <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
                        <div className="relative inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                          <span className="leading-[20px]">결제수단 </span>
                          <b className="text-base leading-[24px] text-semantic-error">
                            *
                          </b>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[8px] text-text-text-small-light">
                        <div className="w-4 relative rounded-border-radius-full bg-bg-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                        <div className="relative leading-[20px]">
                          무통장 입금
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-7 bg-bg-primary rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue">
            <div className="relative text-sm leading-[20px] font-body-text-smaller-text text-bg-white text-center">
              납부 신청
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeeOrder;
