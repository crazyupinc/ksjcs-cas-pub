import type { NextPage } from "next";
import TableMypageRow from "./table-mypage-row";

export type MypageFeeDetailType = {
  className?: string;
};

const MypageFeeDetail: NextPage<MypageFeeDetailType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-bg-white max-w-full flex flex-col items-center justify-start p-5 box-border text-left text-xl text-text-colors-gray font-headings-heading-3 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10 gap-[36px] md:pb-10 md:box-border sm:pb-5 sm:box-border mq420:pb-5 mq420:box-border">
          <div className="w-full flex flex-col items-center justify-center gap-[24px] max-w-[900px]">
            <b className="self-stretch relative leading-[28px] sm:text-lg mq420:text-lg">
              납부 신청 내역
            </b>
            <div className="w-full bg-bg-white box-border flex flex-col items-start justify-start max-w-[1300px] text-sm text-text-title-small border-t-[1px] border-solid border-text-hint-text">
              <TableMypageRow
                title="납부자 성명"
                method="크레이지업"
                divColor="#1e293b"
                divFontWeight="unset"
              />
              <TableMypageRow
                title="납부자 이메일"
                method="crazyupinc@gmail.com"
                divColor="#1e293b"
                divFontWeight="unset"
              />
              <TableMypageRow
                title="납부자 휴대폰"
                method="010-8707-1234"
                divColor="#1e293b"
                divFontWeight="unset"
              />
              <TableMypageRow
                title="납부명"
                method="입회비(정회원) 외 1건"
                divColor="#1e293b"
                divFontWeight="unset"
              />
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
                <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                  <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                    <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
                      <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                        납부 항목
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-2 px-0 sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:flex-[unset]">
                      <div className="flex-1 relative leading-[20px] sm:text-center sm:w-32 mq420:text-smi mq420:w-[120px]">
                        <p className="m-0">1) 입회비(기관회원) 1,000,000 원</p>
                        <p className="m-0">2) 정회원 50,000 원</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TableMypageRow
                title="납부 금액"
                method="70,000 원"
                divColor="#1e293b"
                divFontWeight="unset"
              />
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
                <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                  <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[120px] md:items-center md:justify-start sm:flex-col sm:gap-[8px] mq420:flex-1 mq420:gap-[8px]">
                    <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                      <div className="relative leading-[20px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                        납부 상태
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[20px] md:flex-col md:gap-[4px] md:items-start md:justify-center md:pl-0 md:box-border sm:items-center sm:justify-center sm:flex-[unset] sm:self-stretch">
                      <div className="flex-1 h-[23px] flex flex-row items-center justify-start gap-[16px] md:flex-[unset] md:self-stretch sm:w-auto sm:[align-self:unset] sm:flex-row sm:gap-[3px] sm:items-start sm:justify-start">
                        <div className="flex flex-row items-center justify-start text-button-colors-dark-sky sm:gap-[3px]">
                          <div className="relative leading-[20px] inline-block min-w-[70px] mq420:text-smi">
                            결제 대기중
                          </div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/iconarrowright.svg"
                        />
                        <div className="flex flex-row items-center justify-start sm:gap-[3px]">
                          <div className="relative leading-[20px] inline-block min-w-[70px] mq420:text-smi">
                            결제 확인중
                          </div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/iconarrowright.svg"
                        />
                        <div className="flex-1 flex flex-row items-center justify-start md:flex-col md:items-start md:justify-start">
                          <div className="relative leading-[20px] inline-block min-w-[70px] mq420:text-smi">
                            결제 완료
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start py-0 pr-0 pl-5 sm:items-center sm:justify-start sm:pl-0 sm:box-border mq420:pl-0 mq420:box-border">
                        <button className="cursor-pointer py-1.5 px-4 bg-[transparent] rounded-md overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-text-hint-text hover:bg-gainsboro-100">
                          <div className="flex-1 relative text-xs leading-[16px] font-headings-heading-3 text-text-title-small text-center">
                            납부 취소 요청
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TableMypageRow
                title="납부 금액"
                method="70,000 원"
                divColor="#1e293b"
                divFontWeight="unset"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[24px] max-w-[900px]">
            <b className="self-stretch relative leading-[28px] sm:text-lg mq420:text-lg">
              결제 내역
            </b>
            <div className="w-full bg-bg-white box-border flex flex-col items-start justify-start max-w-[1300px] text-sm text-text-title-small border-t-[1px] border-solid border-text-hint-text">
              <TableMypageRow
                title="결제 수단"
                method="무통장 입금"
                divColor="#1e293b"
                divFontWeight="unset"
              />
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-white sm:flex-col">
                <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                  <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[80px] md:gap-[80px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                    <div className="w-40 flex flex-row items-center justify-start py-2 px-4 box-border sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                      <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                        입금자명
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start text-dark-gray font-text-small sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                        <div className="w-[340px] relative leading-[22px] hidden">
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
                            placeholder="입금자명을 입력해주세요."
                            type="password"
                          />
                        </div>
                        <div className="self-stretch relative text-xs leading-[16px] font-headings-heading-3 text-semantic-warning mq420:text-2xs">
                          은행 송금시 "받는 분 통장 표시"란에 입금자명과
                          동일하게 입력해주세요.
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
                      <div className="relative leading-[20px] inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                        입금 예정일
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start text-dark-gray font-text-small sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                        <div className="w-[340px] relative leading-[22px] hidden">
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
                            placeholder="2024-05-17"
                            type="password"
                          />
                        </div>
                        <div className="self-stretch relative text-xs leading-[16px] font-headings-heading-3 text-semantic-warning mq420:text-2xs">
                          송금일자를 정확히 입력해주시기 바랍니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TableMypageRow
                title="결제 수단"
                method="우리은행 1005-602-960308 사이버커뮤니케이션학회"
                divColor="#0369a1"
                divFontWeight="bold"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="cursor-pointer [border:none] py-3.5 px-7 bg-button-colors-dark-sky rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue sm:py-2.5 sm:px-4 sm:box-border">
              <div className="relative text-base leading-[24px] font-headings-heading-3 text-bg-white text-center sm:text-smi mq420:text-smi">
                입금 확인 요청
              </div>
            </button>
            <button className="cursor-pointer py-3.5 px-7 bg-[transparent] w-[156px] rounded-md box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-text-hint-text hover:bg-gainsboro-100 sm:w-[120px] sm:py-2.5 sm:px-4 sm:box-border">
              <div className="relative text-base leading-[24px] font-headings-heading-3 text-text-title-small text-center sm:text-smi">
                목록으로
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageFeeDetail;