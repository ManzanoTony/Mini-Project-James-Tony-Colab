import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Collection from "./pages/collection.jsx";
import AddGame from "./pages/addgame.jsx";
import NotFound from "./pages/notfound.jsx";
import gamesData from "./components/data/games.js";
import "./index.css";

function App() {
  const [games, setGames] = useState(() => {
    const savedGames = localStorage.getItem("games");

    if (!savedGames) return gamesData;

  
    const parsed = JSON.parse(savedGames);
    const seededIds = JSON.parse(localStorage.getItem("seededIds") || "[]");
    const missing = gamesData.filter(
      (seed) =>
        !seededIds.includes(seed.id) &&
        !parsed.some((game) => game.id === seed.id)
    );

    return [...parsed, ...missing];
  });

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
    localStorage.setItem(
      "seededIds",
      JSON.stringify(gamesData.map((game) => game.id))
    );
  }, [games]);

  const handleAddGame = (game) => {
    setGames((currentGames) => {
      const nextId = currentGames.reduce((max, g) => Math.max(max, g.id), 0) + 1;

      return [...currentGames, { ...game, id: nextId }];
    });
  };

  const handleUpdateGame = (updatedGame) => {
    setGames((currentGames) =>
      currentGames.map((game) =>
        game.id === updatedGame.id ? updatedGame : game
      )
    );
  };

    const handleDeleteGame = (id) => {
    setGames((currentGames) => currentGames.filter((game) => game.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="layout">
          <Routes>
            <Route
              path="/"
              element={
                <Collection
                  games={games}
                  onUpdateGame={handleUpdateGame}
                  onDeleteGame={handleDeleteGame}
                />
              }
            />
            <Route path="/add" element={<AddGame onAddGame={handleAddGame} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
