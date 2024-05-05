import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

function AllUsers() {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllUsers;
