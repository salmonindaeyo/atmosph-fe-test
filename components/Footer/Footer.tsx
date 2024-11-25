import FacebookLogo from "components/SVG/FacebookLogo";
import Link from "next/link";
import Logo from "../SVG/Logo";
const Footer = () => {
  return (
    <div className="container lg:min-h-[50vh] py-[150px] lg:pt-[290px]">
      <Logo className="fill-primary" width={243} height={38} />

      <div className="grid grid-cols-4 gap-4 mt-[43px] md:mt-[46px]">
        <div
          className="col-span-4 lg:col-span-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="body3 text-primary">MORE INFORMATION</p>
          <a href="mailto:info@atmosph.com" className="group">
            <h3 className="inline-block group-hover:text-primary duration-200">
              info@atmosph.com
              <img
                src="/image/arrow-right.png"
                className="inline-block ml-3 w-[25px] h-[20px] md:w-[32px] md:h-[27px] group-hover:translate-x-4 transition"
                alt=""
              />
            </h3>
          </a>
        </div>
        <div className="col-span-3 lg:col-span-1 mt-[60px] lg:mt-0 space-y-[30px]">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="body3 text-primary">CONTACT</p>
            <a href="tel:+66917075964">
              <p className="body3 hover:text-primary duration-200">
                +66 91 707 5964
              </p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="body3 text-primary">ADDRESS</p>
            <p className="body3">Mitrtown Office Tower 24th fl.</p>
            <p className="body3">944 Rama IV Road,</p>
            <p className="body3">Wangmai, Pathumwan,</p>
            <p className="body3">Bangkok 10330</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="body3 text-primary">FOLLOW US</p>
            <div className="md:w-8 md:h-8 w-5 h-5 group">
              <Link href="https://www.facebook.com/atmosph.official">
                <a target="_blank">
                  <FacebookLogo
                    width={"100%"}
                    height={"100%"}
                    className="fill-[#000] group-hover:fill-primary duration-200"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
