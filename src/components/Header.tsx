import useLanguage from "@/hooks/useLanguage";
import { localization } from "@/localization/local";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import ClickAwayListener from 'react-click-away-listener';

export default function Header() {
  const [language, setLanguage] = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);
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

      <div
        className="ms-auto flex justify-center items-center px-4 gap-4 cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <div
          className={`size-8 ${
            showDropdown ? "rounded-t" : "rounded"
          } bg-pink-100 text-pink-800 flex justify-center items-center`}
        >
          {language}
        </div>
        {showDropdown && (
          <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
          <div className="absolute w-8 top-12 text-pink-700 border-t border-pink-300 shadow-2xl">
            {Object.keys(localization).map((v) => (
              <div
                key={v}
                onClick={() => {
                  setLanguage(v as keyof typeof localization);
                }}
                className="size-8 last:rounded-b not-last:border-b flex justify-center items-center bg-pink-200 hover:bg-pink- transition100 border-pink-300"
              >
                {v}
              </div>
              ))}
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}
