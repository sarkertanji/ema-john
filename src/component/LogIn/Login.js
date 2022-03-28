import React from "react";
import "./Login.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signinUsingGoogole } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const handelgoogleSignIn = () => {
    signinUsingGoogole().then((result) => {
      navigate(from);

      // ...
    });
  };
  return (
    <div className="from">
      <div>
        <h1>Please Log in</h1>
        <form>
          <input type="email" name="" id="" placeholder="Enter your email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New in Ema-jhon? <Link to="/register">Register</Link>
        </p>
        <div>------------------------or----------------------</div>
        <button onClick={handelgoogleSignIn} className="regular-btn">
          Login by google
        </button>
      </div>
    </div>
  );
};

export default Login;
