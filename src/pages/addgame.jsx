import { Link, useNavigate } from "react-router-dom";
import GameForm from "../components/gameform.jsx";

function AddGame({ onAddGame }) {
  const navigate = useNavigate();

  function handleSubmit(game) {
    onAddGame(game);
    navigate("/");
  }

  return (
    <main className="content">
      <h1>Add a new game</h1>

      <GameForm onSubmit={handleSubmit} buttonText="Add Game" />

      <Link to="/">← Back to My Collection</Link>
    </main>
  );
}

export default AddGame;
