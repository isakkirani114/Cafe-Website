
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Address() {
  const navigate = useNavigate();

  // Get saved address from localStorage
  const savedAddress = JSON.parse(
    localStorage.getItem("customerAddress")
  );

  // Address state
  const [address, setAddress] = useState(
    savedAddress || {
      name: "",
      phone: "",
      doorNo: "",
      street: "",
      area: "",
      city: "",
      pincode: "",
      landmark: "",
    }
  );

  // Handle input changes
  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  // Save address and go to payment
  const saveAddress = (e) => {
    e.preventDefault();

    // Save address in localStorage
    localStorage.setItem(
      "customerAddress",
      JSON.stringify(address)
    );

    alert("Address saved successfully! ✅");

    // Navigate to Payment page
    navigate("/payment");
  };

  return (
    <div className="address-page">

      <h1>Delivery Address</h1>

      <form onSubmit={saveAddress}>

        {/* Customer Name */}
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={address.name}
          onChange={handleChange}
          required
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
          required
        />

        {/* Door Number */}
        <input
          type="text"
          name="doorNo"
          placeholder="Door No"
          value={address.doorNo}
          onChange={handleChange}
          required
        />

        {/* Street */}
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={address.street}
          onChange={handleChange}
          required
        />

        {/* Area */}
        <input
          type="text"
          name="area"
          placeholder="Area"
          value={address.area}
          onChange={handleChange}
          required
        />

        {/* City */}
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          required
        />

        {/* Pincode */}
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={address.pincode}
          onChange={handleChange}
          required
        />

        {/* Landmark */}
        <input
          type="text"
          name="landmark"
          placeholder="Landmark"
          value={address.landmark}
          onChange={handleChange}
        />

        {/* Continue to Payment */}
        <button type="submit">
          Save Address & Continue to Payment
        </button>

      </form>

      {/* Saved Address */}
      <div className="saved-address">

        <h2>Saved Address</h2>

        <p>
          <strong>Name:</strong> {address.name}
        </p>

        <p>
          <strong>Phone:</strong> {address.phone}
        </p>

        <p>
          <strong>Address:</strong>{" "}
          {address.doorNo}, {address.street}, {address.area}
        </p>

        <p>
          <strong>City:</strong> {address.city}
        </p>

        <p>
          <strong>Pincode:</strong> {address.pincode}
        </p>

        <p>
          <strong>Landmark:</strong> {address.landmark}
        </p>

      </div>

    </div>
  );
}

export default Address;



