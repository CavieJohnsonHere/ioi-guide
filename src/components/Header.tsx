import useLanguage from "@/hooks/useLanguage";
import { localization } from "@/localization/local";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import ClickAwayListener from "react-click-away-listener";

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

      <div className="ms-auto flex justify-center items-center px-4 gap-4">
        <a href="" className="size-8 p-1 opacity-20">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>

      <div
        className="flex justify-center items-center pe-4 gap-4"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <div
          className={`size-8 ${
            showDropdown ? "rounded-t" : "rounded"
          } bg-pink-100 text-pink-800 flex justify-center items-center cursor-pointer`}
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
