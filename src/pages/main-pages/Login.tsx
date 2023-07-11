import React, { useContext } from "react";
import NetflixLogo from "../../components/NetflixLogo";
/* import NetflixLogo from "../../components/NetflixLogo"; */
import bgImg from "/public/assets/begin-page/header-img.jpg";
import LoginForm from "../../components/Login/form/LoginForm";
import Footer from "../../components/Login/footer/Footer";
import { Contexts } from "../../contexts/LangContext";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <Image
        src={bgImg}
        alt=""
        className="absolute -z-10 brightness-50 object-cover w-full h-[53rem]"
      />
      <nav className="px-14 py-6 relative z-10">
        <NetflixLogo />
      </nav>
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
