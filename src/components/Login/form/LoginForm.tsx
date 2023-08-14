import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Contexts } from "../../../contexts/LangContext";
import { signIn } from "../../../firebase";
import LoginInput from "./LoginInput";
import SignInBtn from "./SignInBtn";

const LoginForm = () => {
  const { isLang, userData, setUserData } = useContext(Contexts);
  const form = isLang.context.LoginLang.form;
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    state: false,
    strongContent: "",
    Content: "",
    ContentLink: "",
  });

  useEffect(() => {
    userData.status && navigate.replace("/browse");
    /* console.log(userData); */
  }, []);
  return (
    <form
      onSubmit={(e) => signIn(e, email, password, setError, setUserData)}
      className="bg-black rounded text-white w-[28rem] h-[42.5rem] px-[4.25rem] py-[3.75rem] mx-auto mb-[4.25rem]"
    >
      <h1 className="text-[2rem] mb-7 font-medium">{form.H1}</h1>
      {error.state && (
        <div className="mb-4 py-[0.625rem] px-5 rounded text-sm bg-NetflixWarning text-white">
          {error.strongContent && (
            <span className="font-medium">{error.strongContent} </span>
          )}
          {error.Content}{" "}
          {error.ContentLink && (
            <a href="" className="underline">
              {error.ContentLink}
            </a>
          )}
        </div>
      )}
      <LoginInput
        inputType="email"
        value={email}
        setValue={setEmail}
        id="loginEmail"
        labelContent={form.input.label.email}
        spanContent={form.input.error.email}
      />
      <LoginInput
        inputType="password"
        value={password}
        setValue={setPassword}
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
      <div className="py-[0.625rem] px-5 bg-inputGray font-medium text-sm rounded">
        You can login with this account:
        <br />
        Email: <span className="font-normal">user@react-netflix-clone.com</span>
        <br />
        Password: <span className="font-normal">1234567890</span>
      </div>
    </form>
  );
};

export default LoginForm;
