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
        className={`h-full p-2 flex justify-center items-center hover:text-shadow-md px-4 transition text-white ${
          location.pathname == "/"
            ? "bg-gray-800 text-black hover:bg-gray-700"
            : "hover:bg-gray-700"
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
          } bg-gray-100 text-gray-800 flex justify-center items-center`}
        >
          {language}
        </div>
        {showDropdown && (
          <div className="absolute w-8 top-12 text-gray-700 border-t border-gray-300 shadow-2xl">
            {Object.keys(localization).map((v) => (
              <div
                key={v}
                onClick={() => {
                  setLanguage(v as keyof typeof localization);
                }}
                className="size-8 last:rounded-b not-last:border-b flex justify-center items-center bg-gray-200 hover:bg-gray- transition100 border-gray-300"
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
