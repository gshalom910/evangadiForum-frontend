import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import { instagram } from "react-icons-kit/feather/instagram";
import { youtube } from "react-icons-kit/feather/youtube";
import "./footer.css";
import logo from "../../images/logo1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-wrapper d-md-flex justify-content-around">
      <div className="logo-icon-wrapper">
        <div className="logo">
          {" "}
          <img src={logo} />
        </div>
        <div className="Icon">
          <a href="https://www.facebook.com/EthiopiansNetwork">
            <Icon icon={facebook} size={23} />
          </a>
          <a href="https://www.instagram.com/evangaditech/">
            <Icon icon={instagram} size={23} />
          </a>
          <a href="https://www.youtube.com/c/weareethiopians">
            <Icon icon={youtube} size={23} />
          </a>
        </div>
      </div>
      <div className="row">
        <h3 className="titlee"> Useful Link</h3>
        <div className="Useful-Link mb-4">
          <Link to="https://www.evangadi.com/explained/">How it works</Link>

          <Link to="https://www.evangadi.com/legal/terms/">
            Terms of Service
          </Link>

          <Link to="https://www.evangadi.com/legal/privacy/">
            Privacy policy
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="Contact-Info mb-4">
          <h3 className="titlee"> Contact Info</h3>
          <p>Evangadi Networks</p>
          <p>support@evangadi.com</p>
          <p>+1-202-386-2702</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
