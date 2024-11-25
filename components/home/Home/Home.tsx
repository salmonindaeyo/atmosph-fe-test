import Galaxy from "./Galaxy";
import Logo from "../../SVG/Logo";
import Words from "./Words";

let words = ["Digital", "Creates compelling", "Design &", "Digital"];
let words2 = ["Solutions", "Experiences", "Development", "Solutions"];

const Home = () => {
  return (
    <div className="relative">
      <div className="container min-h-[800px] h-screen">
        <div
          className="absolute top-[80px] hidden lg:block z-[999]"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <Logo className="fill-primary" width={243} height={38} />
        </div>
        <div
          className="absolute top-[80px] lg:hidden z-[999]"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <Logo className="fill-primary" width={191.84} height={30} />
        </div>
        <div className="relative xl:pl-[100px] h-full flex items-center z-[999]">
          <div>
            <p
              className="uppercase text-primary text-[24px] md:text-[44px] lg:text-[60px] 3xl:text-[92px] font-bold"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1500"
            >
              Atmosph
            </p>
            <Words wordsArray={[words, words2]} delay={500} />
          </div>
        </div>
      </div>
      <Galaxy />
    </div>
  );
};

export default Home;
