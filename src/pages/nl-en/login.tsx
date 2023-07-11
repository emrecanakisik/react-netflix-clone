import React, { useContext, useEffect } from "react";
import Login from "../main-pages/Login";
import { Contexts, LangContext } from "../../contexts/LangContext";

const login = () => {
  const { isLang, setIsLang } = useContext(Contexts);

  useEffect(() => {
    isLang.lang === "Nederlands" &&
      setIsLang({ lang: "English", context: LangContext.English });
    console.log(isLang.lang);
  }, []);
  return <Login />;
};

export default login;
