import { useState } from "react";
import {Link} from 'react-router-dom';

import "./style.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";

const Login = ({ handleSubmitLogin, messageLogin ,props}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleBlur = (event) => {
    if (event.target.value === "") {
      event.target.parentElement.classList.add("alert-validate");
    }
  };
  const handleFocus = (event) => {
    event.target.parentElement.classList.remove("alert-validate");
  };
  return (
    <div className="limiter">
      <div className="container-Login100">
        <div className="wrap-Login100">
          <div className="Login100-pic js-tilt" data-tilt>
            <img src={require("./images/img-01.png")} alt="IMG" />
          </div>

          <form
            name="form"
            onSubmit={(event) => handleSubmitLogin(event, username, password)}
            className="Login100-form validate-form"
          >
            <span className="Login100-form-title">Đăng Nhập</span>
            {messageLogin && (
              <div className="error-message">{messageLogin}</div>
            )}
            <div
              className="wrap-input100 validate-input"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(event) => setUsername(event.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <button> Quên mật khẩu </button>
            <div className="container-Login100-form-btn">
              <Link to='../' className="Login100-form-btn" >Đăng Nhập</Link>
            </div>
            <div className="container-Login100-form-btn">
              <Link to='../Register' className="Login100-form-btn" >Đăng Kí</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
