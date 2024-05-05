import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Post.module.css";
import { FeedContext } from "../../../contexts/FeedContext";

const Post = ({ post }) => {
  const { content, likes, username, createdAt, _id } = post;
  const {
    likePost,
    dislikePost,
    deletePost,
    bookmarkPost,
    bookmarkedPosts,
    removeBookmark,
  } = useContext(FeedContext);

  return (
    <div className={styles.post}>
      <div className={styles.userInfo}>
        <span className={styles.username}>{username}</span>
        <span className={styles.createdAt}>
          Posted at: {new Date(createdAt).getHours()}:
          {new Date(createdAt).getMinutes()}:{new Date(createdAt).getSeconds()}{" "}
          {new Date(createdAt).getDate()}
          {"/"}
          {new Date(createdAt).getUTCMonth()}
          {"/"}
          {new Date(createdAt).getFullYear()}
        </span>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.postActionBar}>
        <div className={styles.likes}>
          <button className={styles.likeButton} onClick={() => likePost(_id)}>
            <span role="img" aria-label="Like">
              👍
            </span>{" "}
            {likes.likeCount}
          </button>
          <button
            className={styles.dislikeButton}
            onClick={() => dislikePost(_id)}
          >
            <span role="img" aria-label="Dislike">
              👎
            </span>{" "}
            {likes.dislikedBy.length}
          </button>
          {bookmarkedPosts.map((b) => b._id).includes(_id) ? (
            <button
              className={styles.dislikeButton}
              onClick={() => removeBookmark(_id)}
            >
              <span role="img" aria-label="Bookmark">
                📍
              </span>
            </button>
          ) : (
            <button
              className={styles.dislikeButton}
              onClick={() => bookmarkPost(_id)}
            >
              <span role="img" aria-label="Bookmark">
                📌
              </span>
            </button>
          )}
        </div>
        <div className={styles.likes}>
          <button className={styles.likeButton} onClick={() => deletePost(_id)}>
            <span role="img" aria-label="Delete">
              🗑️
            </span>
          </button>
          <button
            className={styles.dislikeButton}
            onClick={() => dislikePost(_id)}
          >
            <span role="img" aria-label="Edit">
              ✏️
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
