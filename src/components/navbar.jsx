import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Game Tracker logo" className="logo-img" />
       <h2>Game Tracker</h2>
      </div>
    </nav>
  );
}

export default Navbar;
