import React, { useContext, useEffect } from "react";
import GetStarted from "../main-pages/GetStarted";
import { Contexts, LangContext } from "../../contexts/LangContext";

const Nl_en = () => {
  const { isLang, setIsLang } = useContext(Contexts);

  useEffect(() => {
    setIsLang({ lang: "English", context: LangContext.English });
    localStorage.setItem("selectedLang", "English");
  }, []);
  return <GetStarted />;
};

export default Nl_en;
