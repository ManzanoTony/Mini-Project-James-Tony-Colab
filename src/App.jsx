import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import EditGame from "./pages/EditGame.jsx";
import NotFound from "./pages/notfound.jsx";
import gamesData from "./components/data/games.js";
import "./index.css";

function App() {
  const [games, setGames] = useState(() => {
    const savedGames = localStorage.getItem("games");

    return savedGames ? JSON.parse(savedGames) : gamesData;
  });

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
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
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home onAddGame={handleAddGame} />} />
            <Route path="/collection" element={<About games={games} />} />
            <Route
              path="/items/:id"
              element={
                <EditGame
                  games={games}
                  onUpdateGame={handleUpdateGame}
                  onDeleteGame={handleDeleteGame}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
