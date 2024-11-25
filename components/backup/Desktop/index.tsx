import { Logo, LogoCircle } from "components/SVG";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import { AppContext } from "pages/backup";
import Content1 from "./Content1";
import Content2 from "./Content2";
import { useContext } from "react";

const Desktop = () => {
  const { windowSize } = useContext(AppContext);
  return (
    <div className="hidden md:block absolute top-1/2 left-1/2 z-[100] w-screen h-screen -translate-x-1/2 -translate-y-1/2 bg-[#CED0D6] overflow-y-scroll">
      <div
        className="h-full w-full overflow-hidden relative mx-auto bg-white"
        style={{
          width: windowSize?.width,
          height: windowSize?.height,
        }}
      >
        <div className="bg opacity-0 animate-bg"></div>
        <div className="relative overflow-hidden">
          <MouseParallaxContainer
            className="parallax"
            containerStyles={{
              width: "100%",
              display: "relative",
            }}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.03}
              factorY={0.03}
              updateStyles={{
                display: "absolute",
                height: "0%",
                width: "100%",
                marginTop: "24.7%",
                marginLeft: "-15%",
                zIndex: "1",
              }}
            >
              <div className="w-full pt-[100%] overflow-hidden bg-white rounded-full shadow-circle origin-bottom-left animate-circle"></div>
              <img
                src="/image/star1.png"
                className="w-[1.2%] absolute top-[-3%] left-[46.2%] opacity-0 animate-star1"
                alt=""
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className="absolute top-[-26%] right-[-40%] z-10 w-full origin-top-right animate-circle"
              factorX={0.08}
              factorY={0.08}
              updateStyles={{
                display: "absolute",
                paddingBottom: "1000px",
              }}
            >
              <div className="relative w-[80%] pt-[80%] overflow-hidden bg-primary rounded-full">
                <div className="absolute bottom-[20%] left-0 w-[70%]">
                  <LogoCircle
                    className={"fill-secondary opacity-0 animate-star2"}
                  />
                </div>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="absolute w-full top-[22%] left-[3.3%]"
              factorX={0.08}
              factorY={0.08}
            >
              <div className="relative w-[10%]">
                <img
                  src="/image/line-circle.png"
                  className="w-full opacity-0 animate-star2"
                  alt=""
                />
                <img
                  src="/image/star2.png"
                  className="w-[46%] absolute top-[-13%] right-[-2%] opacity-0 animate-star2"
                  alt=""
                />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="absolute top-[0px] left-[0px] z-20"
              factorX={0.01}
              factorY={0.01}
              updateStyles={{
                width: windowSize?.width,
                height: windowSize?.height,
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute top-[5%] left-[5%]">
                  <Logo
                    height={(50 * (windowSize?.width || 1440)) / 1440}
                    className={"fill-primary opacity-0 animate-fade-in-logo"}
                  />
                </div>
                <div
                  className="absolute top-[20%] left-[55%]"
                  style={{
                    transform: `scale(${(windowSize?.width || 1440) / 1440})`,
                    transformOrigin: "top left",
                  }}
                >
                  <Content1 />
                </div>
                <div
                  className="absolute bottom-[6%] right-[55%] w-[550px]"
                  style={{
                    transform: `scale(${(windowSize?.width || 1440) / 1440})`,
                    transformOrigin: "bottom right",
                  }}
                >
                  <Content2 />
                </div>
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
