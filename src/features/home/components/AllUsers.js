import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import User from "../../../global/components/User";

function AllUsers() {
  const { users, user } = useContext(UserContext);

  if (!users) {
    return null;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>All Users</h2>
      <ul
        style={{
          padding: 0,
        }}
      >
        {users
          .filter((usr) => usr._id !== user._id)
          .map((user) => (
            <User key={user.id} user={user} />
          ))}
      </ul>
    </div>
  );
}

export default AllUsers;
