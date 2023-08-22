import React, { useContext, useEffect } from "react";
import bgImg from "/public/assets/begin-page/header-img.jpg";
import LoginForm from "../../components/Login/form/LoginForm";
import Footer from "../../components/Login/footer/Footer";
import { Contexts } from "../../contexts/LangContext";
import Image from "next/image";
import { onValue, ref } from "firebase/database";
import { database } from "@/firebase";
import { useRouter } from "next/router";
import LogoIcon from "@/components/LogoIcon";

const Login = () => {
  const { setUserData } = useContext(Contexts);
  const navigate = useRouter();
  useEffect(() => {
    if (localStorage.getItem("savedUser")) {
      onValue(
        ref(database, `users/${localStorage.getItem("savedUser")}`),
        (snapshot) => {
          const ipArr = snapshot.val().sessionTimeAndIP;
          ipArr.forEach((element: { IP: string; firstSessionTime: string }) => {
            if (element.IP === sessionStorage.getItem("ipAddress")) {
              setUserData({ status: true, data: snapshot.val() });
              navigate.replace("/browse");
            } else {
              navigate.replace(
                localStorage.getItem("selectedLang") === "English"
                  ? "/nl-en/login"
                  : "/nl/login"
              );
            }
          });
        }
      );
    }
  }, []);
  return (
    <div>
      <Image
        src={bgImg}
        alt=""
        className="absolute -z-10 brightness-50 object-cover w-full h-[53rem]"
      />
      <nav className="px-14 py-6 relative z-10">
        <LogoIcon
          Name="NetflixLogo"
          viewBox="0,0,111,30"
          group={false}
          width="10vw"
          classNameSVG="fill-red-600"
        />
      </nav>
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
