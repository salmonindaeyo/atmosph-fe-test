import Circle from "./Circle";
import { Plus } from "components/SVG";
import { useState, useEffect } from "react";
import dataTitle from "./dataTitle.json";

interface Career {
  _id: string;
  name: string;
  isShow: boolean;
  qualifications: string[];
  responsibilities: string[];
}

const Boxcontent = () => {
  const [active, setActive] = useState(0);
  const [careers, setCareers] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch("/api/careers");
        const result = await response.json();
        if (
          result.data &&
          Array.isArray(result.data) &&
          result.data.length > 0
        ) {
          setCareers(result.data);
        } else {
          const fallbackData: Career[] = dataTitle.teams.map((team, index) => ({
            _id: index.toString(),
            name: team.name,
            isShow: true,
            qualifications: team.qualifications,
            responsibilities: team.responsibilities,
          }));
          setCareers(fallbackData);
        }
      } catch (error) {
        console.error("Error fetching careers:", error);
        const fallbackData: Career[] = dataTitle.teams.map((team, index) => ({
          _id: index.toString(),
          name: team.name,
          isShow: true,
          qualifications: team.qualifications,
          responsibilities: team.responsibilities,
        }));
        setCareers(fallbackData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="border-2 border-b-0 border-primary"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {careers.map((career, key) => {
          return (
            <div key={career._id}>
              <div
                className={`${
                  key === active ? "bg-primary" : "cursor-pointer"
                }`}
                onClick={() => setActive(key)}
              >
                <div
                  className={`flex topic2 paddingBoxTitle border-b-2 border-primary ${
                    key === active ? "text-white" : "text-primary"
                  }`}
                >
                  {career.name}
                  <div
                    className={`ml-auto ${
                      key === active ? "animate-rotate-45" : "animate-rotate-0"
                    }`}
                  >
                    <div className="w-[20px] h-[20px] lg:h-[36px] lg:w-[36px]">
                      <Plus
                        className={`${
                          key === active ? "hidden" : "fill-primary"
                        }`}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  key === active ? " delay-75" : "max-h-0"
                } transition-all duration-500 overflow-hidden`}
              >
                {/* Mobile */}
                <div
                  className={`px-[16px] py-[21px] lg:px-[37px] lg:py-[46px] md:hidden block joinourteam ${
                    key === active
                      ? "opacity-100 visible border-b-2 border-primary"
                      : "opacity-0 invisible"
                  } transition-all duration-500`}
                >
                  <div className="title1 text-primary">Qualifications</div>
                  <div className="lg:flex">
                    <div className="mt-[9px] mb-5 w-[136px] bg-primary h-[1px]" />
                    <div className="ml-1">
                      {career.qualifications.map((qualification, index) => (
                        <div key={index} className="mt-2 flex body2">
                          <div>
                            <Circle className="mt-[6px] lg:mt-[4px] mr-2 lg:mx-5" />
                          </div>
                          {qualification}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-7">
                    <div className="title1 text-primary">Responsibilities</div>
                    <div className="lg:flex">
                      <div className="mt-[9px] mb-5 w-[136px] bg-primary h-[1px]" />
                      <div className="ml-1">
                        {career.responsibilities.map(
                          (responsibility, index) => (
                            <div key={index} className="mt-2 flex body2">
                              <div>
                                <Circle className="mt-[6px] lg:mt-[4px] mr-2 lg:mx-5" />
                              </div>
                              {responsibility}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop */}
                <div
                  className={`hidden md:block ${
                    key === active
                      ? "opacity-100 visible border-b-2 border-primary"
                      : "opacity-0 invisible"
                  } transition-all duration-500`}
                >
                  <a href="mailto:info@atmosph.com" className="joinourteam">
                    <div className="px-[16px] py-[21px] lg:px-[37px] lg:py-[46px]">
                      <div className="title2 text-primary">Qualifications</div>
                      <div className="lg:flex">
                        <div className="mt-[9px] lg:mt-[20px] w-[136px] bg-primary h-[1px]" />
                        <div className="ml-1">
                          {career.qualifications.map((qualification, index) => (
                            <div key={index} className="mt-3 flex body2">
                              <div>
                                <Circle className="mt-[6px] lg:mt-[4px] mr-2 lg:mx-5" />
                              </div>
                              {qualification}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-7">
                        <div className="title2 text-primary">
                          Responsibilities
                        </div>
                        <div className="lg:flex">
                          <div className="mt-[9px] lg:mt-[20px] w-[136px] bg-primary h-[1px]" />
                          <div className="ml-1">
                            {career.responsibilities.map(
                              (responsibility, index) => (
                                <div key={index} className="mt-3 flex body2">
                                  <div>
                                    <Circle className="mt-[6px] lg:mt-[4px] mr-2 lg:mx-5" />
                                  </div>
                                  {responsibility}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boxcontent;
