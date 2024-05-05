import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; // Importing the CSS module for styling
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { logoutUser } = useContext(AuthContext);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link to="/" className={styles.navLink}>
            FoodGram
          </Link>
        </li>
        <div>
          <li>
            <Link to="/profile" className={styles.navLink}>
              Profile
            </Link>
          </li>
          <li>
            <Link onClick={logoutUser} className={styles.navLink}>
              Logout 🚪
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
