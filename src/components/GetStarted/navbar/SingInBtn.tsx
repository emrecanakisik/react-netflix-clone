import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Contexts } from "../../../contexts/LangContext";

const SingInBtn = () => {
  const { isLang } = useContext(Contexts);
  const context = isLang.context.GSLang;

  return (
    <Link
      to={`${isLang.context.GSLang.link}/login`}
      className="py-2 px-4 rounded text-white bg-NetflixRed"
    >
      {context.signInBtn}
    </Link>
  );
};

export default SingInBtn;
