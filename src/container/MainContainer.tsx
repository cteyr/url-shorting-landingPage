import { NavBar } from "../components/NavBar";
//@ts-ignore
import working from "./../assets/images/illustration-working.svg";

const MainContainer = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="info-container">
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
    </div>
  );
};

export { MainContainer };
