const Content1 = () => {
  return (
    <div className="text-white space-y-10">
      <div className="flex items-center">
        <h3 className="text-[42px] tracking-widest leading-[34px] uppercase opacity-0 animate-fade-up">
          we create
        </h3>
        <div className="h-[3px] bg-white animate-line"></div>
      </div>
      <h2
        className="text-[58px] tracking-widest font-bold leading-[48px] uppercase text-transparent text-border opacity-0 animate-fade-up-half"
        // style={{
        //   WebkitTextStroke: "3px white",
        // }}
      >
        compelling
      </h2>
      <h2 className="text-[58px] tracking-widest font-bold leading-[48px] uppercase opacity-0 animate-fade-down-half">
        experiences
      </h2>
    </div>
  );
};

export default Content1;
