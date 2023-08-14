import Header from "../../components/GetStarted/header/Header";
import Main from "../../components/GetStarted/main/Main";
import Navbar from "../../components/GetStarted/navbar/Navbar";
import FAQ from "../../components/GetStarted/FAQ/FAQ";
import Footer from "../../components/GetStarted/footer/Footer";
import { useContext, useEffect } from "react";
import { Contexts } from "../../contexts/LangContext";
import Browse from "../browse";
import { useRouter } from "next/router";
import { onValue, ref } from "firebase/database";
import { database } from "@/firebase";

const GetStarted = () => {
  const navigate = useRouter();
  const { userData, setUserData } = useContext(Contexts);
  /* userData.status === true && return <Browse />; */

  useEffect(() => {
    if (localStorage.getItem("savedUser")) {
      onValue(
        ref(database, `users/${localStorage.getItem("savedUser")}`),
        (snapshot) => {
          const ipArr = snapshot.val().sessionTimeAndIP;
          ipArr.forEach((element: { IP: string; firstSessionTime: string }) => {
            if (element.IP === sessionStorage.getItem("ipAddress")) {
              setUserData({ status: true, data: snapshot.val() });
              navigate.replace("browse");
            } else {
              navigate.replace(
                localStorage.getItem("selectedLang") === "English"
                  ? "nl-en"
                  : "nl"
              );
            }
          });
        }
      );
    }
  }, []);
  if (userData.status) {
    navigate.replace("browse");
  } else {
    return (
      <div>
        <Navbar />
        <Header />
        <Main />
        <FAQ />
        <Footer />
      </div>
    );
  }
};

export default GetStarted;
