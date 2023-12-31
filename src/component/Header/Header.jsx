import { useContext } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import logo from "../../images/evangadi-logo-home.png";

function Header({ logout }) {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  const goToSignIn = (e) => {
    e.preventDefault();
    if (userData.user) {
      logout();
    }
    navigate("/login");
  };
  return (
    <div className="header container-fluid py-4">
      <div className="container d-flex  innerContainer justify-content-between ">
        <Link to="/" className="header__image">
          <img src={logo} alt="Evangadi logo" />
        </Link>
        <button className="ic d-sm-block d-md-none">☰</button>
        <div className="d-flex  innerContainer2 justify-content-between d-none d-md-block">
          <Link to="/">Home</Link>
          <Link to="/">How it Works</Link>
          <button className="btn_header" onClick={goToSignIn}>
            {userData.user ? "LogOut" : "SIGN IN"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
