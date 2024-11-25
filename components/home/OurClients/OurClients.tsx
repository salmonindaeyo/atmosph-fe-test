const imageIcon = [
  "merck",
  "pruksa",
  "benz",
  "mqdc",
  "unilever",
  "fda",
  "eggmall",
  "ocusoft",
  "matchbox",
  "pimdee",
  "wipay",
  "daddy",
];

const OurClients = () => {
  return (
    <div className="container pb-[160px] md:pt-[80px]">
      <h2
        className="text-primary mb-[60px] lg:mb-[80px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        OUR
        <br />
        CLIENTS
      </h2>
      <div className="grid grid-cols-3 gap-x-[calc((100%_-_231px)/2)] gap-y-[50px] md:grid-cols-4 md:gap-x-[calc((100%_-_300px)/3)] lg:grid-cols-6 lg:gap-x-[calc((100%_-_550px)/5)] xl:gap-x-[calc((100%_-_690px)/5)] 3xl:gap-x-[calc((100%_-_1200px)/5)] ">
        {imageIcon.map((item, key) => {
          return (
            <div
              key={key}
              className="h-[50px] 3xl:h-[80px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                className="w-full h-full object-contain"
                src={`image/client/${item}.webp`}
                alt={item}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurClients;
