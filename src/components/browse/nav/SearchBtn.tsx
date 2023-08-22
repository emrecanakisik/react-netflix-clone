import LogoIcon from "@/components/LogoIcon";
import React, { useEffect, useState } from "react";

const SearchBtn = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <button
      onClick={() => setInputFocus(true)}
      onBlur={() => setInputFocus(!inputFocus)}
      className={`header-search-btn relative mr-4 focus:p-1 ${
        inputFocus || inputValue !== "" ? "p-1 border bg-black" : ""
      } group focus:border w-auto flex items-center justify-between transition-all duration-300 focus:bg-black`}
    >
      <LogoIcon
        Name="SearchIcon"
        viewBox="0 0 24 24"
        group={false}
        width="24"
        height="24"
        fillPATH="white"
        classNameSVG=""
      />
      <input
        type="text"
        placeholder="Titles, people, genres"
        onFocus={() => setInputFocus(!inputFocus)}
        onBlur={() => setInputFocus(!inputFocus)}
        onChange={(e: string) => setInputValue(e.target.value)}
        className={`header-search text-white text-sm group-focus:w-64 ${
          inputValue !== "" || inputFocus ? "w-64 ml-2" : "w-0"
        } duration-500 group-focus:bg-opacity-50 focus-within:w-64 group-within:my-1 outline-none bg-transparent`}
      />
    </button>
  );
};

export default SearchBtn;
