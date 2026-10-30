import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import ItemDetails from "./pages/itemdetails.jsx";
import NotFound from "./pages/notfound.jsx";
import gamesData from "./components/Data/games.js";
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
    setGames((currentGames) => [...currentGames, game]);
  };


  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<Home games={games} onAddGame={handleAddGame} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/items/:id" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
