import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const menuItems = [
  // ☕ Coffee
  {
    id: 1,
    name: "Cappuccino",
    category: "Coffee",
    price: 140,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
  },
  {
    id: 2,
    name: "Cafe Latte",
    category: "Coffee",
    price: 160,
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78",
  },

  {
    id: 4,
    name: "Americano",
    category: "Coffee",
    price: 120,
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c",
  },
  {
    id: 5,
    name: "Mocha",
    category: "Coffee",
    price: 180,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e",
  },
  {
    id: 6,
    name: "Caramel Macchiato",
    category: "Coffee",
    price: 190,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2",
  },

  // 🥤 Cold Drinks
  {
    id: 7,
    name: "Cold Coffee",
    category: "Cold Drinks",
    price: 180,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },
  {
    id: 8,
    name: "Iced Latte",
    category: "Cold Drinks",
    price: 170,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
  },
  {
    id: 9,
    name: "Chocolate Frappe",
    category: "Cold Drinks",
    price: 200,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
  },
  {
    id: 10,
    name: "Strawberry Milkshake",
    category: "Cold Drinks",
    price: 190,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc",
  },
  {
    id: 11,
    name: "Mango Smoothie",
    category: "Cold Drinks",
    price: 180,
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82",
  },

  // 🍟 Snacks
  {
    id: 12,
    name: "Veg Sandwich",
    category: "Snacks",
    price: 150,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
  },
  {
    id: 13,
    name: "Cheese Sandwich",
    category: "Snacks",
    price: 180,
    image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0",
  },
  {
    id: 14,
    name: "French Fries",
    category: "Snacks",
    price: 120,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
  },
  {
    id: 15,
    name: "Cheese Burger",
    category: "Snacks",
    price: 220,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 16,
    name: "Veg Pizza",
    category: "Snacks",
    price: 250,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  },
{
  id: 17,
  name: "Paneer Wrap",
  category: "Snacks",
  price: 190,
  image:
    "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
},

  // 🍰 Desserts
  {
    id: 18,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 220,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    id: 19,
    name: "Brownie",
    category: "Desserts",
    price: 160,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e",
  },
  {
    id: 20,
    name: "Cheesecake",
    category: "Desserts",
    price: 240,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
  },
  {
    id: 21,
    name: "Chocolate Donut",
    category: "Desserts",
    price: 120,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
  {
    id: 22,
    name: "Ice Cream",
    category: "Desserts",
    price: 130,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  },
];

function Menu({ cart, setCart }) {
  // IMPORTANT: useNavigate must be INSIDE the component
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Coffee",
    "Cold Drinks",
    "Snacks",
    "Desserts",
  ];

  const filteredItems =
    category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  // ADD TO CART
  const addToCart = (item) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }

    // Go to Cart page
  
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>

      <p className="subtitle">
        Fresh coffee, delicious food & desserts
      </p>

      {/* Categories */}
      <div className="categories">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
            />

            <div className="menu-info">
              <span className="category">
                {item.category}
              </span>

              <h2>{item.name}</h2>

              <div className="bottom">
                <strong>₹{item.price}</strong>

                <button
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Button */}
      <div className="cart">
        🛒 Cart:{" "}
        <strong>
          {cart.reduce(
            (total, item) =>
              total + item.quantity,
            0
          )}
        </strong>{" "}
        items

        <button
          onClick={() => navigate("/ch")}
        >
          View Cart
        </button>
      </div>
    </div>
  );
}

export default Menu;

