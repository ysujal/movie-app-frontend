import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

import Login from "./Pages/Login"; 
import Signup from "./Pages/Signup"; 

function App() {
  return (
    <Router>
      <Header />

      {/* Navigation links to switch pages */}
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <ProductionHouse />
            <GenreMovieList />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
