//@ts-ignore
import logo from "./../assets/images/logo.svg";

import { HiMenu } from "react-icons/Hi";

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
      <div className="menu-seccion-container">
        <HiMenu size={35} />
      </div>
      <div className="session-container">
        <Button classname="login" text="Login" />
        <Button classname="signup" text="Sign up" />
      </div>
    </div>
  );
};

export { NavBar };
