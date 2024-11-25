import { Logo, LogoCircle } from "components/SVG";

import Content1 from "./Content1";
import Content2 from "./Content2";

const Mobile = () => {
  return (
    <>
      <div className="overflow-hidden md:hidden min-w-[320px] min-h-[630px] max-h-[812px] relative bg-white">
        <div className="bg-mobile opacity-0 animate-bg"></div>
        <div>
          <div className="w-[250%] pt-[250%] overflow-hidden bg-white rounded-full shadow-circle absolute -translate-x-1/3 top-[55%] sm:top-[55%] animate-circle-white-mobile"></div>
          <div className="absolute w-[130%] pt-[130%] overflow-hidden bg-primary rounded-full -translate-x-[12%] bottom-[52%] sm:bottom-[49%] origin-top animate-circle-blue-mobile">
            <div className="absolute bottom-[10%] left-4 w-[80%]">
              <LogoCircle
                className={"fill-secondary opacity-0 animate-star2"}
              />
            </div>
          </div>
          <img
            src="/image/star1.png"
            className="w-[3%] absolute top-[40%] left-[8%] opacity-0 animate-star1"
            alt=""
          />

          <div className="absolute w-[20%] top-[55%] right-[5%] z-[100] opacity-0 animate-star2">
            <img src="/image/line-circle.png" className="w-full" alt="" />
            <img
              src="/image/star2.png"
              className="w-[46%] absolute top-[-13%] right-[-2%]"
              alt=""
            />
          </div>
          <div className="absolute w-full h-full top-[0px] left-[0px] z-20">
            <div className="relative w-full h-full">
              <div className="absolute top-[3%] left-[5%] w-[50%] opacity-0 animate-fade-in-logo">
                <Logo className={"fill-white"} />
              </div>
              <div className="absolute top-[15%] left-[5%]">
                <Content1 />
              </div>
              <div className="absolute top-[65%] left-[5%] w-[550px]">
                <Content2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
