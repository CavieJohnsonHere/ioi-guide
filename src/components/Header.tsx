import useLanguage from "@/hooks/useLanguage";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import HeaderGithubIcon from "./HeaderGithubIcon";
import HeadrtLanguageSelector from "./HeadrtLanguageSelector";

export default function Header() {
  const location = useLocation();

  return (
    <div className="bg-stone-950 h-16 flex">
      <Link
        to=""
        className={`h-full p-2 flex justify-center items-center hover:text-shadow-md px-4 transition text-white ${
          location.pathname == "/"
            ? "bg-stone-800 text-black hover:bg-stone-700"
            : "hover:bg-stone-700"
        }`}
      >
        <div className="text-lg dir-ltr">
          <img src="/assets/logo-white.svg" className="inline size-10" alt="" />
          <span className="align-bottom">.guide</span>
        </div>
      </Link>

      <HeaderGithubIcon />

      <HeadrtLanguageSelector /> 
    </div>
  );
}
