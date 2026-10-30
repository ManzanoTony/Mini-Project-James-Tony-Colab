import GameList from "../components/gamelist.jsx";

function About({ games }) {
  return (
    <main className="content">
      <h1>My Collection</h1>
      <p>All your games in one place.</p>

      <GameList games={games} />
    </main>
  );
}

export default About;