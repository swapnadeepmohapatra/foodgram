import React, { useContext, useState } from "react";
import buttonStyles from "../../../global/styles/button.module.css";
import { FeedContext } from "../../../contexts/FeedContext";

function AddPost() {
  const [content, setContent] = useState("");
  const { addPost } = useContext(FeedContext);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    addPost({ content });
    setContent("");
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="What's on your mind?"
          rows={4}
          cols={30}
          required
        ></textarea>
        <button type="submit" className={buttonStyles.button}>
          Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
