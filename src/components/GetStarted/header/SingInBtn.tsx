import React, { useContext } from "react";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";

const SingInBtn = () => {
  const signInBtn = useContext(GSLangContext).signInBtn;
  console.log();

  return (
    <a href="" className="py-2 px-4 rounded text-white bg-NetflixRed">
      {signInBtn}
    </a>
  );
};

export default SingInBtn;
