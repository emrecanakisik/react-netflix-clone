import React from "react";
import SelectLang from "../SelectLang";
import SingInBtn from "./SingInBtn";
import LogoIcon from "@/components/LogoIcon";
type lang = {
  isLang: string;
  setIsLang: string;
  setGSLang: string;
  setLoginLang: string;
};

const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full left-0 flex justify-between items-center px-14 pt-7">
      <LogoIcon
        Name="NetflixLogo"
        viewBox="0,0,111,30"
        group={false}
        width="10vw"
        classNameSVG="fill-red-600"
      />
      <div className="lang-signin">
        <SelectLang page="GetStarted" />
        <SingInBtn />
      </div>
    </nav>
  );
};

export default Navbar;
