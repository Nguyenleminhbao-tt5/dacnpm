import {Link} from 'react-router-dom';
import { useState } from "react";

import "./style.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";

const Register = ({ handleSubmitRegister, messageRegister,props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

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
      <div className="container-Register100">
        <div className="wrap-Register100">
          <div className="Register100-pic js-tilt" data-tilt>
            <img src={require("./images/img-01.png")} alt="IMG" />
          </div>

          <form
            name="form"
            onSubmit={(event) => handleSubmitRegister(event, username, phonenumber)}
            className="Register100-form validate-form"
          >
            <span className="Register100-form-title">Đăng Kí</span>
            {messageRegister && (
              <div className="error-message">{messageRegister}</div>
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
              data-validate="Phonenumber is required"
            >
              <input
                className="input100"
                type="text"
                name="phonenumber"
                value={phonenumber}
                placeholder="phone_number"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(event) => setPhonenumber(event.target.value)}
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
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="enter password"
                name="enter password"
                value={password}
                placeholder="Enter Password"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <div className="container-Register100-form-btn">
              <Link to='../Login' className="Register100-form-btn">Đăng Kí</Link>
            </div>
            <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
