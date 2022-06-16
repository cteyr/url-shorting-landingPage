//@ts-ignore
import logo from "./../assets/images/logo.svg";
import { HiMenu } from "react-icons/hi";
import { Button } from "./../components/Button";

const NavBar = ({ onClick, classname }: Iprops) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`pages-link ${classname}`}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </div>
      <div className="menu-seccion-container">
        <HiMenu size={35} onClick={onClick} />
      </div>
      <div className={`session-container ${classname}`}>
        <Button classname="login" text="Login" />
        <Button classname="signup" text="Sign up" />
      </div>
    </div>
  );
};
type Iprops = {
  onClick: () => void;
  classname?: string;
};
export { NavBar };
