import React, { FC } from "react";
type FaqItem = {
  ques: string;
  ans1: string;
  ans2?: string;
  ansA?: string;
};

const FAQItem: FC<FaqItem> = ({ ques, ans1, ans2, ansA }) => {
  return (
    <details className="mt-1 rounded w-3/6 bg-[#2D2D2D] text-white cursor-pointer group">
      <summary className="list-none p-4 flex justify-between items-center font-medium text-lg">
        {ques}
        <svg
          viewBox="0 0 20 20"
          width={20}
          className="fill-white rotate-45 group-open:rotate-90 transition delay-75"
        >
          <g>
            <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
          </g>
        </svg>
      </summary>
      <p className="px-4 pb-4">
        {ans1}
        {ans2 && <div className="mt-5">{ans2}</div>}
      </p>
    </details>
  );
};

export default FAQItem;
