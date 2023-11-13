import React, { useState, useLayoutEffect, useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import useOutsideClick from "../../hooks/useOutsideClick";

interface SelectOption {
  label: string;
  value: string;
}

interface RenderLabelProps {
  isSelected: SelectOption;
  getRecommendedLabelProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  label?: string;
  options?: Array<SelectOption>;
  onOptionSelected?: (option: SelectOption) => void;
  defaultSelectedIndex?: number | null;
  renderLabel?: (props: RenderLabelProps) => React.ReactNode;
  optionsColor?: string;
}

const Select: React.FC<SelectProps> = ({
  label = "Please Select a Option",
  options = [],
  onOptionSelected,
  defaultSelectedIndex = null,
  renderLabel,
  optionsColor = "text-zinc-500",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

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

  // const renderLabelProps: RenderLabelProps = {};
  const renderLabelProps: RenderLabelProps = {
    isSelected: options[selectedIndex || defaultSelectedIndex],
    getRecommendedLabelProps: (overrideProps = {}) => ({
      // here we will define default props
      onClick: () => handleOpenCloseDropDown(),
      // here we will spread override props (user given props)
      ...overrideProps,
    }),
  };

  const optionsWidth = renderLabel
    ? `w-${options[0].label?.length * 2 + 10}`
    : "w-full";

  return (
    <div
      ref={dropdownRef}
      className={`${
        !renderLabel &&
        "border-2 py-1  px-2 text-light-1 text-md font-semibold   rounded-lg  select-none"
      } relative flex justify-center items-center`}>
      {renderLabel ? (
        renderLabel(renderLabelProps)
      ) : (
        <div
          onClick={handleOpenCloseDropDown}
          className=" flex justify-start items-center gap-1 cursor-pointer">
          <span>{selectedOption === null ? label : selectedOption.label}</span>
          <BiSolidDownArrow className={`${isOpen && "rotate-180"}`} />
        </div>
      )}

      {isOpen && (
        <div
          className={` ${optionsWidth} absolute z-50 left-0 top-10 bg-dark-1 text-dark-1  text-center uppercase border-[1px]`}>
          <div className="flex flex-col gap-2 ">
            {options?.map((option, index) => {
              const isSelected = selectedIndex === index;

              return (
                <div
                  onClick={() => handleOptionClick(option, index)}
                  key={index}
                  className={`${optionsColor} cursor-pointer w-full hover:bg-[#333f2a] px-2 py-1 text-base  font-semibold ${
                    isSelected &&
                    "bg-gradient-to-r from-[#73d2a5] to-[#d0e537] text-zinc-900"
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
