import { NavBar } from "../components/NavBar";
import { Input } from "../components/Input";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
//@ts-ignore
import working from "./../assets/images/illustration-working.svg";
//@ts-ignore
import backgroundCenter from "./../assets/images/bg-shorten-desktop.svg";
//@ts-ignore
import recognition from "./../assets/images/icon-brand-recognition.svg";
//@ts-ignore
import record from "./../assets/images/icon-detailed-records.svg";
//@ts-ignore
import customizable from "./../assets/images/icon-fully-customizable.svg";
//@ts-ignore
import boost from "./../assets/images/bg-boost-desktop.svg";

const MainContainer = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="top-container">
        <div className="left-container">
          <div className="title">
            <h1>More than just shorter links</h1>
          </div>
          <div className="infoTextContainer">
            <p>
              Build your brand's recognition and get detailed <br />
              insights on how your links are performing.
            </p>
          </div>
          <Button classname="top-container-button" text="Get Started" />
        </div>
        <div className="right-container">
          <img src={working} alt="" />
        </div>
      </div>
      <div className="center-div">
        <img src={backgroundCenter} alt="" />
        <div className="center-div-input-button">
          <Input />
          <Button classname="button-short" text="Shorten It!" />
        </div>
      </div>
      <div className="botton-container">
        <div className="tittle">
          <h1>Advances Statistics </h1>
          <p>
            Track how your link are performing across the web with <br />
            our advances statistics dashboard
          </p>
        </div>
        <div className="container-statistics">
          <div className="interline-blue"></div>
          <div className="left-container">
            <div className="icon">
              <img src={recognition} alt="" />
            </div>
            <div className="text-container">
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic link don't
                mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="center-container">
            <div className="icon">
              <img src={record} alt="" />
            </div>
            <div className="text-container">
              <h3>Detailed Records</h3>
              <p>
                Gain insights intowho is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="right-container">
            <div className="icon">
              <img src={customizable} alt="" />
            </div>
            <div className="text-container">
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-footer">
        <div className="image-footer">
          <img src={boost} alt="" />
        </div>
        <h1>Boost your links today</h1>
        <Button classname="top-footer-button" text="Get Started" />
      </div>
      <Footer />
    </div>
  );
};

export { MainContainer };
