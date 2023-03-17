import React, { FC } from "react";
type signInBtn = { btnTitle: string };
const SignInBtn: FC<signInBtn> = ({ btnTitle }) => {
  return (
    <button className="bg-NetflixRed font-medium w-full p-4 mt-6 mb-3 rounded">
      {btnTitle}
    </button>
  );
};

export default SignInBtn;
