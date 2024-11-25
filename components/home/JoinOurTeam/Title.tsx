import Circle from "./Circle";
import dataTitle from "./dataTitle.json";

const Title = () => {
  return (
    <div className="border-y-2 border-primary relative py-3 pl-3">
      <div className="overflow-hidden w-full flex items-center">
        <h3 className="text-primary font-bold w-[275px] md:w-[215px] lg:w-[415px] 3xl:w-[730px] whitespace-nowrap absolute z-10 noise-title">
          JOIN OUR TEAM
        </h3>
        <div className="flex relative flex-nowrap items-center whitespace-nowrap marqueeStyle">
          {dataTitle.teams.map((team, key) => {
            return (
              <h3
                key={key}
                className="md:text-primary md:opacity-100 opacity-0 flex items-center"
              >
                <Circle className="mx-4 hidden md:block" />
                {team.name}
              </h3>
            );
          })}
        </div>
        <div className="flex relative flex-nowrap items-center whitespace-nowrap marqueeStyle">
          {dataTitle.teams.map((team, key) => {
            return (
              <h3
                key={key}
                className="md:text-primary md:opacity-100 opacity-0 flex items-center"
              >
                <Circle className="mx-4 hidden md:block" />
                {team.name}
              </h3>
            );
          })}
        </div>
        <div className="flex relative flex-nowrap items-center whitespace-nowrap marqueeStyle">
          {dataTitle.teams.map((team, key) => {
            return (
              <h3
                key={key}
                className="md:text-primary md:opacity-100 opacity-0 flex items-center"
              >
                <Circle className="mx-4 hidden md:block" />
                {team.name}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Title;
