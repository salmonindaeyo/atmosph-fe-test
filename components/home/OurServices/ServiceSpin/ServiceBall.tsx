import { IService } from "../OurServices";

interface Props {
  rotate: number;
  services: IService[];
  service: IService;
  className: string;
  transform: string;
  isOdd: boolean;
  width: number;
  widthScale: number;
}

const ServiceBall: React.FC<Props> = ({
  rotate,
  services,
  service,
  className,
  transform,
  isOdd,
  width,
  widthScale,
}) => {
  return (
    <div
      className={`absolute ${className} transition-all ease-in`}
      style={{
        opacity: (
          isOdd
            ? ((Math.abs(rotate) % (180 * services.length)) / 180) % 2 !== 0
            : rotate === 0 ||
              ((Math.abs(rotate) % (180 * services.length)) / 180) % 2 === 0
        )
          ? 1
          : 0.5,
        width: (
          isOdd
            ? ((Math.abs(rotate) % (180 * services.length)) / 180) % 2 !== 0
            : rotate === 0 ||
              ((Math.abs(rotate) % (180 * services.length)) / 180) % 2 === 0
        )
          ? `${width}px`
          : `${widthScale}px`,
        height: (
          isOdd
            ? ((Math.abs(rotate) % (180 * services.length)) / 180) % 2 !== 0
            : rotate === 0 ||
              ((Math.abs(rotate) % (180 * services.length)) / 180) % 2 === 0
        )
          ? `${width}px`
          : `${widthScale}px`,
        transform,
        transitionDuration:
          rotate === 0 ||
          ((Math.abs(rotate) % (180 * services.length)) / 180) % 2 === 0
            ? isOdd
              ? "500ms"
              : "1000ms"
            : isOdd
            ? "1000ms"
            : "500ms",
      }}
    >
      <div className="relative w-full h-full">
        <div
          className={`absolute top-0 left-0 bg-primary rounded-full  w-full h-full flex items-center`}
        >
          <img
            src={`/image/icons/services/${service.image}.png`}
            className="w-[50%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceBall;
