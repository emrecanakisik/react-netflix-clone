import React, { useContext } from "react";
import { GSLangContext } from "../../../contexts/GetStartedLangContext";
import EmailForm from "../EmailForm";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const faq = useContext(GSLangContext).faq;

  return (
    <div className="flex flex-col items-center py-8 text-white bg-black">
      <h1 className="text-5xl font-medium mb-3">{faq.title}</h1>
      <div className="container flex flex-col items-center mt-5 mb-11">
        {faq.questions.map((item, index) => (
          <FAQItem
            ques={item.ques}
            ans1={item.ans.p1}
            ans2={item.ans.p2}
            key={index}
          />
        ))}
      </div>
      <EmailForm emailBoxId={2} />
    </div>
  );
};

export default FAQ;
