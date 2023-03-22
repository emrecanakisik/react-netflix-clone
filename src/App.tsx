import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import GetStarted from "./pages/GetStarted-Login/GetStarted";
import Login from "./pages/GetStarted-Login/Login";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import GSLangContProv, {
  getStartedPageLang,
} from "./contexts/GetStartedLangContext";
import { loginPageLang } from "./contexts/LoginLangContext";
import GetStartedLoginLayout from "./pages/GetStarted-Login/Index";
import GetStartedError from "./pages/GetStarted-Login/GetStartedError";

export type langprops = {
  isLang?: string;
  setIsLang?: any;
  GSLang?: object;
  setGSLang?: any;
  loginLang?: object;
  setLoginLang?: any;
  page?: "GetStarted" | "Login";
};

function App() {
  const [isLang, setIsLang] = useState("English");
  const [GSLang, setGSLang] = useState(getStartedPageLang.english);
  const [LoginLang, setLoginLang] = useState(loginPageLang.english);
  const navigate = useNavigate();

  /* useEffect(() => {
    isLang === "English" ? navigate("/nl-en") : navigate("/nl");
  }, []); */

  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={
            <GetStartedError
              isLang={isLang}
              setIsLang={setIsLang}
              GSLang={GSLang}
              setGSLang={setGSLang}
              loginLang={LoginLang}
              setLoginLang={setLoginLang}
            />
          }
        />
        <Route path={`/${GSLang.link}`} element={<GetStartedLoginLayout />}>
          <Route
            index={true}
            element={
              <GetStarted
                isLang={isLang}
                setIsLang={setIsLang}
                GSLang={GSLang}
                setGSLang={setGSLang}
                loginLang={LoginLang}
                setLoginLang={setLoginLang}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                isLang={isLang}
                setIsLang={setIsLang}
                GSLang={GSLang}
                setGSLang={setGSLang}
                loginLang={LoginLang}
                setLoginLang={setLoginLang}
              />
            }
          />
          <Route path="*" element={<GetStartedError />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
