import React from "react";
import Header from "../components/GetStarted/Header";
import Main from "../components/GetStarted/main/Main";
import Navbar from "../components/GetStarted/Navbar";

const GetStarted = ({ lang, setLang }: any) => {
  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Header />
      <Main />
    </div>
  );
};

export default GetStarted;
