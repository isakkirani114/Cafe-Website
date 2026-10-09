// Success.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">

      {/* Background Video */}
      <video
        className="success-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/coffee-bg.mp4"
          type="video/mp4"
        />
        Your browser does not support video.
      </video>

      {/* Dark Overlay */}
      <div className="video-overlay"></div>

      {/* Success Card */}
      <div className="success-card">

        {/* Success Icon */}
        <div className="success-icon">
          ✓
        </div>

        {/* Heading */}
        <h1>Order Successful!</h1>

        {/* Success Message */}
        <p className="success-message">
          Thank you for your order! 🎉
        </p>

        {/* Description */}
        <p className="order-message">
          Your order has been placed successfully.
          <br />
          Your delicious food is being prepared! ☕🍰
        </p>

        {/* Order Status */}
        <div className="order-status">

          <div>
            <span className="active">✓</span>
            <p>Order Placed</p>
          </div>

          <div>
            <span>2</span>
            <p>Preparing</p>
          </div>

          <div>
            <span>3</span>
            <p>Delivered</p>
          </div>

        </div>

        {/* Back to Home */}
        <button
          className="home-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>

        {/* Continue Shopping */}
        <button
          className="menu-button"
          onClick={() => navigate("/Me")}
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
}

export default Success;