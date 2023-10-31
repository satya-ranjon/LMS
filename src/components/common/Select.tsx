import React, { useState, useLayoutEffect } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  options?: Array<SelectOption>;
  onOptionSelected?: (option: SelectOption) => void;
  defaultSelectedIndex?: number | null;
}

const Select: React.FC<SelectProps> = ({
  label = "Please Select a Option",
  options = [],
  onOptionSelected,
  defaultSelectedIndex = null,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpenCloseDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (options: SelectOption, indexNumber: number) => {
    if (onOptionSelected) onOptionSelected(options);
    setSelectedIndex(indexNumber);
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    if (defaultSelectedIndex !== null) {
      setSelectedIndex(defaultSelectedIndex);
      if (onOptionSelected) onOptionSelected(options[defaultSelectedIndex]);
    }
  }, [defaultSelectedIndex]);

  let selectedOption = null;

  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className=" text-light-1 text-md font-semibold border-2 py-1 px-2 rounded-lg relative select-none">
      <div
        onClick={handleOpenCloseDropDown}
        className=" flex justify-start items-center gap-1 cursor-pointer">
        <span>{selectedOption === null ? label : selectedOption.label}</span>
        <BiSolidDownArrow className={`${isOpen && "rotate-180"}`} />
      </div>
      {isOpen && (
        <div className=" absolute left-0 top-10 bg-dark-1 w-full text-center uppercase border-[1px]">
          <div className="flex flex-col gap-2 ">
            {options?.map((option, index) => {
              const isSelected = selectedIndex === index;

              return (
                <div
                  onClick={() => handleOptionClick(option, index)}
                  key={index}
                  className={` cursor-pointer w-full hover:bg-[#333f2a] px-2 py-1  ${
                    isSelected &&
                    "bg-gradient-to-r from-[#73d2a5] to-[#d0e537] text-dark-1"
                  } `}>
                  {option.label}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
