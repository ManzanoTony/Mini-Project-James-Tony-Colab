
import { useParams, Link, useNavigate } from "react-router-dom";
import GameForm from "../components/gameform.jsx";

function EditGame({ games, onUpdateGame, onDeleteGame }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = games.find(
    (game) => String(game.id) === id
  );

  if (!game) {
    return (
      <main className="content">
        <h1>Game not found</h1>
        <Link to="/">Back to Dashboard</Link>
      </main>
    );
  }

  function handleUpdate(updatedData) {
    const updatedGame = {
      ...updatedData,
      id: game.id
    };

    onUpdateGame(updatedGame);
  }

  function handleDelete() {
    if (window.confirm(`Delete "${game.title}"?`)) {
      onDeleteGame(game.id);
      navigate("/collection");
    }
  }

  return (
    <main className="content">
      <h1>Edit Game</h1>
      <h2>{game.title}</h2>

      <GameForm
        initialValues={game}
        onSubmit={handleUpdate}
        buttonText="Update Game"
      />

      <button type="button" className="delete-button" onClick={handleDelete}>
        Delete Game
      </button>

      <Link to="/">Back to Dashboard</Link>
    </main>
  );
}

export default EditGame;
