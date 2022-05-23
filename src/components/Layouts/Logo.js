import logo from "../../assets/img/logo.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" className="logo-icon" />
      <div className="logo-text">MOVIE</div>
    </div>
  );
};

export default Logo;
