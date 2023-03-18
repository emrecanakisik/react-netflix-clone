import React, { FC } from "react";
import { getStartedPageLang } from "../../contexts/GetStartedLangContext";
import { useNavigate } from "react-router-dom";
import { loginPageLang } from "../../contexts/LoginLangContext";

type lang = {
  isLang: string;
  setIsLang: string;
  setGSLang: string;
  page: "GetStarted" | "Login";
  setLoginLang: any;
};

const SelectLang: FC<lang> = ({
  isLang,
  setIsLang,
  setGSLang,
  setLoginLang,
  page,
}: any) => {
  const className = "bg-gray-500 text-white";
  const navigate = useNavigate();

  const switchLang = (selectedLang: string) => {
    if (selectedLang === "English") {
      setIsLang(selectedLang);
      setGSLang(getStartedPageLang.english);
      setLoginLang(loginPageLang.english);
      page === "GetStarted" && navigate("/nl-en");
    } else {
      setIsLang(selectedLang);
      setGSLang(getStartedPageLang.nederlands);
      setLoginLang(loginPageLang.nederlands);
      page === "GetStarted" && navigate("/nl");
    }
  };

  return (
    <div className="relative langSelect border inline-flex max-w-[7.75rem] justify-between items-center mr-8 rounded">
      <select
        name=""
        id="langSel"
        defaultValue="English"
        value={isLang}
        onChange={(e) => switchLang(e.target.value)}
        className="lang-select flex-1 outline-none appearance-none w-100 py-2 px-6 te text-white text-center text-sm font-normal bg-transparent focus:outline-white focus:outline-offset-0 rounded"
      >
        <option value="English" className={className}>
          English
        </option>
        <option value="Spanish" className={className}>
          Nederlands
        </option>
      </select>
    </div>
  );
};

export default SelectLang;
