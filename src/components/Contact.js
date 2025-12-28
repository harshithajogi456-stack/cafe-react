import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../assets/style.css"; // Make sure style.css is in src/assets

const Contact = () => {

  // Function to handle button click
  const submitContactForm = () => {
    alert("Message sent!"); // Replace with actual form handling if needed
  };

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
        <h2>Contact Us</h2>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: manipalmug@gmail.com</p>

        <button onClick={submitContactForm}>Send Message</button>
      </section>

      <footer>
        <p>Thank you for choosing Manipal Mug ☕</p>
      </footer>
    </div>
  );
};

export default Contact;
