//@ts-ignore
import logo from "./../assets/images/logo.svg";

import { Button } from "./../components/Button";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="pages-link">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </div>
      <div className="session-container">
        <Button classname="login" text="Login" />
        <Button classname="signup" text="Sign up" />
      </div>
    </div>
  );
};

export { NavBar };
