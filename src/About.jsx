import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <h1>Top Cafe Shop</h1>
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span>WELCOME TO OUR CAFE</span>
          <h1>More Than Just Coffee</h1>
          <p>
            A cozy place where great coffee, delicious food,
            and beautiful moments come together.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Story
          </motion.button>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <motion.div
          className="story-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
            alt="Coffee"
          />
        </motion.div>

        <motion.div
          className="story-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-label">OUR STORY</span>

          <h2>Made With Passion, Served With Love</h2>

          <p>
            What started as a small dream became a warm space for
            coffee lovers. Our café was created with one simple
            idea — to make every cup special.
          </p>

          <p>
            We carefully select our beans, prepare everything
            with passion, and create an atmosphere where you can
            relax, connect, and enjoy the little things in life.
          </p>

          <motion.a
            href="#menu"
            whileHover={{ x: 8 }}
          >
            Explore Our Menu →
          </motion.a>
        </motion.div>
      </section>

      {/* Features */}
      <section className="features">
        <motion.div
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-label">WHY US</span>
          <h2>What Makes Us Special</h2>
        </motion.div>

        <div className="feature-grid">

          <motion.div
            className="feature-card"
            whileHover={{ y: -12 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">☕</div>
            <h3>Premium Coffee</h3>
            <p>
              Carefully selected beans roasted to bring out
              rich and beautiful flavors.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -12 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">🥐</div>
            <h3>Fresh Food</h3>
            <p>
              Freshly prepared pastries and delicious food
              made with quality ingredients.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -12 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">❤️</div>
            <h3>Friendly Atmosphere</h3>
            <p>
              A welcoming space designed for conversations,
              creativity, and relaxation.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-overlay"></div>

        <div className="stats-container">

          <motion.div
            className="stat"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>10+</h2>
            <p>Years of Experience</p>
          </motion.div>

          <motion.div
            className="stat"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>50K+</h2>
            <p>Happy Customers</p>
          </motion.div>

          <motion.div
            className="stat"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>25+</h2>
            <p>Coffee Varieties</p>
          </motion.div>

          <motion.div
            className="stat"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2>100%</h2>
            <p>Made With Love</p>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="about-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <span>COME VISIT US</span>

        <h2>Your Perfect Coffee Moment Awaits</h2>

        <p>
          Stop by, grab your favorite drink, and make yourself
          at home.
        </p>

        <motion.button
          whileHover={{
            scale: 1.08,
            backgroundColor: "#ffffff",
            color: "#4b2e20",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Our Cafe
        </motion.button>
      </motion.section>

    </div>
  );
};

export default About;
