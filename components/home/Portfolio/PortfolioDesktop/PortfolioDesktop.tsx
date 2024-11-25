import { useEffect, useState } from "react";

import Carousel from "./Carousel";
import { IPort } from "interfaces/common";

interface Props {
  portImages: IPort[];
}

const PortfolioLg: React.FC<Props> = ({ portImages }) => {
  const [carouselSize, setCarouselSize] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [animateWork, setAnimateWork] = useState<boolean>(false);
  const [animationWork, setAnimationWork] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

  var cellCount = portImages.length;

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

  useEffect(() => {
    console.log(carouselSize);
  }, [carouselSize]);

  useEffect(() => {
    function getCarouselSize() {
      setCarouselSize(
        document.getElementById("carousel-wrapper")?.offsetWidth as number
      );
    }
    window.addEventListener("resize", getCarouselSize);
    getCarouselSize();
    return () => {
      window.removeEventListener("resize", getCarouselSize);
    };
  }, []);

  useEffect(() => {
    rotateCarousel();
  }, [selectedIndex, carouselSize]);

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
  }, [selectedIndex, animateWork]);

  const rotateCarousel = () => {
    var carousel = document.querySelector(".carousel") as HTMLElement | null;
    var angle = (selectedIndex / cellCount) * -360;
    if (carousel) {
      let translateZ = 474;
      switch (carouselSize) {
        case 896:
          translateZ = 639;
          break;
        case 1120:
          translateZ = 859;
          break;
        case 1344:
          translateZ = 1030;
          break;
        case 1808:
          translateZ = 1525;
          break;
        default:
          break;
      }
      carousel.style.transform =
        "translateZ(-" + translateZ + "px) rotateY(" + angle + "deg)";
    }
  };

  const listenerScroll = () => {
    let elementTarget = document.getElementById("portfolio-desktop");
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

  const onNext = () => {
    setAnimationWork(false);
    setSelectedIndex((selectedIndex) => selectedIndex + 1);
  };

  const onPrev = () => {
    setAnimationWork(false);
    setSelectedIndex((selectedIndex) => selectedIndex - 1);
  };
  return (
    <div
      id="portfolio-desktop"
      className="container pt-[160px] pb-[80px] hidden md:block"
    >
      <div className="lg:hidden">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-primary mb-[30px] translate-x-[-3px]">
            PORTFOLIO
          </h2>
        </div>
        <div
          className="flex items-center justify-center mb-[30px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary rounded-full">
            <p className="text-white title2">
              {Math.abs((selectedIndex + 1) % portImages.length) === 0
                ? 9
                : Math.abs((selectedIndex + 1) % portImages.length)}
            </p>
          </div>
          <div className="relative w-[160px] mx-[16px]">
            <div className="border-t-2 border-blue-100"></div>
            <div
              className={`absolute top-0 w-0 border-t-2 border-primary ${
                animationWork ? "animate-line-number" : ""
              }`}
              style={{
                animationDuration: "5s",
              }}
            ></div>
          </div>
          <p className="text-primary title2">9</p>
        </div>
      </div>

      <div
        className="hidden lg:grid grid-cols-3 w-full mb-[40px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-primary lg:text-[40px] xl:text-[48px] lg:font-semibold 3xl:text-[84px] translate-x-[-4px] 3xl:translate-x-[-6px]">
          PORTFOLIO
        </h2>
        <div className="flex items-center justify-center">
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-primary rounded-full">
            <p className="text-white title2">
              {Math.abs((selectedIndex + 1) % portImages.length) === 0
                ? 9
                : Math.abs((selectedIndex + 1) % portImages.length)}
            </p>
          </div>
          <div className="relative w-[160px] mx-[16px] 3xl:w-[250px]">
            <div className="border-t-2 border-blue-100"></div>
            <div
              className={`absolute top-0 w-0 border-t-2 border-primary ${
                animationWork ? "animate-line-number" : ""
              }`}
              style={{
                animationDuration: "5s",
              }}
            ></div>
          </div>
          <p className="text-primary title2">9</p>
        </div>
        <nav className="flex justify-end items-center space-x-[20px]">
          <button
            className="nav prev h-[50px] border border-primary p-[11px]"
            onClick={onPrev}
          >
            <img src="/image/icons/previuos.svg" alt="previous-icon" />
          </button>
          <button
            className="nav next h-[50px] border border-primary p-[11px]"
            onClick={onNext}
          >
            <img src="/image/icons/next.svg" alt="next-icon" />
          </button>
        </nav>
      </div>
      <div
        className="h-[351px] lg:h-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Carousel portImages={portImages} selectedIndex={selectedIndex} />
      </div>
      <nav className="lg:hidden flex justify-center items-center space-x-[20px]">
        <button
          className="nav prev h-[50px] border border-primary p-[11px]"
          onClick={onPrev}
        >
          <img src="/image/icons/previuos.svg" alt="previous-icon" />
        </button>
        <button
          className="nav next h-[50px] border border-primary p-[11px]"
          onClick={onNext}
        >
          <img src="/image/icons/next.svg" alt="next-icon" />
        </button>
      </nav>
    </div>
  );
};

export default PortfolioLg;
