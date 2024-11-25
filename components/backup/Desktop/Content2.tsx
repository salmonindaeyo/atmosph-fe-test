import ButtonHalfCircle from "components/common/Button/ButtonHalfCircle";
import { showMessenger } from "react-messenger-chat-plugin";

const Content2 = () => {
  return (
    <div className="text-right space-y-[70px]">
      <div className="space-y-6 uppercase">
        <h3 className="text-[24px] tracking-widest leading-[34px] opacity-0 animate-fade-up-content2-1">
          WHAT’S YOUR NEXT PROJECT?
        </h3>
        <h2 className="text-[36px] tracking-widest font-bold leading-[48px] opacity-0 animate-fade-up-content2-2">
          <span>LET’S TURN YOUR IDEAS</span>
          <br />
          <span>INTO REALITY.</span>
        </h2>
      </div>
      <div className="opacity-0 animate-fade-up-content2-3">
        <ButtonHalfCircle
          onClick={() => {
            showMessenger(true);
          }}
        >
          <div className="text-[18px] font-bold tracking-widest">
            <span>CHAT</span>
            <br />
            <span>WITH US</span>
          </div>
        </ButtonHalfCircle>
      </div>
    </div>
  );
};

export default Content2;
