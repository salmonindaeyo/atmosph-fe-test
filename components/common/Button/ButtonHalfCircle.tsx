import { HalfCircle } from "components/SVG";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonHalfCircle: React.FC<Props> = ({ children, ...props }: any) => {
  return (
    <button {...props} className="group relative px-8 py-4 lg:py-2">
      <div className="absolute w-full bottom-[30px] group-hover:bottom-[24px] left-0 z-[3] transition-all duration-100">
        <div className="relative">
          <div className="absolute bottom-0 w-full">
            <HalfCircle className="fill-primary" />
          </div>
          <div className="relative text-white py-4 lg:py-2">{children}</div>
        </div>
      </div>
      <div className="absolute bottom-[15px] group-hover:bottom-[12px] w-[90%] left-[5%] z-[2] transition-all duration-100">
        <HalfCircle className="fill-secondary opacity-70" />
      </div>
      <div className="absolute bottom-0 w-[80%] left-[10%] z-[1]">
        <HalfCircle className="fill-secondary opacity-50" />
      </div>
      <div className="relative text-white opacity-0">{children}</div>
    </button>
  );
};

export default ButtonHalfCircle;
