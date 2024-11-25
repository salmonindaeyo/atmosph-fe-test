import { useEffect, useState } from "react";
import { IPort } from "interfaces/common";
import PortfolioDesktop from "components/home/Portfolio/PortfolioDesktop";
import PortfolioMobile from "components/home/Portfolio/PortfolioMobile";

const fallbackPortImages: IPort[] = [
  {
    name: "WiPay",
    service: "Application Design",
  },
  {
    name: "Matchbox",
    service: "CRM - LINE OA Solutions",
  },
  {
    name: "FDA Thailand",
    service: "Line OA Solutions",
  },
  {
    name: "Thonburi Phanich",
    service: "Service Appointment",
  },
  {
    name: "Pruksa",
    service: "Web Development",
  },
  {
    name: "Pimdee",
    service: "Web Development",
  },
  {
    name: "MQDC Brites",
    service: "Web Development",
  },
  {
    name: "Daddy",
    service: "Photobooth - Interactive Solutions",
  },
  {
    name: "OCuSOFT",
    service: "Minigame - Interactive Solution",
  },
];

const Portfolio = () => {
  const [portImages, setPortImages] = useState<IPort[]>(fallbackPortImages);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch("/api/portfolio");
        if (response.ok) {
          const result = await response.json();
          if (result.data) {
            setPortImages(result.data);
          }
        }
      } catch (error) {
        console.error("Error fetching portfolios:", error);
        // Use fallback data if API call fails
        setPortImages(fallbackPortImages);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <>
      <PortfolioMobile portImages={portImages} />
      <PortfolioDesktop portImages={portImages} />
    </>
  );
};

export default Portfolio;
