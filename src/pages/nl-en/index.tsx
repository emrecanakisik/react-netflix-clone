import React, { useContext, useEffect } from "react";
import GetStarted from "../main-pages/GetStarted";
import { Contexts, LangContext } from "../../contexts/LangContext";

const Nl_en = () => {
  const { isLang, setIsLang } = useContext(Contexts);

  useEffect(() => {
    isLang.lang === "Nederlands" &&
      setIsLang({ lang: "English", context: LangContext.English });
    console.log(isLang.lang);
  }, []);
  return <GetStarted />;
};

export default Nl_en;
