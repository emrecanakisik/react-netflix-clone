import React, { FC, useContext } from "react";
import { LangContext, Contexts } from "../../contexts/LangContext";
import GetStarted from "./GetStarted";
import Login from "./Login";

const GetStartedError = () => {
  const { isLang, setIsLang, userData, setUserData } = useContext(Contexts);
  const url = window.location;

  if (url.pathname === "/nl") {
    setIsLang({ lang: "Nederlands", context: LangContext.Nederlands });
    return <GetStarted />;
  } else if (url.pathname === "/nl-en") {
    return <GetStarted />;
    setIsLang({ lang: "English", context: LangContext.English });
  } else if (url.pathname === "/nl/login") {
    setIsLang({ lang: "Nederlands", context: LangContext.Nederlands });
    return <Login />;
  } else if (url.pathname === "/nl-en/login") {
    setIsLang({ lang: "English", context: LangContext.English });
    return <Login />;
  } else {
    return (
      <div>
        GetStartedError, {userData.data.email}{" "}
        <button onClick={() => setUserData({ status: false, data: {} })}>
          SignOut
        </button>
      </div>
    );
  }
};

export default GetStartedError;
