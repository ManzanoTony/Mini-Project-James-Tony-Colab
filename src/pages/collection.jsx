import { Link } from "react-router-dom";
import GameList from "../components/gamelist.jsx";

function Collection({ games, onUpdateGame, onDeleteGame }) {
  return (
    <main className="content">
      <div className="page-header">
        <div>
          <h1>My Collection</h1>
          <p>All your games in one place.</p>
        </div>

        <Link to="/add" className="button-link">
          + Add Game
        </Link>
      </div>

      <GameList
        games={games}
        onUpdateGame={onUpdateGame}
        onDeleteGame={onDeleteGame}
      />
    </main>
  );
}

export default Collection;
