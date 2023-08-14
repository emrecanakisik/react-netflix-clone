import React, { useContext, useEffect } from "react";
import Login from "../main-pages/Login";
import { Contexts, LangContext } from "../../contexts/LangContext";

const login = () => {
  const { setIsLang } = useContext(Contexts);

  useEffect(() => {
    setIsLang({ lang: "Nederlands", context: LangContext.Nederlands });
    localStorage.setItem("selectedLang", "Nederlands");
  }, []);
  return <Login />;
};

export default login;
