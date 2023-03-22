import React, { FC, useContext } from "react";
import { langprops } from "../../../App";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";
import FooterItem from "../../FooterItem";
import PhoneNumForQues from "../../PhoneNumForQues";
import SelectLang from "../SelectLang";

type lang = {
  isLang: string;
  setIsLang: string;
  setGSLang: string;
  setLoginLang: string;
};

const Footer: FC<langprops> = ({
  setGSLang,
  setLoginLang,
  isLang,
  setIsLang,
}) => {
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
      <SelectLang
        isLang={isLang}
        setIsLang={setIsLang}
        setGSLang={setGSLang}
        setLoginLang={setLoginLang}
        page="GetStarted"
      />
      <p className="my-3 text-sm font-medium">Netflix Nederlands</p>
    </footer>
  );
};

export default Footer;
