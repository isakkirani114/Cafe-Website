import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    // Demo only — real payments need a payment gateway
    alert("Order Successful! 🎉");
    navigate("/success");
  };

  return (
    <div className="payment-container">
      <div className="payment-box">

        <div className="payment-header">
          <span className="coffee-icon">☕</span>
          <h2>Hazel&Beans</h2>
          <p>Every sip, a little happiness</p>
        </div>

        <div className="payment-title">
          <h3>Complete Your Order</h3>
          <p>Choose your preferred payment method</p>
        </div>

        <div className="payment-methods">

          <button
            type="button"
            className={paymentMethod === "upi" ? "active" : ""}
            onClick={() => setPaymentMethod("upi")}
          >
            <span>📱</span>
            <strong>UPI</strong>
            <small>Instant pay</small>
          </button>

          <button
            type="button"
            className={paymentMethod === "card" ? "active" : ""}
            onClick={() => setPaymentMethod("card")}
          >
            <span>💳</span>
            <strong>Card</strong>
            <small>Debit / Credit</small>
          </button>

          <button
            type="button"
            className={paymentMethod === "cod" ? "active" : ""}
            onClick={() => setPaymentMethod("cod")}
          >
            <span>💵</span>
            <strong>Cash</strong>
            <small>Pay on delivery</small>
          </button>

        </div>

        <form onSubmit={handlePayment}>

          {paymentMethod === "upi" && (
            <div className="payment-form">
              <h4>📱 UPI Payment</h4>
              <label>Enter your UPI ID</label>
              <input
                type="text"
                placeholder="yourname@upi"
                required
              />
              <p className="form-hint">
                Example: name@okaxis
              </p>
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="payment-form">
              <h4>💳 Card Details</h4>

              <label>Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                pattern="[0-9 ]{13,19}"
                required
              />

              <label>Card Holder Name</label>
              <input
                type="text"
                placeholder="Name on card"
                required
              />

              <div className="card-row">
                <div>
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                    required
                  />
                </div>

                <div>
                  <label>CVV</label>
                  <input
                    type="password"
                    placeholder="•••"
                    inputMode="numeric"
                    pattern="[0-9]{3,4}"
                    maxLength="4"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "cod" && (
            <div className="cod-message">
              <span>🛍️</span>
              <h4>Cash on Delivery</h4>
              <p>
                Enjoy your favourite treats now
                and pay when your order arrives!
              </p>
            </div>
          )}

          <div className="secure-note">
            <span>🔒</span>
            <p>Your payment details should be handled securely.</p>
          </div>

          <button type="submit" className="pay-btn">
            {paymentMethod === "cod"
              ? "Place My Order  →"
              : "Continue to Pay  →"}
          </button>

        </form>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <p className="payment-footer">
          Made with ☕ and love by Hazel&Beans
        </p>

      </div>
    </div>
  );
}

export default Payment;