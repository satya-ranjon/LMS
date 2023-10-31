import React, { ReactNode, ButtonHTMLAttributes } from "react";

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  outline?: boolean;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  size = ButtonSize.MD,
  ...props
}) => {
  return (
    <button
      {...props}
      className={` ${size === ButtonSize.SM && "px-2 py-1 text-sm "} ${
        size === ButtonSize.MD && "px-3 py-1 text-md "
      }  ${
        size === ButtonSize.LG && "px-3 py-1 text-lg "
      } rounded-lg font-semibold  ${
        outline
          ? "  btn-gradient-1 border-2 "
          : "bg-gradient-to-r from-[#73d2a5] to-[#d0e537] text-dark-1"
      }`}>
      <div className={`${outline ? "text" : ""}`}>{children}</div>
    </button>
  );
};

export default Button;
