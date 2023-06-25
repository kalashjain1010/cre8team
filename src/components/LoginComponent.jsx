import React, { useState } from 'react'
import  { LoginApi } from "../api/AuthApi";
import "../Scss/LoginComponent.scss"

function LoginComponent() {
  const [credentails,setCredentials] = useState({});
  const login = () => {
   let res = LoginApi();
   console.log(res);
  }
  return (
    <div className="login-wrapper">
    {/* <img src={LinkedinLogo} className="linkedinLogo" /> */}

    <div className="login-wrapper-inner">
      <h1 className="heading">Sign in</h1>
      <p className="sub-heading">Stay updated on your professional world</p>

      <div className="auth-inputs">
        <input
          onChange={(event) =>
            setCredentials({ ...credentails, email: event.target.value })
          }
          type="email"
          className="common-input"
          placeholder="Email or Phone"
        />
        <input
          onChange={(event) =>
            setCredentials({ ...credentails, password: event.target.value })
          }
          type="password"
          className="common-input"
          placeholder="Password"
        />
      </div>
      <button onClick={login} className="login-btn">
        Sign in
      </button>
    </div>
    <hr className="hr-text" data-content="or" />
    <div className="google-btn-container">
      <p className="go-to-signup">
        New to LinkedIn?{" "}
        <span className="join-now" onClick={() => navigate("/register")}>
          Join now
        </span>
      </p>
    </div>
  </div>
  )
}

export default LoginComponent
