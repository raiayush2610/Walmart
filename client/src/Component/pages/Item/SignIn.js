import React from "react";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const SignIn = ({ loginSubmit, otpSubmit, viewOtpForm , handleOnChange}) => {

  return (
    <div className="wrapper">
      <h4><p className="sub-text">Verify using your mobile number.</p></h4>
      {!viewOtpForm ? (
        <div className="form-wrapper">
          <form id="loginForm" onSubmit={loginSubmit}>
            <div className="input-field">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                autoComplete="false"
                // value={phone1}
                onChange={handleOnChange}
              />
            </div>
            <button className="main-button" type="submit" id="sign-in-button">
              Verify
            </button>
          </form>
        </div>
      ) : (
        <Popup trigger={<button>Enter OTP</button>} position="right center">
        <div className="form-wrapper" onSubmit={otpSubmit}>
          <form id="otpForm">
            <div className="input-field">
              <label>Enter OTP</label>
              <input
                type="number"
                placeholder="One time password"
                name="otp_value"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit">
              Verify OTP
            </button>
          </form>
        </div>
        </Popup>
      )}
    </div>
  );
};

export default SignIn;
