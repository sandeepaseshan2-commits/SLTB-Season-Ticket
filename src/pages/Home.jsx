import ticketIcon from "../assets/ticket.png";

import uploadPhotoImg from "../assets/upload-photo.png";
import fillApplicationIcon from "../assets/fill-application.png";
import { Link } from "react-router-dom";
import "./Home.css";
import busImg from "../assets/bus1.png";





function Home() {
  return (
    <div className="home">
      {/* ===== Top Header Bar ===== */}
      <header className="topbar">
        {/* Left side: SLTB Logo + title */}
        <div className="brand">
          <div className="logoBox">SLTB</div>

          <div className="brandText">
            <div className="brandTitle">Sri Lanka Transport Board</div>
            <div className="brandSub">Season Ticket Online Application</div>
          </div>
        </div>

        {/* Right side: Navigation links */}
        <nav className="nav">
          <Link to="/" className="navLink">Home</Link>
          <Link to="/apply" className="navLink">Apply Now</Link>
          <Link to="/my-tickets" className="navLink">My Tickets</Link>
          <Link to="/login" className="navButton">Login</Link>
        </nav>
      </header>

      <div
  className="hero"
  style={{ backgroundImage: `url(${busImg})` }}
>
  <div className="heroContent">
    <h1>Get Your Season Ticket Online</h1>
    <p>
      Apply easily for your SLTB season ticket from the comfort of your home.
     
     <Link to="/fill-application" className="heroFillBtn">
     Fill Application
  </Link>

    </p>
  </div>
 
  <div className="heroFooter">
    © 2026 Sri Lanka Transport Board. All Rights Reserved.
  </div>
  
</div>
</div>


     

    
  );
}

export default Home;

