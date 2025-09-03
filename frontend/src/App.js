import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddSchool from "./pages/addSchool";
import ShowSchools from "./pages/showSchools";
import "./App.css"; 

export default function App() {
  return (
    <Router>
      <header className="navbar">
        <h1 className="logo">School Portal</h1>
        <nav>
          <Link to="/" className="nav-link">Add School</Link>
          <Link to="/schools" className="nav-link">Show Schools</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<AddSchool />} />
        <Route path="/schools" element={<ShowSchools />} />
      </Routes>
    </Router>
  );
}
