import React, { FC, useState } from "react";

type loginInput = {
  inputType: string;
  id: string;
  labelContent: string;
  spanContent?: string;
  value: string;
  setValue: any;
};

const LoginInput: FC<loginInput> = ({
  inputType,
  id,
  labelContent,
  spanContent,
  value,
  setValue,
}) => {
  const [spanState, setSpanState] = useState(false);
  const inputControl = (e: any) => {
    if (e.target.value === "" || e.target.value.length <= 5) {
      e.target.classList.add("border-errorRed", "border-b-2");
      setSpanState(true);
    } else {
      e.target.classList.remove("border-errorRed", "border-b-2");
      setSpanState(false);
    }
  };

  const inputCharacterControl = (e: any) => {
    setValue(e.target.value);
    if (e.target.value.length > 5) {
      e.target.classList.remove("border-errorRed", "border-b-2");
      setSpanState(false);
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center relative w-full rounded overflow-hidden">
        <input
          type={inputType}
          name=""
          id={id}
          value={value}
          onBlur={(e) => inputControl(e)}
          onChange={(e) => inputCharacterControl(e)}
          className="w-full px-5 pt-6 peer focus:outline-0 focus:bg-inputHoverGray bg-inputGray"
        />

        <label
          htmlFor={id}
          className={`absolute text-NetflixMidGray peer-focus:font-medium left-5 peer-focus:text-[11px] peer-focus:top-2 duration-100 ${
            value !== "" && "top-2 text-[11px] font-medium"
          }`}
        >
          {labelContent}
        </label>
      </div>
      {spanState && (
        <span className="text-[13px] text-errorRed px-1 py-[0.375rem]">
          {spanContent}
        </span>
      )}
    </div>
  );
};

export default LoginInput;
