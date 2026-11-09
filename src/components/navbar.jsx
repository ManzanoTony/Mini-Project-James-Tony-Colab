import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <Link to="/" className="logo">
        <img src={logo} alt="Game Tracker logo" className="logo-img" />
        <h2>Game Tracker</h2>
      </Link>
      <div className="sidebar-links">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
