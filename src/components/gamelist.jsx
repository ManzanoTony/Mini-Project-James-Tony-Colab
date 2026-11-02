
import GameItem from "./gameitem.jsx";

function GameList({ games, onUpdateGame, onDeleteGame }) {
  return (
    <section className="game-list">
      <h2>My Games</h2>

      {games.length === 0 ? (
        <p>No games available</p>
      ) : (
        games.map((game) => (
          <GameItem
            key={game.id}
            game={game}
            onUpdateGame={onUpdateGame}
            onDeleteGame={onDeleteGame}
          />
        ))
      )}
    </section>
  );
}

export default GameList;
