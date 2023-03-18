import React from "react";
import Header from "../components/GetStarted/header/Header";
import Main from "../components/GetStarted/main/Main";
import Navbar from "../components/GetStarted/navbar/Navbar";
import FAQ from "../components/GetStarted/FAQ/FAQ";
import Footer from "../components/GetStarted/footer/Footer";
import GSLangContProv from "../contexts/GetStartedLangContext";

const GetStarted = ({
  isLang,
  setIsLang,
  GSLang,
  setGSLang,
  loginLang,
  setLoginLang,
}: any) => {
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
