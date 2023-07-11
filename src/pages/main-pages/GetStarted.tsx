import Header from "../../components/GetStarted/header/Header";
import Main from "../../components/GetStarted/main/Main";
import Navbar from "../../components/GetStarted/navbar/Navbar";
import FAQ from "../../components/GetStarted/FAQ/FAQ";
import Footer from "../../components/GetStarted/footer/Footer";
import { useContext } from "react";
import { Contexts } from "../../contexts/LangContext";
import Browse from "../browse";
import { useRouter } from "next/router";

const GetStarted = () => {
  const navigate = useRouter();
  const { userData } = useContext(Contexts);
  /* userData.status === true && return <Browse />; */
  console.log(userData);
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
