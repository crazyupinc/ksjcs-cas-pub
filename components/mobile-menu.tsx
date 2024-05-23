import type { NextPage } from "next";
import MoButton from "./mo-button";
import MoMenuItemClose from "./mo-menu-item-close";
import MoMenuSubItem from "./mo-menu-sub-item";
import MoMenuItemOpen from "./mo-menu-item-open";

export type MobileMenuType = {
  className?: string;
};

const MobileMenu: NextPage<MobileMenuType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[960px] bg-bg-white max-w-full overflow-y-auto flex flex-col items-start justify-start min-w-[360px] ${className}`}
    >
      <div className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start">
        <div className="self-stretch bg-colors-blue-950 flex flex-col items-start justify-start pt-0 px-0 pb-5">
          <div className="self-stretch h-[62px] flex flex-row items-center justify-between py-0 px-4 box-border">
            <img
              className="w-10 relative h-[38px] object-cover"
              alt=""
              src="/logo-2@2x.png"
            />
            <img
              className="w-[26px] relative h-[26px]"
              alt=""
              src="/iconxwhitelarge.svg"
            />
          </div>
          <div className="self-stretch bg-colors-blue-950 flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch h-[42px] flex flex-row items-start justify-center py-0 px-4 box-border">
              <MoButton title="회원가입" moButtonBorder="1px solid #fafaf9" />
              <MoButton title="로그인" moButtonBorder="1px solid #fafaf9" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemClose
                  menuName="학회 소식"
                  iconChevronDownWhite="/iconchevrondownwhite1.svg"
                />
                <div className="w-[960px] bg-bg-primary-light hidden flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1 box-border">
                  <MoMenuSubItem
                    subMenuName="공지사항"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="주요행사"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="공모안내"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="학회앨범"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen
                  menuName="학회 소식"
                  iconChevronUpWhite="/iconchevronupwhite1.svg"
                />
                <div className="self-stretch bg-button-colors-dark-sky flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem
                    subMenuName="회장인사말"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="학회정관"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="선거관리규정"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="학회연혁"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="임원진"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen
                  menuName="학회 소개"
                  iconChevronUpWhite="/iconchevronupwhite1.svg"
                />
                <div className="self-stretch bg-button-colors-dark-sky flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem
                    subMenuName="공지사항"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="주요행사"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="공모안내"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="학회앨범"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen
                  menuName="학술지"
                  iconChevronUpWhite="/iconchevronupwhite1.svg"
                />
                <div className="self-stretch bg-button-colors-dark-sky flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem
                    subMenuName="논문검색"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="온라인 논문 투고"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="편집위원회"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="학술지 규정"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen
                  menuName="게시판"
                  iconChevronUpWhite="/iconchevronupwhite1.svg"
                />
                <div className="self-stretch bg-button-colors-dark-sky flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem
                    subMenuName="회원동정"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="채용정보"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="외부공모 및 행사안내"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen
                  menuName="회원 공간"
                  iconChevronUpWhite="/iconchevronupwhite1.svg"
                />
                <div className="self-stretch bg-button-colors-dark-sky flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem
                    subMenuName="회원가입안내"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="회원가입"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="연회비 납부현황"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="증명서 발급 안내"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="개인정보보호정책"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <MoMenuItemOpen
                  menuName="자료실"
                  iconChevronUpWhite="/iconchevronupwhite1.svg"
                />
                <div className="self-stretch bg-button-colors-dark-sky flex flex-row flex-wrap items-center justify-start py-2 pr-0 pl-1">
                  <MoMenuSubItem
                    subMenuName="학술대회 자료집"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="세미나 자료집"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="영상 자료실"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                  <MoMenuSubItem
                    subMenuName="사진 자료실"
                    moMenuSubItemBorderLeft="1px solid #fafaf9"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
