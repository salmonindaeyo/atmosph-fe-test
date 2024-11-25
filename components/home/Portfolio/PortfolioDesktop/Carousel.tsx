import { IPort } from "interfaces/common";

interface Props {
  portImages: IPort[];
  selectedIndex: number;
}

const Carousel: React.FC<Props> = ({ portImages, selectedIndex }) => {
  return (
    <>
      <div id="carousel-wrapper"></div>
      <div className="scene">
        <div className="carousel">
          {portImages.map((item, key) => {
            let indexActive = selectedIndex % 9;
            let isCenter = indexActive === key;
            let isLeft = (indexActive - 1 < 0 ? 8 : indexActive - 1) === key;
            let isRight = (indexActive + 1 > 8 ? 0 : indexActive + 1) === key;
            return (
              <div
                key={key}
                className="carousel__cell transition-all"
                style={{
                  opacity: isCenter || isRight || isLeft ? 1 : 0,
                  transitionDelay:
                    isCenter || isRight || isLeft ? "0ms" : "300ms",
                }}
              >
                <img
                  className="mb-[20px] w-full"
                  src={item.image || `/image/portfolio/Port-${item.name}.webp`}
                  alt={item.name}
                />
                <div
                  className={`${
                    isCenter
                      ? "opacity-100 transition-opacity delay-500 duration-500"
                      : "opacity-0"
                  }`}
                >
                  <p className="title1 xl:text-[24px] 2xl:text-[28px] 3xl:text-[38px] mb-[4px]">
                    {item.service}
                  </p>
                  <p className="text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[32px] font-['Hind']">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
