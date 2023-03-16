import React, { FC } from "react";
import NetflixLogo from "../../NetflixLogo";
import SelectLang from "./SelectLang";
import SingInBtn from "./SingInBtn";
type lang = { setLang: string; isLang: string; setIsLang: string };

const Navbar: FC<lang> = ({ setLang, isLang, setIsLang }) => {
  return (
    <nav className="absolute z-10 w-full left-0 flex justify-between items-center px-14 pt-7">
      <NetflixLogo />
      <div className="lang-signin">
        <SelectLang isLang={isLang} setIsLang={setIsLang} setLang={setLang} />
        <SingInBtn />
      </div>
    </nav>
  );
};

export default Navbar;
