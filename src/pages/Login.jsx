import BagStore from "../assets/Frame.svg";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";

export default function Login() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const myLogin = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <div className="form-login d-flex justify-content-center">
        <div className="">
          <div className="img-login">
            <img src={BagStore} alt="" />
          </div>
          <div>
            <div className="header-login">
              <h1>Easy, Fast and Reliable</h1>
            </div>
            <div className="des-login">
              <p>
                Go Shopping for merchandise just go to dumb merch shopping. the
                biggest merchandise in <span>Indonesia</span>
              </p>
            </div>
          </div>
          <div className="menuLogin">
            <div className="menuLeft">
              <button onClick={handleLogin}>Login</button>
            </div>
            <div className="menuRight">
              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
        <div className="formLogin">
          <div className="headerLogin">
            <h1>Login</h1>
          </div>
          <div className="emailLogin">
            <input type="email" placeholder="Email" />
          </div>
          <div className="passLogin">
            <input type={type} placeholder="Password" />
            <span className="eye" onClick={myLogin}>
              <Icon icon={icon} size={20} />
            </span>
          </div>
          <div className="ctrLogin">
            <button className="btnLogin">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
