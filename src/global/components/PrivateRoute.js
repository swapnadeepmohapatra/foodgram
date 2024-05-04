import { Navigate, useLocation } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function PrivateRoute({ children }) {
  const [authToken] = useLocalStorage("token");

  const location = useLocation();

  return authToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
