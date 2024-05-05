import React, { useContext } from "react";
import styles from "../styles/User.module.css"; // Importing the CSS module for styling
import { UserContext } from "../../contexts/UserContext";

function User({ user }) {
  const { followUser, user: meUser, unfollowUser } = useContext(UserContext);

  if (meUser) {
    return (
      <li key={user._id} className={styles.userItem}>
        <img src={user?.avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.userInfo}>
          <span className={styles.username}>{user.username}</span>
          <button
            onClick={() => {
              if (meUser.following.map((u) => u._id).includes(user._id)) {
                unfollowUser(user._id);
              } else {
                followUser(user._id);
              }
            }}
            className={styles.followButton}
          >
            {meUser.following.map((u) => u._id).includes(user._id)
              ? "Following"
              : "Follow"}
          </button>
        </div>
      </li>
    );
  } else {
    return null;
  }
}

export default User;
