import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import ItemDetails from "./pages/itemdetails.jsx";
import NotFound from "./pages/notfound.jsx";

import "./index.css";

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
