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
    return (
      <div className="flex justify-center items-center" role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-400"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
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
