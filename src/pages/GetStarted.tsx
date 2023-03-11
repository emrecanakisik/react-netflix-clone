import React from "react";
import Header from "../components/GetStarted/header/Header";
import Main from "../components/GetStarted/main/Main";
import Navbar from "../components/GetStarted/header/Navbar";
import FAQ from "../components/GetStarted/FAQ/FAQ";

const GetStarted = ({ lang, setLang }: any) => {
  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Header />
      <Main />
      <FAQ />
    </div>
  );
};

export default GetStarted;
