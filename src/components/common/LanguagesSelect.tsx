import LanguageIcon from "../ui/LanguageIcon";
import Select from "./Select";
import React from "react";

const languages = [
  { value: "eng", label: "ENG" },
  { value: "bng", label: "BNG" },
];

interface LanguageProps {
  showIcon?: boolean;
}

const LanguagesSelect: React.FC<LanguageProps> = ({ showIcon = false }) => {
  const handleSelectLanguage = (value: object) => {
    console.log("Language", value);
  };
  return showIcon ? (
    <Select
      defaultSelectedIndex={0}
      options={languages}
      onOptionSelected={handleSelectLanguage}
      optionsColor="text-light-1"
      renderLabel={({ getRecommendedLabelProps }) => {
        return (
          <button {...getRecommendedLabelProps()}>
            <LanguageIcon />
          </button>
        );
      }}
    />
  ) : (
    <Select
      defaultSelectedIndex={0}
      options={languages}
      onOptionSelected={handleSelectLanguage}
    />
  );
};

export default LanguagesSelect;
