import useLanguage from "@/hooks/useLanguage";
import { localization } from "@/localization/local";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
  const [language, setLanguage] = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-gray-950 h-16 flex">
      <Link
        to=""
        className={`h-full p-2 flex justify-center items-center hover:text-shadow-md px-4 transition ${
          location.pathname == "/"
            ? "bg-gray-200 text-black hover:bg-white"
            : "hover:bg-gray-200 text-white hover:text-black "
        }`}
      >
        <div className="text-2xl">IOI.guide</div>
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
          } bg-gray-200 text-gray-800 flex justify-center items-center`}
        >
          {language}
        </div>
        {showDropdown && (
          <div className="absolute w-8 top-12 text-gray-700">
            {Object.keys(localization).map((v) => (
              <div
                onClick={() => {
                  setLanguage(v as keyof typeof localization);
                }}
                className="size-8 last:rounded-b not-last:border-b flex justify-center items-center bg-gray-300 border-gray-400"
              >
                {v}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
