import { NavBar } from "../components/NavBar";
import { Input } from "../components/Input";
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
          <button type="button">Get Started</button>
        </div>
        <div className="right-container">
          <img src={working} alt="" />
        </div>
      </div>
      <div className="center-div">
        <img src={backgroundCenter} alt="" />
        <Input />
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
                Boost your brand recognition with each click. Generic link don't
                mean a thing. Branded links help instil confidence in your
                content.
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
                Boost your brand recognition with each click. Generic link don't
                mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainContainer };
