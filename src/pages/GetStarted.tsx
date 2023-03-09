import React from "react";
import Header from "../components/GetStarted/Header";
import Navbar from "../components/GetStarted/Navbar";

const GetStarted = ({ lang, setLang }: any) => {
  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Header />
    </div>
  );
};

export default GetStarted;
