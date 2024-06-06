import type { NextPage } from "next";

const SkeletonMainExample: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start text-left text-[2.25rem] text-bg-white font-headings-heading-3">
      <div className="self-stretch bg-colors-red-300 h-[7.75rem] md:h-[4.375rem] mq420:h-[4.375rem]" />
      <div className="self-stretch bg-colors-blue-300 h-[37.5rem] flex flex-col items-center justify-start text-right md:h-[25rem] mq420:h-[25rem]">
        <div className="self-stretch h-[37.5rem] flex flex-row items-center justify-center py-[7.5rem] px-[0rem] box-border bg-[url('/mainbanner@3x.png')] bg-cover bg-no-repeat bg-[top] w-full md:h-[25rem] sm:h-[25rem] mq420:h-[25rem]">
          <div className="w-[81.25rem] flex flex-row items-start justify-center py-[0rem] px-[2.5rem] box-border max-w-[81.25rem] mq420:pl-[1.25rem] mq420:pr-[1.25rem] mq420:box-border">
            <div className="flex-1 h-[27.875rem] flex flex-col items-center justify-center">
              <b className="self-stretch relative leading-[3.125rem] md:text-[1.875rem] md:leading-[2.5rem] sm:text-[1.625rem] sm:leading-[2.25rem] mq420:text-[1.625rem] mq420:leading-[2.25rem]">
                <p className="m-0">#미디어 #커뮤니케이션</p>
                <p className="m-0">#지능정보기술</p>
                <p className="m-0">#정치사회문화</p>
                <p className="m-0">#학제적 #학술공동체</p>
                <p className="m-0 text-text-colors-amber">
                  사이버커뮤니케이션학회
                </p>
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-colors-cyan-950 flex flex-col items-center justify-start min-h-[12.5rem] text-[1rem] font-noto-sans-kr">
        <div className="self-stretch bg-colors-cyan-950 flex flex-row items-center justify-center py-[2.5rem] px-[1.25rem] box-border min-h-[1.875rem]">
          <div className="w-[81.25rem] flex flex-row items-start justify-between max-w-[81.25rem] sm:h-auto sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:pb-[0rem] sm:box-border">
            <div className="flex flex-col items-center justify-start py-[0.375rem] px-[0.5rem] gap-[0.75rem]">
              <div className="w-[5.313rem] rounded-81xl bg-bg-white h-[5.313rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[1.062rem] px-[1.125rem] box-border mq420:w-[3.75rem] mq420:h-[3.75rem]">
                <img
                  className="w-[3.125rem] relative h-[3.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/iconuserxxl.svg"
                />
              </div>
              <b className="relative tracking-[-0.2px] leading-[1.125rem] mq420:text-[0.813rem]">
                회원가입안내
              </b>
            </div>
            <div className="flex flex-col items-center justify-start py-[0.375rem] px-[0.5rem] gap-[0.75rem]">
              <div className="w-[5.313rem] rounded-81xl bg-bg-white h-[5.313rem] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[1.062rem] box-border mq420:w-[3.75rem] mq420:h-[3.75rem]">
                <img
                  className="w-[3.125rem] relative h-[3.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/iconcalendarxxl.svg"
                />
              </div>
              <b className="relative tracking-[-0.2px] leading-[1.125rem] mq420:text-[0.813rem]">
                주요행사
              </b>
            </div>
            <div className="flex flex-col items-center justify-start py-[0.375rem] px-[0.5rem] gap-[0.75rem]">
              <div className="w-[5.313rem] rounded-81xl bg-bg-white h-[5.313rem] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[1.062rem] box-border mq420:w-[3.75rem] mq420:h-[3.75rem]">
                <img
                  className="w-[3.125rem] relative h-[3.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/iconmonitorxxl.svg"
                />
              </div>
              <b className="relative tracking-[-0.2px] leading-[1.125rem] mq420:text-[0.813rem]">
                공모안내
              </b>
            </div>
            <div className="flex flex-col items-center justify-start py-[0.375rem] px-[0.25rem] gap-[0.75rem]">
              <div className="w-[5.313rem] rounded-81xl bg-bg-white h-[5.313rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[1.125rem] px-[1.062rem] box-border mq420:w-[3.75rem] mq420:h-[3.75rem] mq420:[transform:rotate(0deg)]">
                <img
                  className="w-[3.125rem] relative h-[3.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/iconawardxxl.svg"
                />
              </div>
              <b className="relative tracking-[-0.2px] leading-[1.125rem] mq420:text-[0.813rem]">
                학술대회 자료집
              </b>
            </div>
            <div className="flex flex-col items-center justify-start py-[0.375rem] px-[0.5rem] gap-[0.75rem]">
              <div className="w-[5.313rem] rounded-81xl bg-bg-white h-[5.313rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[1.125rem] px-[1.062rem] box-border mq420:w-[3.75rem] mq420:h-[3.75rem]">
                <img
                  className="w-[3.125rem] relative h-[3.125rem] overflow-hidden shrink-0"
                  alt=""
                  src="/iconbookopenxxl.svg"
                />
              </div>
              <b className="relative tracking-[-0.2px] leading-[1.125rem] mq420:text-[0.813rem]">
                세미나 자료집
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-bg-white flex flex-col items-center justify-start min-h-[31.25rem] text-center text-text-colors-gray">
        <div className="self-stretch bg-bg-white flex flex-col items-center justify-start py-[6.875rem] px-[1.25rem] box-border gap-[2.25rem] w-full">
          <div className="flex flex-row items-start justify-center gap-[0.125rem] sm:flex-col sm:items-center sm:justify-center">
            <b className="relative leading-[2.5rem] sm:text-[1.625rem] mq420:text-[1.5rem]">{`사이버 커뮤니케이션 `}</b>
            <b className="relative leading-[2.5rem] sm:text-[1.625rem] mq420:text-[1.5rem]">
              학회 소식
            </b>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.75rem] border-b-[1px] border-solid border-bg-light-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.75rem] flex flex-col items-center justify-center">
              <b className="self-stretch flex-1 relative text-[0.875rem] leading-[1.25rem] flex font-headings-heading-3 text-text-dark-gray text-center items-center justify-center">
                공지사항
              </b>
              <div className="self-stretch relative bg-button-colors-dark-sky h-[0.125rem]" />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.75rem] flex flex-col items-center justify-center">
              <div className="self-stretch flex-1 relative text-[0.875rem] leading-[1.25rem] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
                주요행사
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.75rem] flex flex-col items-center justify-center">
              <div className="self-stretch flex-1 relative text-[0.875rem] leading-[1.25rem] font-headings-heading-3 text-text-gray text-center flex items-center justify-center">
                회원동정
              </div>
            </button>
          </div>
          <div className="w-full flex flex-row items-start justify-center gap-[1.125rem] max-w-[81.25rem] text-[0.875rem] text-bg-white md:flex-col md:items-center md:justify-center md:pl-[2.5rem] md:pr-[2.5rem] md:box-border mq420:pl-[0rem] mq420:pr-[0rem] mq420:box-border">
            <div className="w-[26.25rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1.125rem] min-w-[18.75rem] md:self-stretch md:w-auto">
              <div className="rounded-2xl bg-colors-cyan-800 flex flex-row items-center justify-center py-[0.125rem] px-[0.5rem]">
                <div className="relative leading-[1.25rem] mq420:text-[0.75rem]">
                  주요행사
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[1rem] max-w-[26.25rem] text-left text-[0.75rem] text-text-text-small-light md:max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[1rem]">2023-12-03</div>
                  <b className="w-full relative text-[1rem] leading-[1.5rem] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[26.25rem] md:max-w-full mq420:text-[0.813rem]">
                    [기획세미나] 정부광고제도 합리화를 위한 법제 및 집행 개선
                    방안 (유튜브 중계 링크 포함)
                  </b>
                </div>
                <div className="w-full relative text-[0.875rem] leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-w-[26.25rem] md:max-w-full">
                  일정표는 첨부된 PDF 파일을 통해 확인 부탁 드립니다.
                  정부광고제도 합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계
                  링크 포함). 정부광고제도 합리화를 위한 법제 및 집행 개선 방안
                  (유튜브 중계 링크 포함)
                </div>
              </div>
            </div>
            <div className="w-[26.25rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1.125rem] min-w-[18.75rem] md:self-stretch md:w-auto">
              <div className="rounded-2xl bg-colors-cyan-800 flex flex-row items-center justify-center py-[0.125rem] px-[0.5rem]">
                <div className="relative leading-[1.25rem] mq420:text-[0.75rem]">
                  주요행사
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[1rem] max-w-[26.25rem] text-left text-[0.75rem] text-text-text-small-light md:max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[1rem]">2023-12-03</div>
                  <b className="w-full relative text-[1rem] leading-[1.5rem] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[26.25rem] md:max-w-full mq420:text-[0.813rem]">
                    [기획세미나] 정부광고제도 합리화를 위한 법제 및 집행 개선
                    방안 (유튜브 중계 링크 포함)
                  </b>
                </div>
                <div className="w-full relative text-[0.875rem] leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-w-[26.25rem] md:max-w-full">
                  일정표는 첨부된 PDF 파일을 통해 확인 부탁 드립니다.
                  정부광고제도 합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계
                  링크 포함). 정부광고제도 합리화를 위한 법제 및 집행 개선 방안
                  (유튜브 중계 링크 포함)
                </div>
              </div>
            </div>
            <div className="w-[26.25rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1.125rem] min-w-[18.75rem] md:self-stretch md:w-auto">
              <div className="rounded-2xl bg-colors-cyan-800 flex flex-row items-center justify-center py-[0.125rem] px-[0.5rem]">
                <div className="relative leading-[1.25rem] mq420:text-[0.75rem]">
                  주요행사
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[1rem] max-w-[26.25rem] text-left text-[0.75rem] text-text-text-small-light md:max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[1rem]">2023-12-03</div>
                  <b className="w-full relative text-[1rem] leading-[1.5rem] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[26.25rem] md:max-w-full mq420:text-[0.813rem]">
                    [기획세미나] 정부광고제도 합리화를 위한 법제 및 집행 개선
                    방안 (유튜브 중계 링크 포함)
                  </b>
                </div>
                <div className="w-full relative text-[0.875rem] leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-w-[26.25rem] md:max-w-full">
                  일정표는 첨부된 PDF 파일을 통해 확인 부탁 드립니다.
                  정부광고제도 합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계
                  링크 포함). 정부광고제도 합리화를 위한 법제 및 집행 개선 방안
                  (유튜브 중계 링크 포함)
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-[0.375rem] px-[1rem] bg-[transparent] rounded-xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-button-colors-dark-sky hover:bg-gainsboro-100">
            <div className="relative text-[0.75rem] leading-[1rem] font-headings-heading-3 text-button-colors-dark-sky text-center mq420:text-[0.688rem]">
              더보기
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch bg-colors-gray-300 flex flex-col items-center justify-start min-h-[31.25rem] text-text-colors-gray">
        <div className="self-stretch bg-bg-light flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border w-full">
          <div className="w-full rounded-lg overflow-hidden flex flex-row items-center justify-center py-[5.625rem] px-[0rem] box-border gap-[0.5rem] max-w-[81.25rem] md:flex-col md:gap-[1rem] md:items-center md:justify-start sm:pt-[3.75rem] sm:pb-[3.75rem] sm:box-border mq420:pt-[3.75rem] mq420:pb-[3.75rem] mq420:box-border">
            <div className="flex-1 flex flex-row items-center justify-center md:flex-[unset] md:self-stretch">
              <img
                className="w-[15rem] relative h-[21.775rem] object-cover"
                alt=""
                src="/dbpiaimg@2x.png"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[2.25rem] md:items-start md:justify-start md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem]">
                <b className="self-stretch relative leading-[2.5rem] md:text-center sm:text-[1.625rem] mq420:text-[1.5rem]">
                  사이버커뮤니케이션 학보
                </b>
                <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-text-text-small-light md:items-center md:justify-center mq420:flex-col mq420:items-center mq420:justify-start">
                  <div className="relative leading-[1.25rem] md:text-left sm:text-[0.813rem]">
                    사이버커뮤니케이션학회 제1호(1997)
                  </div>
                  <div className="relative leading-[1.25rem] md:text-left sm:text-[0.813rem]">
                    제40권 제4호(2023) KCI등재
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] md:items-start md:justify-center">
                <button className="cursor-pointer py-[0.875rem] px-[1.75rem] bg-[transparent] rounded-md overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-button-colors-dark-sky hover:bg-gainsboro-100 sm:py-[0.5rem] sm:px-[1rem] sm:box-border">
                  <div className="relative text-[1rem] leading-[1.5rem] font-headings-heading-3 text-button-colors-dark-sky text-center sm:text-[0.813rem]">
                    논문투고 안내
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-[0.875rem] px-[1.75rem] bg-text-colors-amber rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue sm:py-[0.5rem] sm:px-[1rem] sm:box-border">
                  <div className="relative text-[1rem] leading-[1.5rem] font-headings-heading-3 text-bg-white text-center sm:text-[0.813rem]">
                    온라인 논문투고
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-bg-white flex flex-col items-center justify-start min-h-[31.25rem] text-center text-[1rem] text-text-hint-text">
        <div className="self-stretch bg-bg-white flex flex-col items-center justify-start py-[6.875rem] px-[1.25rem] box-border gap-[2.25rem] w-full sm:pl-[0rem] sm:pr-[0rem] sm:box-border mq420:pl-[0rem] mq420:pr-[0rem] mq420:box-border">
          <div className="w-full bg-bg-white overflow-hidden flex flex-col items-center justify-start gap-[2.875rem] max-w-[81.25rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.125rem]">
              <b className="w-[81.25rem] relative leading-[1.5rem] hidden mq420:text-[0.688rem]">
                CYBERCOMMUNICATION ACADEMIC SOCIETY
              </b>
              <b className="self-stretch relative text-[2.25rem] leading-[2.5rem] text-text-colors-gray sm:text-[1.625rem] mq420:text-[1.5rem]">
                학회 갤러리
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.375rem] text-left text-text-text-small-light md:flex-col">
              <div className="flex-1 flex flex-col items-start justify-start md:flex-[unset] md:self-stretch">
                <div className="self-stretch rounded bg-bg-light overflow-hidden flex flex-col items-center justify-start p-[1.25rem] gap-[1.25rem] sm:pl-[1.25rem] sm:box-border mq420:p-[1.25rem] mq420:box-border">
                  <img
                    className="self-stretch relative rounded-10xs max-w-full overflow-hidden h-[25.188rem] shrink-0 object-cover sm:w-[100%!important] sm:h-[auto!important]"
                    alt=""
                    src="/img@2x.png"
                  />
                  <div className="self-stretch h-[5.625rem] flex flex-col items-start justify-start gap-[0.375rem]">
                    <b className="self-stretch relative leading-[1.5rem] mq420:text-[0.875rem]">
                      2024 봄철 정기학술대회 사진모음
                    </b>
                    <div className="self-stretch relative text-[0.875rem] leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq420:text-[0.75rem]">
                      3줄 이상의 컨텐츠 -2024 봄철 정기학술대회를
                      진행하였습니다. 2024 봄철 정기학술대회를 진행하였습니다.
                      2024 봄철 정기학술대회를 진행하였습니다. 2024 봄철
                      정기학술대회를 진행하였습니다. 2024 봄철 정기학술대회를
                      진행하였습니다.2024 봄철 정기학술대회를
                      진행하였습니다.2024 봄철 정기학술대회를
                      진행하였습니다.2024 봄철 정기학술대회...
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[1.25rem] md:flex-[unset] md:self-stretch mq420:gap-[0.5rem]">
                <div className="self-stretch rounded bg-bg-light h-[10.688rem] overflow-hidden shrink-0 flex flex-row items-start justify-center p-[1.25rem] box-border gap-[1.375rem] mq420:gap-[1rem] mq420:p-[1.25rem] mq420:box-border">
                  <img
                    className="self-stretch flex-1 relative rounded-10xs max-w-[15rem] overflow-hidden max-h-full object-cover sm:w-[100%!important] sm:h-[auto!important]"
                    alt=""
                    src="/img@2x.png"
                  />
                  <div className="flex-1 h-[8.188rem] overflow-hidden flex flex-col items-start justify-start gap-[0.375rem]">
                    <b className="self-stretch relative leading-[1.5rem] inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.5rem] shrink-0 mq420:text-[0.813rem]">
                      2024 봄철 정기학술대회 사진모음
                    </b>
                    <div className="self-stretch relative text-[0.875rem] leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq420:text-[0.75rem]">
                      3줄 이상의 컨텐츠 -2024 봄철 정기학술대회를
                      진행하였습니다. 2024 봄철 정기학술대회를 진행하였습니다.
                      2024 봄철 정기학술대회를 진행하였습니다. 2024 봄철
                      정기학술대회를 진행하였습니다.2024 봄철 정기학술대회를
                      진행하였습니다. 2024 봄철 정. 2024 봄철 정기학기. 2024
                      봄철 정기학. 2024 봄철 정기학학술대회...
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded bg-bg-light h-[10.688rem] overflow-hidden shrink-0 flex flex-row items-start justify-center p-[1.25rem] box-border gap-[1.375rem] mq420:gap-[1rem] mq420:p-[1.25rem] mq420:box-border">
                  <img
                    className="self-stretch flex-1 relative rounded-10xs max-w-[15rem] overflow-hidden max-h-full object-cover sm:w-[100%!important] sm:h-[auto!important]"
                    alt=""
                    src="/img@2x.png"
                  />
                  <div className="flex-1 h-[8.188rem] overflow-hidden flex flex-col items-start justify-start gap-[0.375rem]">
                    <b className="self-stretch relative leading-[1.5rem] inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.5rem] shrink-0 mq420:text-[0.813rem]">
                      2024 봄철 정기학술대회 사진모음
                    </b>
                    <div className="self-stretch relative text-[0.875rem] leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq420:text-[0.75rem]">
                      3줄 이상의 컨텐츠 -2024 봄철 정기학술대회를
                      진행하였습니다. 2024 봄철 정기학술대회를 진행하였습니다.
                      2024 봄철 정기학술대회를 진행하였습니다. 2024 봄철
                      정기학술대회를 진행하였습니다.2024 봄철 정기학술대회를
                      진행하였습니다. 2024 봄철 정. 2024 봄철 정기학기. 2024
                      봄철 정기학. 2024 봄철 정기학학술대회...
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded bg-bg-light h-[10.688rem] overflow-hidden shrink-0 flex flex-row items-start justify-center p-[1.25rem] box-border gap-[1.375rem] sm:pl-[1.375rem] sm:box-border mq420:gap-[1rem] mq420:p-[1.25rem] mq420:box-border">
                  <img
                    className="self-stretch flex-1 relative rounded-10xs max-w-[15rem] overflow-hidden max-h-full object-cover sm:w-[100%!important] sm:h-[auto!important]"
                    alt=""
                    src="/img@2x.png"
                  />
                  <div className="flex-1 h-[8.188rem] overflow-hidden flex flex-col items-start justify-start gap-[0.375rem]">
                    <b className="self-stretch relative leading-[1.5rem] inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[1.5rem] shrink-0 mq420:text-[0.813rem]">
                      2024 봄철 정기학술대회 사진모음
                    </b>
                    <div className="self-stretch relative text-[0.875rem] leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] mq420:text-[0.75rem]">
                      3줄 이상의 컨텐츠 -2024 봄철 정기학술대회를
                      진행하였습니다. 2024 봄철 정기학술대회를 진행하였습니다.
                      2024 봄철 정기학술대회를 진행하였습니다. 2024 봄철
                      정기학술대회를 진행하였습니다.2024 봄철 정기학술대회를
                      진행하였습니다. 2024 봄철 정. 2024 봄철 정기학기. 2024
                      봄철 정기학. 2024 봄철 정기학학술대회...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-[0.375rem] px-[1rem] bg-[transparent] rounded-xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-button-colors-dark-sky hover:bg-gainsboro-100">
            <div className="relative text-[0.75rem] leading-[1rem] font-headings-heading-3 text-button-colors-dark-sky text-center mq420:text-[0.688rem]">
              더보기
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch bg-colors-green-300 flex flex-col items-center justify-start min-h-[13.125rem]">
        <footer className="self-stretch bg-bg-light flex flex-row items-start justify-center py-[2.25rem] px-[1.25rem] box-border w-full text-left text-[0.875rem] text-text-text-small-light font-headings-heading-3 md:flex-col md:pt-[2.5rem] md:px-[1.5rem] md:pb-[1.875rem] md:box-border sm:py-[1.875rem] sm:px-[1.5rem] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem] md:flex-[unset] md:self-stretch">
            <div className="w-full flex flex-row items-start justify-start gap-[0.5rem] max-w-[81.25rem] mq420:flex-col mq420:gap-[0.5rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.875rem] !mb-[40px] mq420:flex-[unset] mq420:self-stretch">
                <img
                  className="w-[12.5rem] relative h-[3.5rem] object-cover"
                  alt=""
                  src="/logo@2x.png"
                />
                <div className="w-[13.625rem] h-[1.75rem] relative inline-block sm:text-[0.813rem] mq420:text-[0.813rem]">
                  <p className="m-0">{`사이버 공간 커뮤니케이션에 대한 `}</p>
                  <p className="m-0">학제적 연구에 중점을 두고 있습니다.</p>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[1.25rem] md:self-stretch md:h-auto md:flex-col sm:gap-[1.25rem] mq420:gap-[1.25rem] mq420:flex-[unset] mq420:self-stretch">
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.875rem] md:flex-[unset] md:self-stretch">
                  <b className="self-stretch relative text-[1rem] sm:font-bold sm:font-sub-sub-item sm:text-[0.875rem] mq420:text-[0.875rem]">{`관련 사이트 `}</b>
                  <div className="self-stretch h-[0.875rem] relative inline-block sm:text-[0.813rem] mq420:text-[0.813rem]">
                    국민권익위원회
                  </div>
                  <div className="self-stretch relative sm:text-[0.813rem] mq420:text-[0.813rem]">
                    한국연구재단
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.875rem] md:flex-[unset] md:self-stretch">
                  <b className="self-stretch relative text-[1rem] sm:font-bold sm:font-sub-sub-item sm:text-[0.875rem] mq420:text-[0.875rem]">
                    회원 약관
                  </b>
                  <div className="self-stretch relative sm:text-[0.813rem] mq420:text-[0.813rem]">
                    이용약관
                  </div>
                  <div className="self-stretch relative sm:text-[0.813rem] mq420:text-[0.813rem]">
                    개인정보처리방침
                  </div>
                  <div className="self-stretch relative sm:text-[0.813rem] mq420:text-[0.813rem]">
                    이메일무단수집거부
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.875rem] md:flex-[unset] md:self-stretch">
                  <b className="self-stretch relative text-[1rem] sm:font-bold sm:font-sub-sub-item sm:text-[0.875rem] mq420:text-[0.875rem]">
                    학회 주소
                  </b>
                  <div className="self-stretch relative sm:text-[0.813rem] mq420:text-[0.813rem]">
                    서울특별시 노원구 광운로 20
                  </div>
                  <div className="self-stretch relative sm:text-[0.813rem]">
                    한울관 721호 (월계동) 
                  </div>
                  <div className="self-stretch relative sm:text-[0.813rem] mq420:text-[0.813rem]">
                    cybercom2013@naver.com
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center text-center">
              <div className="relative sm:text-[0.813rem] sm:text-left mq420:text-[0.813rem]">
                Copyright © 2023 by cybercom. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SkeletonMainExample;
