import React, { useContext } from "react";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";
import EmailForm from "../EmailForm";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const faq = useContext(GSLangContext).faq;
  return (
    <div className="flex flex-col items-center py-5 bg-black">
      <h1 className="text-5xl font-medium mb-3 text-white">{faq.title}</h1>
      <div className="container flex flex-col items-center my-5">
        {faq.questions.map((item, index) => (
          <FAQItem
            ques={item.ques}
            ans1={item.ans.p1}
            ans2={item.ans.p2}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
