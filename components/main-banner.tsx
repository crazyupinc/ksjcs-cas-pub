import type { NextPage } from "next";

const MainBanner: NextPage = () => {
  return (
    <div className="w-[1920px] max-w-full h-[600px] flex flex-row items-center justify-center py-[120px] px-0 box-border bg-[url('/mainbanner@3x.png')] bg-cover bg-no-repeat bg-[top] text-right text-29xl text-bg-white font-sub-sub-item md:h-[400px] sm:h-[400px] mq420:h-[400px]">
      <div className="w-[1300px] flex flex-row items-start justify-center py-0 px-10 box-border max-w-[1300px] mq420:pl-5 mq420:pr-5 mq420:box-border">
        <div className="flex-1 h-[446px] flex flex-col items-center justify-center">
          <div className="self-stretch relative leading-[60px] font-extrabold md:text-11xl md:leading-[40px] sm:text-7xl sm:leading-[36px] mq420:text-7xl mq420:leading-[36px]">
            <p className="m-0">#미디어 #커뮤니케이션</p>
            <p className="m-0">#지능정보기술</p>
            <p className="m-0">#정치사회문화</p>
            <p className="m-0">#학제적 #학술공동체</p>
            <p className="m-0 text-bg-secondary">사이버커뮤니케이션학회</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
