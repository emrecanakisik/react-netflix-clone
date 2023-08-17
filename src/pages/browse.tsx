import React, { useContext, useEffect } from "react";
import { Contexts } from "../contexts/LangContext";
import { useRouter } from "next/router";
import ChooseUser from "@/pages/main-pages/browse-pages/ChooseUser";

const Browse = () => {
  const { userData } = useContext(Contexts);
  const navigate = useRouter();

  useEffect(() => {
    userData.status
      ? localStorage.setItem("loginStatus", "true")
      : navigate.replace(
          localStorage.getItem("selectedLang") === "English"
            ? "/nl-en/login"
            : "/nl/login"
        );
  }, []);

  return (
    <div className="bg-NetflixBlack">{userData.status && <ChooseUser />}</div>
  );
  /* return <Loading />; */
};

export default Browse;

// The "login" page redirection will be fixed while reload the "browse" page.
