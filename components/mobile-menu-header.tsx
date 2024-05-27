import type { NextPage } from "next";

export type MobileMenuHeaderType = {
  className?: string;
};

const MobileMenuHeader: NextPage<MobileMenuHeaderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[960px] max-w-full h-[62px] flex flex-row items-center justify-between py-0 px-4 box-border ${className}`}
    >
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
  );
};

export default MobileMenuHeader;
