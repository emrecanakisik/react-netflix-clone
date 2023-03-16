import React from "react";
import Header from "../components/GetStarted/header/Header";
import Main from "../components/GetStarted/main/Main";
import Navbar from "../components/GetStarted/header/Navbar";
import FAQ from "../components/GetStarted/FAQ/FAQ";
import Footer from "../components/GetStarted/footer/Footer";
import GSLangContProv from "../contexts/GetStartedLangContext";

const GetStarted = ({ isLang, setIsLang, setLang, lang }: any) => {
  return (
    <GSLangContProv provValue={lang}>
      <Navbar isLang={isLang} setIsLang={setIsLang} setLang={setLang} />
      <Header />
      <Main />
      <FAQ />
      <Footer isLang={isLang} setIsLang={setIsLang} setLang={setLang} />
    </GSLangContProv>
  );
};

export default GetStarted;
