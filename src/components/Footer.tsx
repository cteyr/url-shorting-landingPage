//@ts-ignore
import facebook from "./../assets/images/icon-facebook.svg";
//@ts-ignore
import twitter from "./../assets/images/icon-twitter.svg";
//@ts-ignore
import printerest from "./../assets/images/icon-pinterest.svg";
//@ts-ignore
import instagram from "./../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-left">
        <h1>Shortly</h1>
      </div>
      <div className="container-right">
        <div className="feature">
          <h4>Features</h4>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </div>
        <div className="resources">
          <h4>Resources</h4>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </div>
        <div className="company">
          <h4>Company</h4>
          <li>About</li>
          <li>Our Team</li>
          <li>Carrers</li>
          <li>Contact</li>
        </div>
        <div className="redes-sociales">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={printerest} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export { Footer };
