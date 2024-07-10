import { IconLanguage } from "@tabler/icons-react";
import React from "react";

function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}: any) {
  return (
    <span className="cursor-pointer rounded-full space-x-1 bg-black items-center pl-2 flex flex-row">
      <IconLanguage size={20} />
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="bg-black flex flex-row rounded-full py-1 text-white"
      >
        {languages.map((language: string) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </span>
  );
}

export default LanguageSelector;
