import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import GetStarted from "./pages/GetStarted-Login/GetStarted";
import Login from "./pages/GetStarted-Login/Login";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

import GetStartedLoginLayout from "./pages/GetStarted-Login/Index";
import GetStartedError from "./pages/GetStarted-Login/GetStartedError";
import Browse from "./pages/Browse/Browse";
import { Contexts, LangContext } from "./contexts/LangContext";

function App() {
  const [isLang, setIsLang] = useState({
    lang: "English",
    context: LangContext.English,
  });
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  console.log("abc");

  return (
    <div>
      <Contexts.Provider
        value={{
          isLang,
          setIsLang,
          userData,
          setUserData,
        }}
      >
        <Routes>
          <Route path="*" element={<GetStartedError />} />
          <Route
            path={`/${isLang.context.GSLang.link}`}
            element={<GetStartedLoginLayout />}
          >
            <Route index={true} element={<GetStarted />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<GetStartedError />} />
          </Route>
        </Routes>
      </Contexts.Provider>
    </div>
  );
}

export default App;
