import React, { useContext, useEffect, useState } from "react";
// import AvatarUpload from "./AvatarUpload"; // Assuming you have a component for uploading avatars
import styles from "../styles/Profile.module.css"; // Importing the CSS module for styling
import Navbar from "../../../global/components/Navbar";
import AvatarUpload from "../components/AvatarUpload";
import { UserContext } from "../../../contexts/UserContext";
import Post from "../../home/components/Post";
import buttonStyles from "../../../global/styles/button.module.css";

function Profile() {
  const [bio, setBio] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [posts, setPosts] = useState([]); // Assuming you have a state for posts
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

  const handlePostDelete = (postId) => {
    // Logic to delete the post with postId
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
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
      <div className={styles.profileContainer}>
        <h1>Profile</h1>
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
    </>
  );
}

export default Profile;
