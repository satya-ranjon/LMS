import Select from "./Select";

const languages = [
  { value: "eng", label: "ENG" },
  { value: "bng", label: "BNG" },
];
const LanguagesSelect = () => {
  const handleSelectLanguage = (value: object) => {
    console.log("Language", value);
  };
  return (
    <Select
      defaultSelectedIndex={0}
      options={languages}
      onOptionSelected={handleSelectLanguage}
    />
  );
};

export default LanguagesSelect;
