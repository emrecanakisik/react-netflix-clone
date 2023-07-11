import { Html, Head, Main, NextScript } from "next/document";
import { Contexts } from "@/contexts/LangContext";
import { useContext } from "react";

export default function Document() {
  const { isLang } = useContext(Contexts);
  console.log(isLang.lang);
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>
          Netflix Turkey - Watch TV Shows Online, Watch Movies Online:
          GetStarted
        </title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
