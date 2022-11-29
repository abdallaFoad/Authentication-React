import React, { useState } from "react";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import "../style/Login.scss";

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef();
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || '/';

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath);
    } catch {
      setError("Log In Field! Try Again");
    }
    setLoading(false);
  };

  return (
    <div className="main-login">
      <div class="main">
        <div class="login">
          <form onSubmit={handelLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Log In
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              ref={passwordRef}
            />
            <button type="submit" disabled={loading}>
              Login
            </button>
            <div className="forgotPass">
              <Link to="/forget-password">Forgot Password</Link>
            </div>
            {error && <div className="matched">{error}</div>}
            <div className="sign">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
