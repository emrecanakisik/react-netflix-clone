import React, { useContext, useEffect } from "react";
import GetStarted from "../main-pages/GetStarted";
import { Contexts, LangContext } from "../../contexts/LangContext";

const Nl = () => {
  const { isLang, setIsLang } = useContext(Contexts);

  useEffect(() => {
    setIsLang({ lang: "Nederlands", context: LangContext.Nederlands });
    localStorage.setItem("selectedLang", "Nederlands");
  }, []);

  return <GetStarted />;
};

export default Nl;
