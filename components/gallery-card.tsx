import type { NextPage } from "next";

export type GalleryCardType = {
  className?: string;
  image?: string;
  datetime?: string;
  title?: string;
};

const GalleryCard: NextPage<GalleryCardType> = ({
  className = "",
  image,
  datetime,
  title,
}) => {
  return (
    <div
      className={`rounded bg-bg-light box-border overflow-hidden flex flex-col items-center justify-start text-left text-sm text-text-text-small-light font-body-text-smaller-text flex-1 border-[1px] border-solid border-bg-light-border hover:animate-[0.2s_ease-in_0s_1_normal_forwards_custom-animation] hover:opacity-[1] ${className}`}
    >
      <img
        className="self-stretch relative rounded-10xs max-w-full overflow-hidden h-[300px] shrink-0 object-cover sm:max-w-full mq420:max-w-full"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-start justify-start py-2 px-4">
        <div className="self-stretch h-[47px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[3px]">
          <div className="self-stretch relative leading-[20px] mq420:text-xs">
            {datetime}
          </div>
          <b className="self-stretch relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap h-6 shrink-0 sm:text-base mq420:text-sm mq420:leading-[24px]">
            {title}
          </b>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
