
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Context";
import "../style/ForgotPassword.scss";

const ForgetPassword = () => {
  const { forgotPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const emailRef = useRef();


  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      await forgotPassword(emailRef.current.value);
      setMessage('Check Your Inbox To Change Password');
    } catch {
      setError('Field to send message');
    }
  }

  return (
    <div className="main-forgot">
      <form class="login" onSubmit={handelSubmit}>
        <h1>Rest Password</h1>
        <input type="email" placeholder="Email" ref={emailRef}/>
        <button disabled={loading}>Rest Password</button>
        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
        <div className="forgotPass">
          <Link to="/login">log In</Link>
        </div>
        <div className="sign">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
