import { useEffect, useRef, useState } from "react";

import { IPort } from "interfaces/common";
import Slider from "react-slick";

interface Props {
  portImages: IPort[];
}

const PortfolioMobile: React.FC<Props> = ({ portImages }) => {
  const ref = useRef<Slider>(null);
  const [number, setNumber] = useState<number>(1);
  const [animateWork, setAnimateWork] = useState<boolean>(false);
  const [animationWork, setAnimationWork] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", listenerScroll);
    window.addEventListener("blur", listenerBlur);
    window.addEventListener("focus", listenerFocus);
    return () => {
      window.removeEventListener("scroll", listenerScroll);
      window.removeEventListener("blur", listenerBlur);
      window.removeEventListener("focus", listenerFocus);
    };
  }, []);

  const listenerScroll = () => {
    let elementTarget = document.getElementById("portfolio-mobile");
    if (elementTarget && window.scrollY > elementTarget.offsetTop) {
      setAnimateWork(true);
    }
  };

  const listenerBlur = () => {
    setAnimateWork(false);
    setAnimationWork(false);
  };

  const listenerFocus = () => {
    setAnimateWork(true);
  };

  useEffect(() => {
    let time: any;
    let timeoutAni: any;
    if (animateWork) {
      if (!isFirstTime) {
        timeoutAni = setTimeout(() => {
          setAnimationWork(true);
          time = setTimeout(() => {
            onNext();
          }, 5000);
        }, 500);
      } else {
        setAnimationWork(true);
        setIsFirstTime(false);
        time = setTimeout(() => {
          onNext();
        }, 5000);
      }
    }
    return () => {
      clearTimeout(time);
      clearTimeout(timeoutAni);
    };
  }, [number, animateWork]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: false,
    // autoplaySpeed: 5000,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setAnimationWork(false);
      setIsFirstTime(false);
      setNumber(newIndex + 1);
    },
    afterChange: () => {
      setAnimationWork(true);
    },
  };

  const onNext = () => {
    ref.current?.slickNext();
  };

  const onPrev = () => {
    ref.current?.slickPrev();
  };

  return (
    <div
      id="portfolio-mobile"
      className="container py-[160px] lg:hidden md:hidden"
    >
      <h2
        className="text-primary mb-[30px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        PORTFOLIO
      </h2>
      <div
        className="flex items-center justify-center mb-[30px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-[25px] h-[25px] flex items-center justify-center bg-primary rounded-full">
          <p className="text-white title2">{number}</p>
        </div>
        <div className="relative w-[160px] mx-[16px]">
          <div className="border-t-2 border-blue-100"></div>
          <div
            className={`absolute top-0 w-0 border-t-2 border-primary ${
              animationWork ? "animate-line-number" : ""
            }`}
            style={{
              animationDuration: isFirstTime ? "5s" : "4.5s",
            }}
          ></div>
        </div>
        <p className="text-primary title2">9</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Slider ref={ref} {...settings}>
          {portImages.map((item, key) => {
            return (
              <div key={key}>
                <img
                  className="mb-[20px] w-full"
                  src={item.image || `/image/portfolio/Port-${item.name}.webp`}
                  alt={item.name}
                />
                <p className="topic2 mb-[4px]">{item.service}</p>
                <p className="body1 mb-[32px]">{item.name}</p>
              </div>
            );
          })}
        </Slider>
        <div className="flex justify-center space-x-[20px]">
          <button className="border border-primary p-[11px]" onClick={onPrev}>
            <img src="/image/icons/previuos.svg" alt="previous-icon" />
          </button>
          <button className="border border-primary p-[11px]" onClick={onNext}>
            <img src="/image/icons/next.svg" alt="next-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMobile;
