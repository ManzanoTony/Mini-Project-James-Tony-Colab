import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./index.css";

function Home() {
  return (
    <main className="content">
      <h1>Welcome to Game Tracker!</h1>
      <p>Your React application starts here.</p>
    </main>
  );
}

function About() {
  return (
    <main className="content">
      <h1>About</h1>
      <p>This project is built with React.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
