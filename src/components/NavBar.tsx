//@ts-ignore
import logo from "./../assets/images/logo.svg";

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
        <button className="login" type="button">
          Login
        </button>
        <button className="signup" type="button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export { NavBar };
