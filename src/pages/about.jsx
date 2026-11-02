import GameList from "../components/gamelist.jsx";

function About({ games, onUpdateGame, onDeleteGame }) {
  return (
    <main className="content">
      <h1>My Collection</h1>
      <p>All your games in one place.</p>

      <GameList games={games} onUpdateGame={onUpdateGame} onDeleteGame={onDeleteGame} />
    </main>
  );
}

export default About;