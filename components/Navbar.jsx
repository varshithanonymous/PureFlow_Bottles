import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#00AEEF",
        color: "#fff",
      }}
    >
      <h1>Water Bottles</h1>
      <div className="desktop-menu">
        <a href="#hero" style={{ margin: "0 1rem" }}>
          Home
        </a>
        <a href="#about" style={{ margin: "0 1rem" }}>
          About
        </a>
        <a href="#contact" style={{ margin: "0 1rem" }}>
          Contact
        </a>
      </div>
      <div className="mobile-menu">
        <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        {menuOpen && (
          <div>
            <a href="#hero" style={{ display: "block", margin: "1rem 0" }}>
              Home
            </a>
            <a href="#about" style={{ display: "block", margin: "1rem 0" }}>
              About
            </a>
            <a href="#contact" style={{ display: "block", margin: "1rem 0" }}>
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}