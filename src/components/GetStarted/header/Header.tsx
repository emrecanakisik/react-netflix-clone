import React, { useContext } from "react";
import { Contexts } from "../../../contexts/LangContext";
import EmailForm from "../EmailForm";

const Header = () => {
  const { isLang } = useContext(Contexts);
  const header = isLang.context.GSLang.header;

  return (
    <header className="relative w-full h-737 overflow-hidden">
      <div className="img-box h-full w-full absolute top-0">
        <div className="absolute bg-gradient-to-b from-black via-[rgba(0,0,0,.4)] to-black w-full h-full"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/fa281d8e-aecc-47e8-81aa-caa5889085b1/NL-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="title-email relative text-white mx-96 px-48  text-center mt-64">
        {/* mt-64 */}
        <h1 className="text-[64px] font-medium leading-[70px]">{header.H1}</h1>
        <h2 className="text-[26px] py-4">{header.H2}</h2>
        <EmailForm emailBoxId={1} />
      </div>
    </header>
  );
};

export default Header;
