import { useEffect, useRef, useState } from "react";

import ServiceSpin from "./ServiceSpin/ServiceSpin";

export interface IService {
  id: number;
  image: string;
  title: string;
  content: string;
}

const services: IService[] = [
  {
    id: 1,
    image: "dev",
    title: "Web/App Development",
    content:
      "We design and build websites with infinite ideas and patterns, from basic informative websites to large scale systems.",
  },
  {
    id: 2,
    image: "line",
    title: "LINE OA Solutions",
    content: `We provide a creative solution to turn your LINE business account better than ever. <div class="text-[14px] lg:text-[18px] xl:text-[20px] 3xl:text-[30px]">(e.g. Chatbot / Service Appointment / CRM)</div>`,
  },
  {
    id: 3,
    image: "interact",
    title: "Interactive Solutions",
    content:
      "With creative and innovative ideas, we can create many creative campaigns for your brand.",
  },
  {
    id: 4,
    image: "research",
    title: "Research & UX Design",
    content:
      "Our specialists are ready to help you understand what are in your customers’ mind by using our knowledge and expertise.",
  },
];

const OurService = () => {
  const defaultTime = 5;
  const sectionRef = useRef<HTMLInputElement | null>(null);
  const [rotate, setRotate] = useState<number>(0);
  const [changing, setChanging] = useState<boolean>(false);
  const [service, setService] = useState<IService>(services[0]);
  const [time, setTime] = useState<number>(defaultTime);
  const [animateWork, setAnimateWork] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var elementTarget = document.getElementById("our-services");
      if (elementTarget && window.scrollY > elementTarget.offsetTop / 4) {
        setAnimateWork(true);
      }
    });
    window.addEventListener("blur", () => {
      setAnimateWork(false);
      setTime(defaultTime);
    });
    window.addEventListener("focus", () => {
      setAnimateWork(true);
    });
  }, []);

  useEffect(() => {
    if (rotate !== 0) {
      setChanging(true);
      setTimeout(() => {
        setChanging(false);
      }, 1000);
      setTimeout(() => {
        setService(
          services[(Math.abs(rotate) % (180 * services.length)) / 180]
        );
        setTime(defaultTime);
      }, 500);
    }
    if (Math.abs(rotate) === 180 * services.length) {
      setTimeout(() => {
        setRotate(0);
      }, 1000);
    }
  }, [rotate]);

  useEffect(() => {
    let timeout: any;
    if (animateWork) {
      if (time === 0) {
        onNextContent();
      } else {
        timeout = setTimeout(() => {
          setTime((time) => time - 1);
        }, 1000);
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [time, animateWork]);

  const onPrevContent = () => {
    setRotate((rotate) => rotate - 180);
  };

  const onNextContent = () => {
    setRotate((rotate) => {
      return rotate + 180;
    });
  };

  return (
    <div
      id="our-services"
      ref={sectionRef}
      className="lg:min-h-[720px] lg:max-h-[800px] xl:min-h-[800px] xl:max-h-[1000px] lg:h-screen relative overflow-hidden lg:overflow-visible"
    >
      <div className="w-full lg:h-full container py-[50px]">
        <h2
          className="uppercase text-primary"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Our
          <br />
          Services
        </h2>
        <div className="hidden lg:grid lg:grid-cols-2 mt-[50px]">
          <div
            className="col-span-1 lg:flex space-x-[30px] xl:space-x-[60px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h3
              className="text-primary font-black text-[80px] leading-[97.52px] xl:text-[128px] xl:leading-[156.03px] duration-300"
              style={{
                transform: changing ? "translateY(20px)" : "translateY(0)",
                opacity: changing ? 0 : 1,
              }}
            >
              0{service.id}
            </h3>
            <div
              className="duration-300 delay-[200ms]"
              style={{
                transform: changing ? "translateY(20px)" : "translateY(0)",
                opacity: changing ? 0 : 1,
              }}
            >
              <div className="h-[97.52px] xl:h-[156.03px] lg:flex lg:items-center">
                <h4 className="topic1 leading-10">{service.title}</h4>
              </div>
              <div
                className="body1"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="lg:hidden mt-[50px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h3 className="text-primary font-black text-[80px] leading-[97.52px] lg:text-[128px] lg:leading-[156.03px]">
              0{service.id}
            </h3>
            <div>
              <div className="lg:h-[156.03px] lg:flex lg:items-center">
                <h4 className="topic1 leading-[60px]">{service.title}</h4>
              </div>
              <div
                className="body1 h-[150px]"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            </div>
          </div>
        </div>
      </div>
      <ServiceSpin
        rotate={rotate}
        services={services}
        service={service}
        time={time}
        animateWork={animateWork}
      />
    </div>
  );
};

export default OurService;
