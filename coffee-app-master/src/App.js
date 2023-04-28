import React from 'react';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {  Nav, Navbar } from 'react-bootstrap'

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";

import Logo from "./images/logo.png";
import Ci1 from "./images/cart-item-1.png";
import Ci2 from "./images/cart-item-2.png";
import Ci3 from "./images/cart-item-3.png";
import Ci4 from "./images/cart-item-4.png";

function App() {
  return (
    <>
      <Router>
          <header className="header">

            <a href="#" className="logo">
              <img src={Logo} alt="" />
            </a>

            <Navbar className="navbar">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/menu">MENU</Nav.Link>
            </Navbar>

            <div className="icons">
              <div className="fas fa-search" id="search-btn"></div>
              <div className="fas fa-shopping-cart" id="cart-btn"></div>
              <div className="fas fa-bars" id="menu-btn"></div>
            </div>

            <div className="search-form">
              <input type="search" id="search-box" placeholder="search here..." />
              <label for="search-box" className="fas fa-search"></label>
            </div>

            <div className="cart-items-container">
              <div className="cart-item">
                <span className="fas fa-times"></span>
                <img src={Ci1} alt="" />
                <div className="content">
                  <h3>cart item 01</h3>
                  <div className="price">$15.99/-</div>
                </div>
              </div>
              <div className="cart-item">
                <span className="fas fa-times"></span>
                <img src={Ci2} alt="" />
                <div className="content">
                  <h3>cart item 02</h3>
                  <div className="price">$15.99/-</div>
                </div>
              </div>
              <div className="cart-item">
                <span className="fas fa-times"></span>
                <img src={Ci3} alt="" />
                <div className="content">
                  <h3>cart item 03</h3>
                  <div className="price">$15.99/-</div>
                </div>
              </div>
              <div className="cart-item">
                <span className="fas fa-times"></span>
                <img src={Ci4} alt="" />
                <div className="content">
                  <h3>cart item 04</h3>
                  <div className="price">$15.99/-</div>
                </div>
              </div>
              <a href="#" className="btn">checkout now</a>
            </div>

          </header>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/menu' element={<Menu />} />
            <Route exact path='/about' element={<About />} />
          </Routes>


          <section className="footer">

            <div className="share">
              <a href="https://www.facebook.com/profile.php?id=100009478044036" className="fab fa-facebook-f"></a>
              <a href="https://twitter.com/?lang=ru" className="fab fa-twitter"></a>
              <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
              <a href="https://ru.linkedin.com/" className="fab fa-linkedin"></a>
              <a href="https://ru.pinterest.com/" className="fab fa-pinterest"></a>
            </div>

            <Navbar className="links">
              <Nav.Link as={Link} to="/">home</Nav.Link>
              <Nav.Link as={Link} to="/menu">menu</Nav.Link>
              <Nav.Link as={Link} to="/about">about</Nav.Link>
            </Navbar>
          </section>
        
      </Router>
    </>
  );
}

export default App;
