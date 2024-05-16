import type { NextPage } from "next";

export type InputFieldType = {
  inputFieldPlaceholder?: string;
};

const InputField: NextPage<InputFieldType> = ({ inputFieldPlaceholder }) => {
  return (
    <input
      className="[outline:none] font-body-text-normal-text text-[0.875rem] bg-bg-white self-stretch rounded flex flex-col items-start justify-start py-[0.625rem] px-[0.875rem] text-text-dark-gray border-[1px] border-solid border-bg-light-border"
      placeholder={inputFieldPlaceholder}
      type="text"
    />
  );
};

export default InputField;
