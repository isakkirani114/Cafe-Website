import React from "react";

const cafes = [
  {
    id: 1,
    name: "Bean & Brew",
    location: "Chennai",
    rating: 4.8,
    price: "₹45",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
  },
  {
    id: 2,
    name: "Coffee House",
    location: "Adyar, Chennai",
    rating: 4.6,
    price: "₹35",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 3,
    name: "The Cozy Cup",
    location: "Anna Nagar, Chennai",
    rating: 4.7,
    price: "₹40",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
  },
  
];

function CafeList() {
  return (
    <section className="cafe-list">
      <h2>Explore Cafes</h2>

      <div className="cafe-grid">
        {cafes.map((cafe) => (
          <div className="cafe-card" key={cafe.id}>
            <img src={cafe.image} alt={cafe.name} />

            <div className="cafe-info">
              <h3>{cafe.name}</h3>
              <p>{cafe.location}</p>

              <div className="cafe-details">
                <span>⭐ {cafe.rating}</span>
                <span>{cafe.price}</span>
              </div>

              <button>View Cafe</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CafeList;