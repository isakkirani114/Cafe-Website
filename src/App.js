import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import Home from "./Home";
import "./Home.css";

import About from "./About";
import "./About.css";

import Cafelist from "./Cafe list";
import "./Cafe list.css";

import Menu from "./Menu";
import "./Menu.css";

import Login from "./Login";
import "./Login.css";

import Cart from "./Cart";
import "./Cart.css";

import Payment from "./Payment";
import "./Payment.css";

import Contact from "./Contact";
import "./Contact.css";

import Address from "./Address";
import "./Address.css";

import Success from "./Success";
import "./Success.css"

import "./App.css";

function App() {
// Cart state
const [cart, setCart] = useState([]);

return ( <BrowserRouter>
  {/* Navigation */}
  <ul id="u">
    <h3>Hazel&Beans</h3>

    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/ab">About</Link>
    </li>

    <li>
      <Link to="/ca">Cafelist</Link>
    </li>

    <li>
      <Link to="/Me">Menu</Link>
    </li>

    <li>
      <Link to="/lo">Login</Link>
    </li>

    <li>
      <Link to="/con">Contact <i class="fa-solid fa-circle-user"></i></Link>
    </li>


    <li>
      <Link to="/ch">Cart 🛒</Link>
    </li>

 

  </ul>

  {/* Routes */}
  <Routes>

    {/* Home */}
    <Route
      path="/"
      element={<Home />}
    />

    {/* About */}
    <Route
      path="/ab"
      element={<About />}
    />

    {/* Cafe List */}
    <Route
      path="/ca"
      element={<Cafelist />}
    />

    {/* Menu */}
    <Route
      path="/Me"
      element={
        <Menu
          cart={cart}
          setCart={setCart}
        />
      }
    />

    {/* Login */}
    <Route
      path="/lo"
      element={<Login />}
    />

    <Route
      path="/Con"
      element={<Contact />}
    />

    <Route 
    path="/address"
     element={<Address />} />

    <Route
     path="/payment" 
     element={<Payment />} />


     <Route
     path="/Success" 
     element={<Success/>} />

    {/* Cart */}
    <Route
      path="/ch"
      element={
        <Cart
          cart={cart}
          setCart={setCart}
        />
      }
    />
 
  </Routes>

</BrowserRouter>


);
}

export default App;
