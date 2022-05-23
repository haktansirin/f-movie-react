import Logo from "../../assets/img/logo.svg";
import "./AlertMessage.css";

const AlertMessage = ({ children }) => {
  return (
    <div className="alert-message">
      <img src={Logo} alt="Logo" className="alert-message-image" />
      <p className="alert-message-text">{children}</p>
    </div>
  );
};

export default AlertMessage;
