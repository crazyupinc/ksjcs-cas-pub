import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`w-[1920px] bg-bg-light max-w-full flex flex-row items-start justify-center py-9 px-5 box-border text-left text-sm text-text-text-small-light font-headings-heading-3 md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-[24px] md:flex-[unset] md:self-stretch">
        <div className="w-full flex flex-row items-start justify-start gap-[8px] max-w-[1300px] mq420:flex-col mq420:gap-[8px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] mq420:flex-[unset] mq420:self-stretch">
            <img
              className="w-[200px] relative h-14 object-cover"
              alt=""
              src="/logo3@2x.png"
            />
            <div className="w-[218px] h-7 relative inline-block sm:text-smi mq420:text-smi">
              <p className="m-0">{`사이버 공간 커뮤니케이션에 대한 `}</p>
              <p className="m-0">학제적 연구에 중점을 두고 있습니다.</p>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[20px] md:self-stretch md:h-auto md:flex-col sm:gap-[20px] mq420:gap-[20px] mq420:flex-[unset] mq420:self-stretch">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] md:flex-[unset] md:self-stretch">
              <b className="self-stretch relative text-base sm:font-bold sm:font-sub-sub-item sm:text-sm mq420:text-sm">{`관련 사이트 `}</b>
              <div className="self-stretch h-3.5 relative inline-block sm:text-smi mq420:text-smi">
                국민권익위원회
              </div>
              <div className="self-stretch relative sm:text-smi mq420:text-smi">
                한국연구재단
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] md:flex-[unset] md:self-stretch">
              <b className="self-stretch relative text-base sm:font-bold sm:font-sub-sub-item sm:text-sm mq420:text-sm">
                회원 약관
              </b>
              <div className="self-stretch relative sm:text-smi mq420:text-smi">
                이용약관
              </div>
              <div className="self-stretch relative sm:text-smi mq420:text-smi">
                개인정보처리방침
              </div>
              <div className="self-stretch relative sm:text-smi mq420:text-smi">
                이메일무단수집거부
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] md:flex-[unset] md:self-stretch">
              <b className="self-stretch relative text-base sm:font-bold sm:font-sub-sub-item sm:text-sm mq420:text-sm">
                학회 주소
              </b>
              <div className="self-stretch relative sm:text-smi mq420:text-smi">
                서울특별시 노원구 광운로 20
              </div>
              <div className="self-stretch relative sm:text-smi">
                한울관 721호 (월계동) 
              </div>
              <div className="self-stretch relative sm:text-smi mq420:text-smi">
                cybercom2013@naver.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center text-center">
          <div className="relative sm:text-smi sm:text-left mq420:text-smi">
            Copyright © 2023 by cybercom. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
