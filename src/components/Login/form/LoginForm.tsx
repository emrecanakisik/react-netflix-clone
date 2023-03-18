import React, { useContext } from "react";
import { LoginLangContext } from "../../../contexts/LoginLangContext";
import LoginInput from "./LoginInput";
import SignInBtn from "./SignInBtn";

const LoginForm = () => {
  const form = useContext(LoginLangContext).form;
  console.log(form.H1);
  return (
    <div className="bg-black rounded text-white w-[28rem] h-[42.5rem] px-[4.25rem] py-[3.75rem] mx-auto mb-[4.25rem]">
      <h1 className="text-[2rem] mb-7 font-medium">{form.H1}</h1>
      <LoginInput
        inputType="email"
        id="loginEmail"
        labelContent={form.input.label.email}
        spanContent={form.input.error.email}
      />
      <LoginInput
        inputType="password"
        id="loginpass"
        labelContent={form.input.label.pass}
        spanContent={form.input.error.pass}
      />
      <SignInBtn btnTitle={form.submitBtn} />
      <div className="checkbox-login_help w-full flex justify-between text-[13px] text-smallTextGray">
        <div id="remember-me">
          <input type="checkbox" name="" id="remember_me" />
          <label htmlFor="remember_me">&nbsp;{form.checkbox}</label>
        </div>
        <a href="" className="hover:underline">
          {form.loginHelp}
        </a>
      </div>
      <h3 className="mt-4 text-smallTextGray">
        {form.newToNetflix.H2}{" "}
        <a href="" className="text-white hover:underline">
          {form.newToNetflix.a}
        </a>
      </h3>
      <div className="reCAPTCHA text-smallTextGray">
        <p className="text-[13px] my-3">
          {form.reCAPTCHA.p}{" "}
          <a href="" className="text-blue-600">
            {form.reCAPTCHA.a}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
