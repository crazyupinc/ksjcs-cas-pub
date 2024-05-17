import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PaymentItemsType = {
  membershipFee?: string;
  showPrice?: boolean;
  price?: string;

  /** Style props */
  priceAlignSelf?: CSSProperties["alignSelf"];
  priceWidth?: CSSProperties["width"];
};

const PaymentItems: NextPage<PaymentItemsType> = ({
  membershipFee,
  showPrice,
  priceAlignSelf,
  priceWidth,
  price,
}) => {
  const priceStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: priceAlignSelf,
      width: priceWidth,
    };
  }, [priceAlignSelf, priceWidth]);

  return (
    <div className="bg-colors-blue-50 box-border max-w-full overflow-hidden flex flex-col items-start justify-center min-w-[200px] text-left text-sm text-text-title-small font-headings-headling-2 self-stretch border-[1px] border-solid border-bg-light-border sm:flex-col sm:items-start sm:justify-center">
      <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
        <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] mq420:flex-col">
          <div className="flex flex-col items-start justify-center gap-[3px] mq420:self-stretch mq420:w-auto mq420:pl-4 mq420:box-border">
            <b className="self-stretch relative leading-[20px] md:w-[200px] mq420:text-sm">
              {membershipFee}
            </b>
            {showPrice && (
              <div
                className="self-stretch relative leading-[20px] text-text-text-small-light"
                style={priceStyle}
              >
                최초 학회 가입 시
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col items-end justify-center text-text-text-small-light mq420:pr-4 mq420:box-border mq420:flex-[unset] mq420:self-stretch">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[20px]">
                <span>
                  <span>금액</span>
                  <span className="text-text-text-small-light">{` `}</span>
                </span>
                <b className="text-button-colors-dark-sky">{price}</b>
              </div>
              <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentItems;
