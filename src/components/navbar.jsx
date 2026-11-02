import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Game Tracker logo" className="logo-img" />
        <h2>Game Tracker</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
