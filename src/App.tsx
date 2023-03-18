import React, { useState, useEffect } from "react";
import "./App.css";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import GSLangContProv, {
  getStartedPageLang,
} from "./contexts/GetStartedLangContext";
import { loginPageLang } from "./contexts/LoginLangContext";

function App() {
  const [isLang, setIsLang] = useState("English");
  const [GSLang, setGSLang] = useState(getStartedPageLang.english);
  const [LoginLang, setLoginLang] = useState(loginPageLang.english);
  const navigate = useNavigate();

  /*  useEffect(() => {
    navigate("/nl-en");
  }, []); */

  return (
    <div>
      <Routes>
        <Route
          path={GSLang.link}
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
          path="/login"
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
      </Routes>
    </div>
  );
}

export default App;
