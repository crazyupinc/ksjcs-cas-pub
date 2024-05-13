import type { NextPage } from "next";

const Footer2: NextPage = () => {
  return (
    <footer className="w-[1920px] bg-bg-light max-w-full flex flex-row items-start justify-center py-9 px-5 box-border text-left text-sm text-text-text-small-light font-body-text-caption-bold md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
      <div className="flex-1 flex flex-col items-center justify-start gap-[24px] md:flex-[unset] md:self-stretch">
        <div className="w-full flex flex-row items-start justify-start gap-[26px] max-w-[1300px] sm:gap-[3px] mq420:flex-col mq420:gap-[8px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] mq420:flex-[unset] mq420:self-stretch">
            <img
              className="w-[200px] relative h-14 object-cover"
              alt=""
              src="/logo@2x.png"
            />
            <div className="w-[218px] h-8 relative inline-block sm:text-smi mq420:text-smi">
              <p className="m-0">{`사이버 공간 커뮤니케이션에 대한 `}</p>
              <p className="m-0">학제적 연구에 중점을 두고 있습니다.</p>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[26px] md:self-stretch md:h-auto md:flex-col mq420:flex-[unset] mq420:self-stretch">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] md:flex-[unset] md:self-stretch sm:!mb-[40px]">
              <div className="self-stretch relative text-base font-extrabold sm:font-bold sm:font-body-text-caption-bold sm:text-sm mq420:text-sm">{`관련 사이트 `}</div>
              <div className="w-[93px] h-4 relative inline-block sm:text-smi mq420:text-smi">
                국민권익위원회
              </div>
              <div className="w-[79px] relative inline-block sm:text-smi mq420:text-smi">
                한국연구재단
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] md:flex-[unset] md:self-stretch sm:!mb-[40px]">
              <div className="self-stretch relative text-base font-extrabold sm:font-bold sm:font-body-text-caption-bold sm:text-sm mq420:text-sm">
                회원 약관
              </div>
              <div className="w-[53px] relative inline-block sm:text-smi mq420:text-smi">
                이용약관
              </div>
              <div className="w-[106px] relative inline-block sm:text-smi mq420:text-smi">
                개인정보처리방침
              </div>
              <div className="w-[119px] relative inline-block sm:text-smi mq420:text-smi">
                이메일무단수집거부
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] md:flex-[unset] md:self-stretch">
              <div className="self-stretch relative text-base font-extrabold sm:font-bold sm:font-body-text-caption-bold sm:text-sm mq420:text-sm">
                학회 주소
              </div>
              <div className="w-[174px] relative inline-block sm:text-smi mq420:text-smi">
                서울특별시 노원구 광운로 20
              </div>
              <div className="w-[140px] relative inline-block sm:text-smi">
                한울관 721호 (월계동) 
              </div>
              <div className="w-[200px] relative text-text-colors-dark-gray hidden">
                전화: 010-1234-1234
              </div>
              <div className="w-[177px] relative inline-block sm:text-smi mq420:text-smi">
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

export default Footer2;
