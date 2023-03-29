import React, { FC, useContext } from "react";
import { Contexts } from "../../../contexts/LangContext";
import FooterItem from "../../FooterItem";
import PhoneNumForQues from "../../PhoneNumForQues";
import SelectLang from "../SelectLang";

const Footer = () => {
  const { isLang } = useContext(Contexts);
  const footer = isLang.context.GSLang.footer;
  return (
    <footer className="px-[31.9697rem] py-10 flex flex-col text-NetflixMidGray bg-black">
      <PhoneNumForQues
        text={footer.phoneNumForQues.title}
        phoneNum={footer.phoneNumForQues.number}
      />
      <ul className="footer-items flex flex-wrap">
        {footer.items.map((item: string, index: number) => (
          <FooterItem title={item} key={index} />
        ))}
      </ul>
      <SelectLang page="GetStarted" />
      <p className="my-3 text-sm font-medium">Netflix Nederlands</p>
    </footer>
  );
};

export default Footer;
