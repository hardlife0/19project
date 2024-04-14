import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Navbar.css';

function Navbars() {
  return (
    <Router>
      <nav className="navbar bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" />
          </Link>
          <div className="menu">
            <Link to="/someone" className="nav-link">누군가의 포트폴리오</Link>
            <Link to="/recommend" className="nav-link">추천 포트폴리오</Link>
            <Link to="/my" className="nav-link">나의 포트폴리오</Link>
          </div>
        </div>
      </nav>

      {/* Routes 설정 */}
      <Routes>
        <Route path="/someone" element={<div>누군가의 포트폴리오 페이지</div>} />
        <Route path="/recommend" element={<div>추천 포트폴리오 페이지</div>} />
        <Route path="/my" element={<div>나의 포트폴리오 페이지</div>} />
        {/* 기타 경로 설정 */}
      </Routes>
    </Router>
  );
}

export default Navbars;
