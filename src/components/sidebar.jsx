import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-links">
        <Link to="/">Home</Link>
        <Link to="/collection">My Collection</Link>
        <Link to="/items/1">Edit Game</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;