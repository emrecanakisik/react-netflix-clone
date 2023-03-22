import React, { FC } from "react";
import { langprops } from "../../../App";
import NetflixLogo from "../../NetflixLogo";
import SelectLang from "../SelectLang";
import SingInBtn from "./SingInBtn";
type lang = {
  isLang: string;
  setIsLang: string;
  setGSLang: string;
  setLoginLang: string;
};

const Navbar: FC<langprops> = ({
  setGSLang,
  setLoginLang,
  isLang,
  setIsLang,
}) => {
  return (
    <nav className="absolute z-10 w-full left-0 flex justify-between items-center px-14 pt-7">
      <NetflixLogo />
      <div className="lang-signin">
        <SelectLang
          isLang={isLang}
          setIsLang={setIsLang}
          setGSLang={setGSLang}
          setLoginLang={setLoginLang}
          page="GetStarted"
        />
        <SingInBtn />
      </div>
    </nav>
  );
};

export default Navbar;
