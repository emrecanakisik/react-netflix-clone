import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/GetStarted/header/Header";
import Main from "../../components/GetStarted/main/Main";
import Navbar from "../../components/GetStarted/navbar/Navbar";
import FAQ from "../../components/GetStarted/FAQ/FAQ";
import Footer from "../../components/GetStarted/footer/Footer";
import { Contexts, LangContext } from "../../contexts/LangContext";

const GetStarted = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <FAQ />
      <Footer />
    </div>
  );
};

export default GetStarted;
