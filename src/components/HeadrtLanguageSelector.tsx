import useLanguage from "@/hooks/useLanguage";
import { localization } from "@/localization/local";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export default function HeadrtLanguageSelector() {
  const [language, setLanguage] = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
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
  );
}
