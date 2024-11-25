const Galaxy = () => {
  return (
    <>
      <div
        className="absolute top-[-50px] right-[-280px] lg:top-[-400px] lg:right-[-400px]"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div className="relative">
          <div
            className={`relative w-[500px] h-[500px] lg:w-[1000px] lg:h-[1000px] border border-blue-50 rounded-full animate-rotate-full`}
            style={{
              animationDuration: `15s`,
            }}
          >
            <div
              className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] lg:w-[23px] lg:h-[23px] rounded-full bg-blue-50`}
            ></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`relative w-[380px] h-[380px] lg:w-[800px] lg:h-[800px] border border-blue-50 rounded-full animate-rotate-full`}
              style={{
                animationDuration: `15s`,
              }}
            >
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] lg:w-[23px] lg:h-[23px] rounded-full bg-blue-50`}
              ></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`relative w-[260px] h-[260px] lg:w-[600px] lg:h-[600px] border border-blue-50 rounded-full animate-rotate-full`}
              style={{
                animationDuration: `15s`,
              }}
            >
              <div
                className={`absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] lg:w-[23px] lg:h-[23px] rounded-full bg-blue-50`}
              ></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`relative w-[140px] h-[140px] lg:w-[400px] lg:h-[400px] border border-blue-50 rounded-full animate-rotate-full`}
              style={{
                animationDuration: `15s`,
              }}
            >
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] lg:w-[23px] lg:h-[23px] rounded-full bg-blue-50`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Galaxy;
