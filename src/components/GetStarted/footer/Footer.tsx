import React, { useContext } from "react";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";
import FooterItem from "../../FooterItem";
import PhoneNumForQues from "../../PhoneNumForQues";
import SelectLang from "../SelectLang";

const Footer = ({ isLang, setIsLang, setLang }: any) => {
  const footer = useContext(GSLangContext).footer;
  return (
    <footer className="px-[31.9697rem] py-10 flex flex-col text-NetflixMidGray bg-black">
      <PhoneNumForQues
        text={footer.phoneNumForQues.title}
        phoneNum={footer.phoneNumForQues.number}
      />
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
