import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./features/authentication/pages/LoginForm";
import SignupForm from "./features/authentication/pages/SignupForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./global/components/PrivateRoute";
import Feed from "./features/home/pages/Feed";
import Profile from "./features/profile/pages/Profile";
import Bookmark from "./features/home/pages/Bookmark";
import Explore from "./features/home/pages/Explore";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmark"
          element={
            <PrivateRoute>
              <Bookmark />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
