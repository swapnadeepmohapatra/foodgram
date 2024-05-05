import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

function SideNav() {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? styles.sidebarLinkActive
                : styles.sidebarLink
            }
          >
            Feed
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className={
              location.pathname === "/explore"
                ? styles.sidebarLinkActive
                : styles.sidebarLink
            }
          >
            Explore
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={
              location.pathname === "/profile"
                ? styles.sidebarLinkActive
                : styles.sidebarLink
            }
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/bookmark"
            className={
              location.pathname === "/bookmark"
                ? styles.sidebarLinkActive
                : styles.sidebarLink
            }
          >
            Bookmark
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
