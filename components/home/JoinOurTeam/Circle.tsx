const Circle = ({ className }: any) => {
  return (
    <div
      className={`w-[10px] h-[10px] lg:w-[16px] lg:h-[16px] rounded-full bg-primary ${className}`}
    />
  );
};

export default Circle;
