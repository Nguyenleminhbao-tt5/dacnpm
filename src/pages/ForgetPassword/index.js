import {Link} from 'react-router-dom';
import "./style.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";

import { useState } from "react";
const ForgetPassword = ({ handleSubmitForgetPassword, messageForgetPassword,props }) => {
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
      <div className="container-ForgetPassword100">
        <div className="wrap-ForgetPassword100">
          <div className="ForgetPassword100-pic js-tilt" data-tilt>
            <img src={require("./images/img-01.png")} alt="IMG" />
          </div>

          <form
            name="form"
            onSubmit={(event) => handleSubmitForgetPassword(event, phonenumber)}
            className="ForgetPassword100-form validate-form"
          >
            <span className="ForgetPassword100-form-title">Quên mật khẩu</span>
            {messageForgetPassword && (
              <div className="error-message">{messageForgetPassword}</div>
            )}
            <div>nhập số điện thoại để nhận lại mật khẩu</div>
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
            <div className="container-ForgetPassword100-form-btn">
              <button className="ForgetPassword100-form-btn">Hoàn tất</button>
            </div>
            <Link to='../Login' className="BackLogin" >Login here.</Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
