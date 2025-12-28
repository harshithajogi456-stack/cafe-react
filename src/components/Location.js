import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css"; // make sure your CSS is in src/assets

const Location = () => {
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

      <section className="content">
        <h2>Visit Us</h2>
        <p>📍 Vidyaratna Nagar, Manipal, Udupi, Karnataka</p>
        <p>⏰ Monday – Sunday: 8:00 AM – 10:00 PM</p>

        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
          alt="Cafe Location"
        />
      </section>

      <footer>
        <p>We look forward to welcoming you</p>
      </footer>
    </div>
  );
};

export default Location;
