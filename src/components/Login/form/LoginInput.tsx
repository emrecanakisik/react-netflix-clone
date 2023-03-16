import React, { FC, useState } from "react";

type loginInput = {
  inputType: string;
  id: string;
  labelContent: string;
  spanContent?: string;
};

const LoginInput: FC<loginInput> = ({
  inputType,
  id,
  labelContent,
  spanContent,
}) => {
  const [spanState, setSpanState] = useState(false);
  const inputControl = (e: any) => {
    if (e.target.value === "") {
      e.target.classList.add("border-red-500", "border-b-2");
      setSpanState(true);
    } else {
      e.target.classList.remove("border-red-500", "border-b-2");
      setSpanState(false);
    }
    console.log(e.target);
  };
  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center relative w-full rounded overflow-hidden border">
        <input
          type={inputType}
          name=""
          id={id}
          onBlur={(e) => inputControl(e)}
          className="w-full px-5 pt-6 peer focus:outline-0"
        />

        <label
          htmlFor={id}
          className="absolute left-5 peer-focus:text-[11px] peer-focus:top-2 peer-invalid:text-[11px] peer-invalid:top-2 duration-100"
        >
          {labelContent}
        </label>
      </div>
      {spanState && (
        <span className="text-[13px] px-1 py-[0.375rem]">{spanContent}</span>
      )}
    </div>
  );
};

export default LoginInput;
