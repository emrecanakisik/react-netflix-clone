import React from "react";
import NetflixLogo from "../NetflixLogo";
import SelectLang from "./SelectLang";
import SingInBtn from "./SingInBtn";

const Navbar = ({ lang, setLang }: any) => {
  return (
    <nav className="absolute z-10 w-full left-0 flex justify-between items-center px-14 pt-7">
      <NetflixLogo />
      <div className="lang-signin">
        <SelectLang lang={lang} setLang={setLang} />
        <SingInBtn />
      </div>
    </nav>
  );
};

export default Navbar;
