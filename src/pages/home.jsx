import { Link } from "react-router-dom";
import GameForm from "../components/gameform.jsx";
import GameList from "../components/gamelist.jsx";

function Home({ games, onAddGame }) {
  return (
    <main className="content">
      <h1>Game Tracker</h1>

      <section>
        <h2>Add a new game</h2>

        <GameForm onSubmit={onAddGame} buttonText="Add Game" />
      </section>

      <GameList games={games} />
    </main>
  );
}

export default Home;
