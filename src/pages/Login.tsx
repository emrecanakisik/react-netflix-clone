import React, { useContext } from "react";
import NetflixLogo from "../components/NetflixLogo";
import bgImg from "../assets/begin-page/header-img.jpg";
import LoginForm from "../components/Login/form/LoginForm";

import LoginLangContProv, {
  LoginLangContext,
  loginPageLang,
} from "../contexts/LoginLangContext";
import FooterItem from "../components/FooterItem";
import PhoneNumForQues from "../components/PhoneNumForQues";
import SelectLang from "../components/GetStarted/SelectLang";

const Login = ({ isLang, setIsLang, lang, setLang }: any) => {
  const langContext = useContext(LoginLangContext);
  return (
    <LoginLangContProv provValue={lang}>
      <img
        src={bgImg}
        alt=""
        className="absolute -z-10 brightness-50 object-cover w-full h-[53rem]"
      />
      <nav className="px-14 py-6 relative z-10">
        <NetflixLogo />
      </nav>
      <LoginForm />
      <footer className="w-full px-[31.9697rem] py-[1.875rem] text-NetflixMidGray bg-black">
        <PhoneNumForQues
          text={langContext.footer.phoneNumForQues.title}
          phoneNum={langContext.footer.phoneNumForQues.number}
        />
        <ul className="footer-items flex flex-wrap mb-5">
          {langContext.footer.items.map((item) => (
            <FooterItem title={item} />
          ))}
        </ul>
        <SelectLang isLang="" setIsLang="" setLang="" />
      </footer>
    </LoginLangContProv>
  );
};

export default Login;
