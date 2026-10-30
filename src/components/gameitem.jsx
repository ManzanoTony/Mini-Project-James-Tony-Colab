import { Link } from "react-router-dom";

function GameItem({ game }) {
  return (
    <article className="game-item">
      <h3>{game.title}</h3>

      <p>Platform: {game.platform}</p>

      <p>Genre: {game.genre}</p>

      <p>Status: {game.status}</p>

      <Link to={`/items/${game.id}`}>
        Edit game
      </Link>
    </article>
  );
}

export default GameItem;