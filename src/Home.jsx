import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="small-title">WELCOME TO OUR CAFE</p>

          <h1>
            Fresh Coffee.
            <br />
            Beautiful Moments.
          </h1>

          <p className="hero-text">
            Discover handcrafted coffee, delicious food,
            and a cozy atmosphere made just for you.
          </p>

          <div className="hero-buttons">
            <Link to="Me"><motion.button whileHover={{ scale: 1.08 }}>
              Explore Menu
            </motion.button>
</Link>
         <Link to="ab">  
        <motion.button
              whileHover={{ scale: 1.08 }}
               className="outline-btn"
            
            >
              Our Story
            </motion.button>
            </Link> 
      
          </div>
        </motion.div>
      </section>

      {/* SPECIAL MENU */}
      <section className="menu-section">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>OUR FAVORITES</span>
          <h2>Made Fresh Every Day</h2>
        </motion.div>

        <div className="menu-grid">

          <motion.div
            className="menu-card"
            whileHover={{ y: -10 }}
          >
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80"
              alt="Coffee"
            />

            <div className="menu-info">
              <h3>Classic Cappuccino</h3>
              <p>Rich espresso with creamy steamed milk.</p>
              <strong>$4.50</strong>
            </div>
          </motion.div>

          <motion.div
            className="menu-card"
            whileHover={{ y: -10 }}
          >
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80"
              alt="Pastry"
            />

            <div className="menu-info">
              <h3>Fresh Croissant</h3>
              <p>Buttery, flaky and freshly baked every morning.</p>
              <strong>$3.50</strong>
            </div>
          </motion.div>

          <motion.div
            className="menu-card"
            whileHover={{ y: -10 }}
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80"
              alt="Latte"
            />

            <div className="menu-info">
              <h3>Vanilla Latte</h3>
              <p>Smooth espresso with sweet vanilla flavor.</p>
              <strong>$5.00</strong>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="home-about">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80"
            alt="Cafe interior"
          />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>OUR STORY</span>

          <h2>A Place To Slow Down & Enjoy</h2>

          <p>
            We believe coffee is more than just a drink.
            It is a moment to pause, connect, and enjoy.
          </p>

          <p>
            From carefully selected coffee beans to freshly
            baked pastries, everything we serve is made
            with passion.
          </p>

          <button>Discover More</button>
        </motion.div>

      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>WHAT OUR CUSTOMERS SAY</span>

          <h2>
            “The perfect place for coffee,
            conversations, and good vibes.”
          </h2>

          <p>— Sarah Johnson</p>
        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand">
            <h2>HAZEL<span>BEANS</span></h2>

            <p>
              Great coffee, delicious food,
              and unforgettable moments.
            </p>

            <div className="socials">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Pinterest</a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/ab">About</a>
            <a href="/me">Menu</a>
            <a href="/ch">Cart</a>
          </div>

          {/* HOURS */}
          <div className="footer-column">
            <h3>Opening Hours</h3>

            <p>Monday - Friday</p>
            <strong>8:00 AM - 10:00 PM</strong>

            <p>Saturday - Sunday</p>
            <strong>9:00 AM - 11:00 PM</strong>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h3>Contact Us</h3>

            <p>📍 123 Coffee Street</p>
            <p>📞 +1 234 567 890</p>
            <p>✉ hello@Hazel&Beans.com</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Hazel Beans. All Rights Reserved.</p>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

      </footer>

    </div>
  );
};

export default Home;