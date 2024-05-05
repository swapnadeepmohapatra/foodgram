import React, { useContext } from "react";
import styles from "../styles/Feed.module.css";
import { FeedContext } from "../../../contexts/FeedContext";
import Post from "../components/Post";
import AddPost from "../components/AddPost";
import AllUsers from "../components/AllUsers";
import Navbar from "../../../global/components/Navbar";
import SideNav from "../../../global/components/SideNav";

function Explore() {
  const { posts } = useContext(FeedContext);

  console.log(posts);

  return (
    <>
      <Navbar />
      <div className={styles.feedContainer}>
        <div className={styles.sidebarLeft}>
          <SideNav />
          <AddPost />
        </div>
        <div className={styles.feedContent}>
          {posts
            .sort((a, b) => {
              return new Date(a.createdAt) - new Date(b.createdAt);
            })
            .map((post) => (
              <Post key={post._id} post={post} />
            ))}
        </div>
        <div className={styles.sidebarRight}>
          <AllUsers />
        </div>
      </div>
    </>
  );
}

export default Explore;
