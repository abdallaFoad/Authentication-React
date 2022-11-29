import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import "../style/Signup.scss";
import { useRef } from "react";


  
  
  
const Signup = () => {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Your passwords Don't Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, passwordRef.current.value);
      navigate('/');
    } catch {
      setError("Field to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="main-signup">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Signup Here</h3>
        {error && <div className="matched">{error}</div>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          // ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          ref={passwordRef}
        />

        <label htmlFor="password-confirmation">Password Confirmation</label>
        <input
          type="password"
          placeholder="Password Confirmation"
          id="password-confirmation"
          ref={passwordConfirmationRef}
        />

        <button type="submit" disabled={loading}>
          Signup
        </button>
        <div className="log">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
