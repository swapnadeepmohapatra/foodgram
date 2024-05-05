import React, { useState } from "react";

function AvatarUpload({ onChange }) {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
        style={{ display: "none" }}
        id="avatarInput"
      />
      <label htmlFor="avatarInput">
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        ) : (
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#ccc",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ color: "#fff" }}>Upload Avatar</span>
          </div>
        )}
      </label>
    </div>
  );
}

export default AvatarUpload;
