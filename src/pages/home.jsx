import GameForm from "../components/gameform.jsx";

function Home({ onAddGame }) {
  return (
    <main className="content">
      <h1>Game Tracker</h1>

      <section>
        <h2>Add a new game</h2>
        <GameForm onSubmit={onAddGame} buttonText="Add Game" />
      </section>
    </main>
  );
}

export default Home;