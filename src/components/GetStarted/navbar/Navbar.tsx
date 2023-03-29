import React, { FC, useContext } from "react";
import { Contexts } from "../../../contexts/LangContext";
import NetflixLogo from "../../NetflixLogo";
import SelectLang from "../SelectLang";
import SingInBtn from "./SingInBtn";
type lang = {
  isLang: string;
  setIsLang: string;
  setGSLang: string;
  setLoginLang: string;
};

const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full left-0 flex justify-between items-center px-14 pt-7">
      <NetflixLogo />
      <div className="lang-signin">
        <SelectLang page="GetStarted" />
        <SingInBtn />
      </div>
    </nav>
  );
};

export default Navbar;
