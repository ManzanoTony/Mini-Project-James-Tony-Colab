
function GameRating({ difficulty, rating }) {
  const difficulties = {
    "Very Easy": "#A1A1AA",
    Easy: "#A3E635",
    Normal: "#FACC15",
    Hard: "#F97316",
    "Very Hard": "#EF4444"
  };

  return (
    <div className="game-rating">

      {/* DIFFICULTY */}
      <div className="difficulty">
        <p>DIFFICULTY</p>

        <span
          className="difficulty-icon"
          style={{ color: difficulties[difficulty] || "#A1A1AA" }}
        >
          💀
        </span>

        <span>{difficulty || "Not set"}</span>
      </div>

      {/* PERSONAL RATING */}
      <div className="enjoyment">
        <p>MY RATING</p>

        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= Number(rating) ? "star active" : "star"}
            >
              ★
            </span>
          ))}
        </div>

        <span>{rating > 0 ? `${rating}/5` : "Not rated"}</span>
      </div>

    </div>
  );
}

export default GameRating;
