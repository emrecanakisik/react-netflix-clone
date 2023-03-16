import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";

const SingInBtn = () => {
  const signInBtn = useContext(GSLangContext).signInBtn;
  console.log();

  return (
    <a href="/login" className="py-2 px-4 rounded text-white bg-NetflixRed">
      {signInBtn}
    </a>
  );
};

export default SingInBtn;
