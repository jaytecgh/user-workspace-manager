import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <header className="bg-primary text-white p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">Wallcare & Waterproofing</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-white">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link text-white">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-white">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="bg-dark text-white text-center p-3 mt-4">
        &copy; {new Date().getFullYear()} Wallcare & Waterproofing. All rights reserved.
      </footer>
    </Router>
  );
};

export default App;
