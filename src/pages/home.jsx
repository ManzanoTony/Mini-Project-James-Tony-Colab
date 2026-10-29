import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="content">
      <h1>Game Tracker</h1>
      <Link to="/items/1">View item 1</Link>
    </main>
  );
}
export default Home;