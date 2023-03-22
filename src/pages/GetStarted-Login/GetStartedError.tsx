import React, { FC } from "react";
import { langprops } from "../../App";
import { getStartedPageLang } from "../../contexts/GetStartedLangContext";
import { loginPageLang } from "../../contexts/LoginLangContext";
import GetStarted from "./GetStarted";

const GetStartedError: FC<langprops> = ({
  isLang,
  setIsLang,
  GSLang,
  setGSLang,
  loginLang,
  setLoginLang,
}) => {
  const url = window.location;

  if (url.pathname === "/nl") {
    setIsLang("Nederlands");
    setGSLang(getStartedPageLang.nederlands);
    setLoginLang(loginPageLang.nederlands);
    return (
      <GetStarted
        isLang={isLang}
        setIsLang={setIsLang}
        GSLang={GSLang}
        setGSLang={setGSLang}
        loginLang={loginLang}
        setLoginLang={setLoginLang}
      />
    );
  } else if (url.pathname === "/nl-en") {
    setIsLang("English");
    setGSLang(getStartedPageLang.english);
    setLoginLang(loginPageLang.english);
    return (
      <GetStarted
        isLang={isLang}
        setIsLang={setIsLang}
        GSLang={GSLang}
        setGSLang={setGSLang}
        loginLang={loginLang}
        setLoginLang={setLoginLang}
      />
    );
  } else if (url.pathname === "/nl/login") {
    setIsLang("Nederlands");
    setGSLang(getStartedPageLang.nederlands);
    setLoginLang(loginPageLang.nederlands);
    return (
      <GetStarted
        isLang={isLang}
        setIsLang={setIsLang}
        GSLang={GSLang}
        setGSLang={setGSLang}
        loginLang={loginLang}
        setLoginLang={setLoginLang}
      />
    );
  } else if (url.pathname === "/nl-en/login") {
    setIsLang("English");
    setGSLang(getStartedPageLang.english);
    setLoginLang(loginPageLang.english);
    return (
      <GetStarted
        isLang={isLang}
        setIsLang={setIsLang}
        GSLang={GSLang}
        setGSLang={setGSLang}
        loginLang={loginLang}
        setLoginLang={setLoginLang}
      />
    );
  } else {
    return <div>GetStartedError</div>;
  }
};

export default GetStartedError;
