import { createContext, useEffect, useState } from "react";

// UserContext
export const UserContext = createContext({});

// UserProvider
export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

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

  return (
    <UserContext.Provider value={{ users, getUserPosts }}>
      {children}
    </UserContext.Provider>
  );
}
