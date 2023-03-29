import React, { FC, useContext } from "react";
import { Contexts } from "../../../contexts/LangContext";
import FooterItem from "../../FooterItem";
import SelectLang from "../../GetStarted/SelectLang";
import PhoneNumForQues from "../../PhoneNumForQues";

const Footer = () => {
  const { isLang } = useContext(Contexts);
  const footer = isLang.context.LoginLang.footer;
  return (
    <footer className="w-full px-[31.9697rem] py-[1.875rem] text-NetflixMidGray bg-black">
      <PhoneNumForQues
        text={footer.phoneNumForQues.title}
        phoneNum={footer.phoneNumForQues.number}
      />
      <ul className="footer-items flex flex-wrap mb-5">
        {footer.items.map((item: string, index: number) => (
          <FooterItem title={item} key={index} />
        ))}
      </ul>
      <SelectLang page="Login" />
    </footer>
  );
};

export default Footer;
