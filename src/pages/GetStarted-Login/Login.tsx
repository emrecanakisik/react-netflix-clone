import React from "react";
import NetflixLogo from "../../components/NetflixLogo";
import bgImg from "../../assets/begin-page/header-img.jpg";
import LoginForm from "../../components/Login/form/LoginForm";

import LoginLangContProv from "../../contexts/LoginLangContext";
import Footer from "../../components/Login/footer/Footer";

const Login = ({
  isLang,
  setIsLang,
  setGSLang,
  setLoginLang,
  loginLang,
}: any) => {
  return (
    <LoginLangContProv provValue={loginLang}>
      <img
        src={bgImg}
        alt=""
        className="absolute -z-10 brightness-50 object-cover w-full h-[53rem]"
      />
      <nav className="px-14 py-6 relative z-10">
        <NetflixLogo />
      </nav>
      <LoginForm />
      <Footer
        isLang={isLang}
        setIsLang={setIsLang}
        setGSLang={setGSLang}
        setLoginLang={setLoginLang}
      />
    </LoginLangContProv>
  );
};

export default Login;
