import React, { useContext } from "react";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";
import SelectLang from "../SelectLang";
import FooterItem from "./FooterItem";

const Footer = ({ isLang, setIsLang, setLang }: any) => {
  const footer = useContext(GSLangContext).footer;
  return (
    <footer className="px-[31.9697rem] py-10 flex flex-col text-NetflixMidGray bg-black">
      <div className="mb-7">
        {footer.phoneNumForQues.title}
        <a href="#" className="hover:underline">
          {footer.phoneNumForQues.number}
        </a>
      </div>
      <ul className="footer-items flex flex-wrap">
        {footer.items.map((item, index) => (
          <FooterItem title={item} key={index} />
        ))}
      </ul>
      <SelectLang isLang={isLang} setIsLang={setIsLang} setLang={setLang} />
      <p className="my-3 text-sm font-medium">Netflix Nederlands</p>
    </footer>
  );
};

export default Footer;
