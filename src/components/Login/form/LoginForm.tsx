import React, { useContext } from "react";
import { LoginLangContext } from "../../../contexts/LoginLangContext";
import LoginInput from "./LoginInput";

const LoginForm = () => {
  const form = useContext(LoginLangContext).form;
  return (
    <div className="bg-white w-[28rem] h-[42.5rem] px-[4.25rem] py-[3.75rem] mx-auto">
      {/*  */}
      <h1 className="text-[2rem] mb-7">{form.H1}</h1>
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
    </div>
  );
};

export default LoginForm;
