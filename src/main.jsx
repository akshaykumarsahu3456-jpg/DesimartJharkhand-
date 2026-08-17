import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const products = [
    { name: "Jharkhand Organic Rice", price: "₹499" },
    { name: "Desi Mahua Basket", price: "₹299" },
    { name: "Handmade Bamboo Product", price: "₹399" },
    { name: "Jharkhand Special Honey", price: "₹349" }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="logo">DesiMart Jharkhand</div>
        <div className="tagline">Jharkhand ka apna online marketplace</div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Apne Jharkhand ka Bazaar 🛍️</h1>
          <p>
            Local products, local sellers aur Jharkhand ke customers ko
            ek hi platform par jodne ka naya business.
          </p>
        </section>

        <div className="categories">
          <div className="category">🛒 Grocery</div>
          <div className="category">🌾 Organic</div>
          <div className="category">🎁 Handmade</div>
          <div className="category">👕 Fashion</div>
        </div>

        <h2>Popular Products</h2>

        <div className="products">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <div className="product-image">Product Image</div>
              <h3>{product.name}</h3>
              <div className="price">{product.price}</div>
              <button className="button">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
