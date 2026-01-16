// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Navbar styles

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="logoBox">SLTB</div>

        <div className="brandText">
          <div className="brandTitle">Sri Lanka Transport Board</div>
          <div className="brandSub">Season Ticket Online Application</div>
        </div>
      </div>

      <nav className="nav">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>

        <NavLink className="navLink" to="/apply">
          Apply Now
        </NavLink>

        <NavLink className="navLink" to="/my-tickets">
          My Tickets
        </NavLink>

        
      </nav>
    </header>
  );
}

