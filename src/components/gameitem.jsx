import { useState } from "react";
import GameForm from "./gameform.jsx";
import baldursGate3 from "../assets/baldurs-gate-3.jpg";
import godOfWar from "../assets/god-of-war-ragnarok.jpg";
import eldenRing from "../assets/elden-ring.jpg";
import witcher3 from "../assets/witcher-3.jpg";
import clairObscur from "../assets/clair-obscur.jpg";
import diablo2 from "../assets/diablo-2.jpg";
import luigisMansion3 from "../assets/luigis-mansion-3.jpg";
import difficultyIcon from "../assets/difficulty-1.png";
import horizon from "../assets/horizon-forbidden-west.jpg";
import defaultCover from "../assets/default-cover.png";
import ratingFlame from "../assets/rating-flame.png";
import skyrim from "../assets/skyrim.jpg";
import rdr2 from "../assets/red-dead-redemption-2.jpg";

const gameImages = {
  "baldur's gate iii": baldursGate3,
  "god of war: ragnarök": godOfWar,
  "horizon: forbidden west": horizon,
  "elden ring": eldenRing,
  "the witcher 3": witcher3,
  "clair obscur: expedition 33": clairObscur,
  "diablo ii": diablo2,
  "luigi's mansion 3": luigisMansion3,
  "the elder scrolls v: skyrim": skyrim,
  "red dead redemption 2": rdr2,
};

function GameItem({ game, onUpdateGame, onDeleteGame }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleUpdate(updatedData) {
    onUpdateGame({ ...updatedData, id: game.id });
    setIsEditing(false);
  }

  function handleDelete() {
    if (window.confirm(`Delete "${game.title}"?`)) {
      onDeleteGame(game.id);
    }
  }

  if (isEditing) {
    return (
      <article className="game-item is-editing">
        <GameForm
          initialValues={game}
          onSubmit={handleUpdate}
          buttonText="Save"
        />
        <button
          type="button"
          className="secondary-button"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </article>
    );
  }

  const image = gameImages[String(game.title).toLowerCase()] || defaultCover;

  return (
    <article
      className="game-item has-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3>{game.title}</h3>

      <p>Platform: {game.platform}</p>

      <p>Genre: {game.genre}</p>

      <p className="difficulty">
        Difficulty:{" "}
        {Number(game.difficulty) ? (
          <>
            <span className="difficulty-icons">
              {Array.from({ length: Number(game.difficulty) }, (_, index) => (
                <img
                  key={index}
                  src={difficultyIcon}
                  alt=""
                  className="difficulty-icon"
                />
              ))}
            </span>
            {game.difficulty}/5
          </>
        ) : (
          "Not set"
        )}
      </p>

      <p className="rating">
        Rating:{" "}
        {game.rating ? (
          <>
            <span className="rating-flames">
              {Array.from({ length: game.rating }, (_, index) => (
                <img
                  key={index}
                  src={ratingFlame}
                  alt=""
                  className="rating-flame"
                />
              ))}
            </span>
            {game.rating}/5
          </>
        ) : (
          "Not rated"
        )}
      </p>

      <p>
        Status:{" "}
        <span
          className={`status-badge status-${String(game.status)
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {game.status}
        </span>
      </p>

      <button
        type="button"
        className="edit-button"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>

      <button
        type="button"
        className="delete-button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </article>
  );
}

export default GameItem;
