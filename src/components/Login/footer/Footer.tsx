import React, { FC, useContext } from "react";
import { LoginLangContext } from "../../../contexts/LoginLangContext";
import FooterItem from "../../FooterItem";
import SelectLang from "../../GetStarted/SelectLang";
import PhoneNumForQues from "../../PhoneNumForQues";

type lang = {
  isLang: string;
  setIsLang: string;
  setGSLang: string;
  setLoginLang: string;
};

const Footer: FC<lang> = ({ isLang, setIsLang, setGSLang, setLoginLang }) => {
  const footer = useContext(LoginLangContext).footer;
  return (
    <footer className="w-full px-[31.9697rem] py-[1.875rem] text-NetflixMidGray bg-black">
      <PhoneNumForQues
        text={footer.phoneNumForQues.title}
        phoneNum={footer.phoneNumForQues.number}
      />
      <ul className="footer-items flex flex-wrap mb-5">
        {footer.items.map((item) => (
          <FooterItem title={item} />
        ))}
      </ul>
      <SelectLang
        isLang={isLang}
        setIsLang={setIsLang}
        setGSLang={setGSLang}
        setLoginLang={setLoginLang}
        page="Login"
      />
    </footer>
  );
};

export default Footer;
