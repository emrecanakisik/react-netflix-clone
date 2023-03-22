import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";

const SingInBtn = () => {
  const langContext = useContext(GSLangContext);
  console.log();

  return (
    <Link
      to={`${langContext.link}/login`}
      className="py-2 px-4 rounded text-white bg-NetflixRed"
    >
      {langContext.signInBtn}
    </Link>
  );
};

export default SingInBtn;
