import React, { useContext, useEffect } from "react";
import Login from "../main-pages/Login";
import { Contexts, LangContext } from "../../contexts/LangContext";

const login = () => {
  const { isLang, setIsLang } = useContext(Contexts);

  useEffect(() => {
    isLang.lang === "English" &&
      setIsLang({ lang: "Nederlands", context: LangContext.Nederlands });
    console.log(isLang.lang);
  }, []);
  return <Login />;
};

export default login;
