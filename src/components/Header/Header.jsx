import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/stackely.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Stackely Fitness" />
      </Link>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/programs" onClick={closeMenu}>
              Programs
            </Link>
          </li>

          <li>
            <Link to="/plans" onClick={closeMenu}>
              Plans
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/facilities" onClick={closeMenu}>
              Facilities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;