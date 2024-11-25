import Boxcontent from "components/home/JoinOurTeam/Boxcontent";
import Footer from "components/Footer/Footer";
import Head from "next/head";
import HomeSection from "components/home/Home";
import JoinOurTeam from "components/home/JoinOurTeam";
import { MessengerChat } from "react-messenger-chat-plugin";
import type { NextPage } from "next";
import OurClients from "components/home/OurClients";
import OurService from "components/home/OurServices";
import Portfolio from "components/home/Portfolio";
import Title from "../components/home/JoinOurTeam/Title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Atmosph</title>
        <meta
          name="description"
          content="ติดปีกให้ธุรกิจของคุณ! เราพร้อมให้คำปรึกษา และพัฒนาธุรกิจของคุณ ให้ก้าวทันยุค Digital ด้วยเทคโนโลยีที่ทันสมัย"
        ></meta>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:title"
          content="Atmosph - Digital Solutions Empowering Your Business"
        ></meta>
        <meta
          property="og:description"
          content="ติดปีกให้ธุรกิจของคุณ! เราพร้อมให้คำปรึกษา และพัฒนาธุรกิจของคุณ ให้ก้าวทันยุค Digital ด้วยเทคโนโลยีที่ทันสมัย"
        ></meta>
        <meta property="og:image" content="/favicon.png"></meta>
      </Head>
      <main
        id="home"
        className="relative max-w-[2000px] mx-auto overflow-x-hidden bg-noise bg-radial"
      >
        <div className="hidden 3xl:block h-full w-[100px] bg-gradient-to-r from-white to-transparent absolute top-0 left-0 z-[999]"></div>
        <div className="hidden 3xl:block h-full w-[100px] bg-gradient-to-l from-white to-transparent absolute top-0 right-0 z-[999]"></div>
        <HomeSection />
        <OurService />
        <Portfolio />
        <OurClients />
        <JoinOurTeam />
        <Footer />
        <MessengerChat
          pageId="111699113781344"
          themeColor={"#475AA8"}
          loggedInGreeting="Atmosph ยินดีต้อนรับ ต้องการสอบถามข้อมูล หรือขอคำปรึกษา เราพร้อมให้บริการครับ"
          loggedOutGreeting="Atmosph ยินดีต้อนรับ ต้องการสอบถามข้อมูล หรือขอคำปรึกษา เราพร้อมให้บริการครับ"
          greetingDialogDisplay={"show"}
        />
      </main>
    </>
  );
};

export default Home;
