import React, { useContext, useEffect } from "react";
import GetStarted from "../main-pages/GetStarted";
import { Contexts, LangContext } from "../../contexts/LangContext";

const Nl = () => {
  const { isLang, setIsLang } = useContext(Contexts);

  useEffect(() => {
    isLang.lang === "English" &&
      setIsLang({ lang: "Nederlands", context: LangContext.Nederlands });
    console.log(isLang.lang);
  }, []);

  return <GetStarted />;
};

export default Nl;
