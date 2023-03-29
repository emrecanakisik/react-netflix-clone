import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Contexts, LangContext } from "../../contexts/LangContext";

type selectedLangProp = { page: string };

const SelectLang: FC<selectedLangProp> = ({ page }) => {
  const { isLang, setIsLang } = useContext(Contexts);
  const className = "bg-gray-500 text-white";
  const navigate = useNavigate();
  let selectValue = isLang.lang;
  useEffect(() => {
    console.log(isLang);
  }, [isLang]);

  const switchLang = (selectedLang: string) => {
    if (selectedLang === "English") {
      page === "GetStarted" && navigate("/nl-en");
      page === "Login" && navigate("/nl-en/login");
      setIsLang({ lang: selectedLang, context: LangContext.English });
    } else {
      page === "GetStarted" && navigate("/nl");
      page === "Login" && navigate("/nl/login");
      setIsLang({ lang: selectedLang, context: LangContext.Nederlands });
    }
  };

  return (
    <div className="relative langSelect border inline-flex max-w-[7.75rem] justify-between items-center mr-8 rounded">
      <select
        name=""
        id="langSel"
        value={isLang.lang}
        onChange={(e) => switchLang(e.target.value)}
        className="lang-select flex-1 outline-none appearance-none w-100 py-2 px-6 te text-white text-center text-sm font-normal bg-transparent focus:outline-white focus:outline-offset-0 rounded"
      >
        <option value="English" className={className}>
          English
        </option>
        <option value="Nederlands" className={className}>
          Nederlands
        </option>
      </select>
    </div>
  );
};

export default SelectLang;
