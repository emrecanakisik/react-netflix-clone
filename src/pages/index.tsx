import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const navigate = useRouter();
  useEffect(() => {
    navigate.pathname === "/" && navigate.replace("/nl-en");
    console.log(navigate);
  }, []);
}
