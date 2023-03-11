import React, { useContext } from "react";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";
import EmailForm from "../EmailForm";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const faq = useContext(GSLangContext).faq;
  return (
    <div className="flex flex-col items-center py-5 bg-black">
      <h1 className="text-5xl font-bold mb-3 text-white">{faq.title}</h1>
      {faq.questions.map((item) => (
        <FAQItem ques={item.ques} ans1={item.ans.p1} ans2={item.ans.p2} />
      ))}
    </div>
  );
};

export default FAQ;
