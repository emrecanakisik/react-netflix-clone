import React, { useState, useEffect } from "react";
import "./App.css";
import GetStarted from "./pages/GetStarted";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import GSLangContProv, {
  getStartedPageLang,
} from "./contexts/GetStartedLangContext";

function App() {
  const [lang, setLang] = useState(getStartedPageLang.english);
  console.log(lang.signInBtn);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/nl-en");
  }, []);

  return (
    <GSLangContProv provValue={lang}>
      <Routes>
        <Route
          path={lang.link}
          element={<GetStarted lang={lang} setLang={setLang} />}
        />
      </Routes>
    </GSLangContProv>
  );
}

export default App;
