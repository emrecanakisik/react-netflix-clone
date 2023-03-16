import React, { FC, useContext } from "react";
import { GSLangContext } from "../../contexts/GetStartedLangContext";
type emailBox = { emailBoxId?: number };
const EmailForm: FC<emailBox> = ({ emailBoxId }) => {
  const form = useContext(GSLangContext).header.form;
  const mailBoxControl = (e: any) => {
    const mailBox = document.querySelector(
      `#gsEmailBox${emailBoxId}`
    ) as HTMLInputElement;
    console.log(mailBox?.value);
    mailBox?.value === "" ? mailBox.focus() : console.log(mailBox?.value);
    e.preventDefault();
  };
  return (
    <form className="w-[47rem]">
      <h3 className="text-[1.2rem] text-center pb-5 ">{form.Title}</h3>
      <div className="flex justify-center h-[4.375rem] rounded-sm overflow-hidden w-[95%] mx-auto">
        <div className="group focus-within:border-blue-600 input-box relative w-8/12 text-black px-[0.675rem] pt-[0.675rem] bg-white border border-gray-600 focus:border-blue-500">
          <input
            type="email"
            name=""
            id={`gsEmailBox${emailBoxId}`}
            className="GSHEmailbox w-full h-full focus:outline-none peer"
          />
          <label
            htmlFor={`gsEmailBox${emailBoxId}`}
            className="absolute left-[0.675rem] top-6 text-[#8C8C8C] duration-100 peer-focus:top-2 peer-focus:text-[0.8125rem] peer-focus:font-medium peer-invalid:top-2 peer-invalid:text-[0.8125rem] peer-invalid:font-medium"
          >
            {form.inputLabel}
          </label>
        </div>
        <button
          onClick={mailBoxControl}
          className="bg-NetflixRed text-3xl flex-1 flex justify-between items-center w-full px-[1.875rem]"
        >
          {form.btnTitle}
          <svg viewBox="0 0 6 12" width={11} className="ml-2 fill-white">
            <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
