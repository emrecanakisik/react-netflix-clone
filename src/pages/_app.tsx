import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Contexts, LangContext } from "@/contexts/LangContext";

export default function App({ Component, pageProps }: AppProps) {
  const [isLang, setIsLang] = useState({
    lang: "English",
    context: LangContext.English,
  });
  const [userData, setUserData] = useState({ status: false, data: {} });

  return (
    <Contexts.Provider
      value={{
        isLang,
        setIsLang,
        userData,
        setUserData,
      }}
    >
      <Component {...pageProps} />
    </Contexts.Provider>
  );
}
