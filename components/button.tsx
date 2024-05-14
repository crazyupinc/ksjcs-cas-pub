import type { NextPage } from "next";

const Button: NextPage = () => {
  return (
    <button className="cursor-pointer [border:none] py-3.5 px-7 bg-button-colors-dark-sky rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue sm:py-2.5 sm:px-4 sm:box-border mq350small:py-2.5 mq350small:px-4 mq350small:box-border">
      <div className="relative text-base leading-[24px] font-headings-headling-2 text-bg-colors-white text-center sm:text-smi mq350small:text-smi">
        Button
      </div>
    </button>
  );
};

export default Button;
