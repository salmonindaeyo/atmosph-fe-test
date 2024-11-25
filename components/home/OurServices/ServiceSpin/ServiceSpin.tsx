import { useEffect, useState } from "react";

import { IService } from "../OurServices";
import ServiceBall from "./ServiceBall";

interface Props {
  rotate: number;
  services: IService[];
  service: IService;
  time: number;
  animateWork: boolean;
}

const ServiceSpin: React.FC<Props> = ({
  rotate,
  services,
  service,
  time,
  animateWork,
}) => {
  const [animationStart, setAnimationStart] = useState<boolean>(false);

  useEffect(() => {
    if (time && animateWork) {
      setAnimationStart(true);
    } else {
      setAnimationStart(false);
    }
  }, [time, animateWork]);

  return (
    <>
      <div
        className="hidden lg:block absolute top-0 right-[-100px] 2xl:right-0 h-full lg:min-w-[720px] w-[100vh] lg:max-w-[800px] xl:min-w-[800px] xl:max-w-[1000px]"
        style={{
          transformOrigin: "right center",
          transform: `translateX(50%)`,
        }}
      >
        <div
          className="relative h-full w-full rounded-full bg-blue-50"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0 bg-primary ${
                animationStart ? "animate-height-100" : ""
              }`}
              style={{
                animationDuration: "5s",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_4px)] h-[calc(100%_-_4px)] rounded-full bg-noise"></div>
          </div>
          <div
            className="xl:hidden absolute top-0 left-0 w-full h-full transition-all ease-in"
            style={{
              transform: `rotate(${rotate}deg)`,
              transitionDuration: rotate === 0 ? "0ms" : "1000ms",
            }}
          >
            <ServiceBall
              rotate={rotate}
              services={services}
              service={service}
              className="left-0 top-1/2"
              transform="translateY(-50%) translateX(-50%)"
              isOdd={false}
              width={150}
              widthScale={75}
            />
            <ServiceBall
              rotate={rotate}
              services={services}
              service={service}
              className="right-0 top-1/2 w-[206px] h-[206px]"
              transform="translateY(-50%) translateX(50%) rotate(180deg)"
              isOdd={true}
              width={150}
              widthScale={75}
            />
          </div>
          <div
            className="lg:hidden xl:block absolute top-0 left-0 w-full h-full transition-all ease-in"
            style={{
              transform: `rotate(${rotate}deg)`,
              transitionDuration: rotate === 0 ? "0ms" : "1000ms",
            }}
          >
            <ServiceBall
              rotate={rotate}
              services={services}
              service={service}
              className="left-0 top-1/2"
              transform="translateY(-50%) translateX(-50%)"
              isOdd={false}
              width={206}
              widthScale={103}
            />
            <ServiceBall
              rotate={rotate}
              services={services}
              service={service}
              className="right-0 top-1/2 w-[206px] h-[206px]"
              transform="translateY(-50%) translateX(50%) rotate(180deg)"
              isOdd={true}
              width={206}
              widthScale={103}
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="block lg:hidden h-[200px]"
      >
        <div className="h-[150vw] w-[150vw] -translate-x-[25vw] rounded-full bg-blue-50 transition-all ease-in">
          <div className="relative h-full w-full ">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <div
                className={`absolute top-0 left-0 w-0 h-full bg-primary ${
                  animationStart ? "animate-width-100" : ""
                }`}
                style={{
                  animationDuration: "5s",
                }}
              ></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_4px)] h-[calc(100%_-_4px)] rounded-full bg-noise"></div>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full transition-all ease-in"
              style={{
                transform: `rotate(${rotate}deg)`,
                transitionDuration: rotate === 0 ? "0ms" : "1000ms",
              }}
            >
              <ServiceBall
                rotate={rotate}
                services={services}
                service={service}
                className="top-0 left-1/2"
                transform="translateY(-50%) translateX(-50%)"
                isOdd={false}
                width={98}
                widthScale={49}
              />
              <ServiceBall
                rotate={rotate}
                services={services}
                service={service}
                className="bottom-0 left-1/2"
                transform="translateY(50%) translateX(-50%) rotate(180deg)"
                isOdd={true}
                width={98}
                widthScale={49}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSpin;
