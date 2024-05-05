import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({ isLoggedIn: false });

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginUser = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        localStorage.setItem("token", data.encodedToken);
        navigate("/");
        return data;
      }
      toast.error(data.errors[0]);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signupUser = async (userData) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        localStorage.setItem("token", data.encodedToken);
        navigate("/");
        return data;
      }
      toast.error(data.errors[0]);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, loginUser, signupUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
