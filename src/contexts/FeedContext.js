import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FeedContext = createContext({});

export function FeedProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        const data = await response.json();
        console.log("Imp");
        setPosts(data.posts);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async (content) => {
    if (content.content.trim() === "") return;

    console.log(content);

    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ postData: content }),
      });
      const data = await response.json();
      console.log(data);

      if (data.errors) {
        console.log(data.errors);
        toast.error(data.errors[0]);
        return;
      }

      toast.success("Post added successfully");
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  const likePost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/like/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();

      if (data.errors) {
        console.log(data.errors);
        toast.error(data.errors[0]);
        return;
      } else {
        console.log(data);
        setPosts(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const dislikePost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/dislike/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();

      if (data.errors) {
        console.log(data.errors);
        toast.error(data.errors[0]);
        return;
      } else {
        console.log(data);
        setPosts(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FeedContext.Provider value={{ posts, addPost, likePost, dislikePost }}>
      {children}
    </FeedContext.Provider>
  );
}
