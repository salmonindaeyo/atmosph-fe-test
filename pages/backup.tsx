import { createContext, useEffect, useState } from "react";

import Desktop from "components/backup/Desktop";
import Head from "next/head";
import { MessengerChat } from "react-messenger-chat-plugin";
import Mobile from "components/backup/Mobile";
import type { NextPage } from "next";
import useWindowSize from "hooks/useWindowSize";

type windowSizeProps = {
  width: number;
  height: number;
} | null;

export const AppContext = createContext<{ windowSize: windowSizeProps }>({
  windowSize: null,
});

const Home: NextPage = () => {
  const size = useWindowSize();
  const [windowSize, setWindowSize] = useState<windowSizeProps>(null);

  useEffect(() => {
    if (size.width && size.height) {
      let width = 0;
      let height = 0;
      if (size.width >= size.height) {
        if (size.width >= 1500) {
          width = 1500;
          height = 843.75;
        } else {
          width = size.width;
          height = (size.width * 9) / 16;
        }
      } else {
        width = size.width;
        height = (size.width * 9) / 16;
      }
      setWindowSize({ width, height });
    }
  }, [size]);

  return (
    <div>
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
        id="home-backup"
        className="ios-size md:h-screen overflow-hidden bg-[#CED0D6]"
      >
        <AppContext.Provider
          value={{
            windowSize,
          }}
        >
          <Mobile />
          <Desktop />
        </AppContext.Provider>
        <MessengerChat
          pageId="111699113781344"
          themeColor={"#475AA8"}
          loggedInGreeting="Atmosph ยินดีต้อนรับ ต้องการสอบถามข้อมูล หรือขอคำปรึกษา เราพร้อมให้บริการครับ"
          loggedOutGreeting="Atmosph ยินดีต้อนรับ ต้องการสอบถามข้อมูล หรือขอคำปรึกษา เราพร้อมให้บริการครับ"
          greetingDialogDisplay={"show"}
        />
      </main>
    </div>
  );
};

export default Home;
