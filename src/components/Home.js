import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import "../assets/style.css";

const Home = () => {
  useEffect(() => {
    alert("Welcome to Manipal Mug ☕!");
  }, []);

  return (
    <div>
      <header>
        <h1>Manipal Mug ☕</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/location">Location & Hours</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
          alt="Cafe Interior"
        />
        <h2>Brewed for campus life</h2>
        <p>
          Serving quality coffee and handcrafted refreshments in a space
          designed for comfort and connection.
        </p>
      </section>

      <footer>
        <p>© 2025 Manipal Mug ☕. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
