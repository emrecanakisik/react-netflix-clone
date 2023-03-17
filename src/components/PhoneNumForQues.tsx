import React, { FC } from "react";

type text_phoneNum = {
  text: string;
  phoneNum: string;
};

const PhoneNumForQues: FC<text_phoneNum> = ({ text, phoneNum }) => {
  return (
    <div className="mb-7">
      {text}
      <a href="#" className="hover:underline">
        {phoneNum}
      </a>
    </div>
  );
};

export default PhoneNumForQues;
