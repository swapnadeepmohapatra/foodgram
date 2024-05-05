import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FeedContext = createContext({});

export function FeedProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

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

  const deletePost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${postId}`,
        {
          method: "DELETE",
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
        toast.success("Post deleted successfully");
        setPosts(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const bookmarkPost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/bookmark/${postId}`,
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
        setBookmarkedPosts(data.bookmarks);
        toast.success("Post bookmarked successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeBookmark = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/remove-bookmark/${postId}`,
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
        setBookmarkedPosts(data.bookmarks);
        toast.success("Bookmark removed successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FeedContext.Provider
      value={{
        posts,
        addPost,
        likePost,
        dislikePost,
        deletePost,
        bookmarkPost,
        removeBookmark,
        bookmarkedPosts,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}
