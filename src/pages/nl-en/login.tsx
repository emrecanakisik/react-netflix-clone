import React, { useContext, useEffect } from "react";
import Login from "../main-pages/Login";
import { Contexts, LangContext } from "../../contexts/LangContext";

const login = () => {
  const { setIsLang } = useContext(Contexts);

  useEffect(() => {
    setIsLang({ lang: "English", context: LangContext.English });
    localStorage.setItem("selectedLang", "English");
  }, []);
  return <Login />;
};

export default login;
