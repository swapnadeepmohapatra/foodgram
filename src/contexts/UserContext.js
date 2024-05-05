import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// UserContext
export const UserContext = createContext({});

// UserProvider
export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        const data = await response.json();
        console.log(data);
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user", {
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        console.log("ME");
        console.log(data);
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const getUserPosts = async (username) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/user/${username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data.posts;
    } catch (error) {
      console.error(error);
    }
  };

  const followUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/follow/${userId}`,
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
        setUser(data.user);
        toast.success("User followed successfully");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const unfollowUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/unfollow/${userId}`,
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
        setUser(data.user);
        toast.success("User unfollowed successfully");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ users, getUserPosts, followUser, unfollowUser, user }}
    >
      {children}
    </UserContext.Provider>
  );
}
