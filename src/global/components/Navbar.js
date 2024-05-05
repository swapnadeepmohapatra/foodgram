import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; // Importing the CSS module for styling

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link to="/" className={styles.navLink}>
            FoodGram
          </Link>
        </li>
        <li>
          <Link to="/profile" className={styles.navLink}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
