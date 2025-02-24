import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import Navbar from "../../../global/components/Navbar";
import AvatarUpload from "../components/AvatarUpload";
import { UserContext } from "../../../contexts/UserContext";
import Post from "../../home/components/Post";
import buttonStyles from "../../../global/styles/button.module.css";
import SideNav from "../../../global/components/SideNav";
import AddPost from "../../home/components/AddPost";
import AllUsers from "../../home/components/AllUsers";

function Profile() {
  const [bio, setBio] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [posts, setPosts] = useState([]);
  const { getUserPosts } = useContext(UserContext);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePortfolioChange = (e) => {
    setPortfolio(e.target.value);
  };

  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
  };

  useEffect(() => {
    getUserPosts().then((data) => {
      console.log(data);
      setPosts(data);
    });
  }, [getUserPosts]);

  return (
    <>
      <Navbar />
      <div className={styles.feedContainer}>
        <div className={styles.sidebarLeft}>
          <SideNav />
          <AddPost />
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.avatarSection}>
            <h2>Avatar</h2>
            <AvatarUpload onChange={handleAvatarChange} avatar={avatar} />
          </div>
          <div className={styles.bioSection}>
            <h2>Bio</h2>
            <input
              type="text"
              value={bio}
              onChange={handleBioChange}
              placeholder="Enter your bio..."
              className={styles.inputField}
            />
          </div>
          <div className={styles.portfolioSection}>
            <h2>Portfolio</h2>
            <input
              type="text"
              value={portfolio}
              onChange={handlePortfolioChange}
              placeholder="Enter your portfolio URL..."
              className={styles.inputField}
            />
          </div>
          <button className={buttonStyles.button}>Save Changes</button>
          <div className={styles.postsSection}>
            <h2>Posted Posts</h2>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className={styles.sidebarRight}>
          <AllUsers />
        </div>
      </div>
    </>
  );
}

export default Profile;
