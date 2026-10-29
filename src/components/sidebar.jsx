
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Navigation</h3>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </aside>
  );
}

export default Sidebar;
