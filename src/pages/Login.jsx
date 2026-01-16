
import Navbar from "../components/Navbar";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [showChoices, setShowChoices] = useState(false);
  const navigate = useNavigate();
  return (
    
    <div className="loginPage">
   
      <Navbar />

      
      <div className="loginBody">
       
        <div className="loginCard">
          <h1 className="loginTitle">Login</h1>
          <p className="loginSub">
            Login to apply and view your season tickets.
          </p>
                {showChoices && (
        <div
          className="modalOverlay"
          onClick={() => setShowChoices(false)}
        >
          <div
            className="modalBox"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="modalTitle">Choose an option</h3>

            <button
              className="modalBtn secondary"
              onClick={() => {
                setShowChoices(false);
              }}
            >
              Log in with Email
            </button>

            <button
              className="modalBtn primary"
              onClick={() => {
                setShowChoices(false);
                navigate("/fill-application");
              }}
            >
              Create an Account
            </button>

            <button
              className="modalClose"
              onClick={() => setShowChoices(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}


          <label className="label">Email</label>
          <input className="input" type="email" placeholder="example@gmail.com" />

          <label className="label">Password</label>
          <input className="input" type="password" placeholder="Enter your password" />

          <div className="row">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <a className="link" href="#">
              Forgot password?
            </a>
          </div>

          <button className="loginBtn">Login</button>

          
             <p className="createLine">
  Don't have an account?{" "}
  <span
    className="createLink"
    onClick={() => setShowChoices(true)}
  >
    Create account
  </span>
</p>

          

          <p className="footerText">© 2026 Sri Lanka Transport Board. All Rights Reserved.</p>
        </div>

        <div className="loginRight">
          <div className="loginRightText">
            <h2>Fast &amp; Easy<br />Season Ticket</h2>
            <p>Apply online, upload photo and download your ticket anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


