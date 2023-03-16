import { createContext } from "react";

export const loginPageLang = {
  english: {
    form: {
      H1: "Sign In",
      submitBtn: "Sign In",
      checkbox: "Remember me",
      loginHelp: "Need help?",
      newToNetflix: {
        H2: "New to Netflix?",
        a: "Sign up now.",
      },
      reCAPTCHA: {
        p: "This page is protected by Google reCAPTCHA to ensure you're not a bot. ",
        a: "Learn more.",
      },
      input: {
        label: {
          email: "Email or phone number",
          pass: "Password",
        },
        error: {
          email: "Please enter a valid email address or phone number.",
          pass: "Your password must contain between 4 and 60 characters.",
        },
      },
    },
    footer: {
      phoneNumForQues: { title: "Questions? Call ", number: "0850-390-7444" },
      items: [
        "FAQ",
        "Help Center",
        "Terms of Use",
        "Privacy",
        "Cookie Preferences",
        "Corporate Information",
      ],
    },
  },
  nederlands: {},
};

export const LoginLangContext = createContext(loginPageLang.english);

const loginLangContProv = ({ children, provValue }: any) => {
  return (
    <LoginLangContext.Provider value={provValue}>
      {children}
    </LoginLangContext.Provider>
  );
};

export default loginLangContProv;
