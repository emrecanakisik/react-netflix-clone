import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/GetStarted/header/Header";
import Main from "../../components/GetStarted/main/Main";
import Navbar from "../../components/GetStarted/navbar/Navbar";
import FAQ from "../../components/GetStarted/FAQ/FAQ";
import Footer from "../../components/GetStarted/footer/Footer";
import GSLangContProv from "../../contexts/GetStartedLangContext";
import { langprops } from "../../App";

const GetStarted: FC<langprops> = ({
  isLang,
  setIsLang,
  GSLang,
  setGSLang,
  setLoginLang,
}) => {
  const navigate = useNavigate();
  /* useEffect(() => {
    isLang === "English" ? navigate("/nl-en") : navigate("/nl");
  }, []); */
  return (
    <GSLangContProv provValue={GSLang}>
      <Navbar
        isLang={isLang}
        setIsLang={setIsLang}
        setGSLang={setGSLang}
        setLoginLang={setLoginLang}
      />
      <Header />
      <Main />
      <FAQ />
      <Footer
        isLang={isLang}
        setIsLang={setIsLang}
        setGSLang={setGSLang}
        setLoginLang={setLoginLang}
      />
    </GSLangContProv>
  );
};

export default GetStarted;
