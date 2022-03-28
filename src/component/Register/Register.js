import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="from">
      <div>
        <h1>Please Create an account</h1>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Enter your email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter your password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Alrady have an account?<Link to="/login">Login</Link>
        </p>
        <div>------------------------or----------------------</div>
        <button className="regular-btn">Login by google</button>
      </div>
    </div>
  );
};

export default Register;
