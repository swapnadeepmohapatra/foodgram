import React, { useContext, useState } from "react";
import styles from "../styles/signupForm.module.css";
import buttonStyles from "../../../global/styles/button.module.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";

function SignupForm() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const { signupUser } = useContext(AuthContext);

  const signupHandler = (e) => {
    e.preventDefault();

    if (
      signupData.firstName.trim() === "" ||
      signupData.lastName.trim() === "" ||
      signupData.username.trim() === "" ||
      signupData.password.trim() === ""
    ) {
      toast.error("Please fill all fields");
    } else {
      signupUser({
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        username: signupData.username,
        password: signupData.password,
      });
    }
  };

  const onChangeHandler = (name) => (e) => {
    setSignupData({ ...signupData, [name]: e.target.value });
  };

  return (
    <div className={styles.background}>
      <div className={styles.backdrop}>
        <form className={styles.signupForm} onSubmit={signupHandler}>
          <h1>Signup</h1>
          <label>
            <p>First Name</p>
            <input
              type="text"
              placeholder="First Name"
              className={styles.textField}
              onChange={onChangeHandler("firstName")}
              value={signupData.firstName}
            />
          </label>
          <label>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              className={styles.textField}
              onChange={onChangeHandler("lastName")}
              value={signupData.lastName}
            />
          </label>
          <label>
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              className={styles.textField}
              onChange={onChangeHandler("username")}
              value={signupData.username}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              className={styles.textField}
              onChange={onChangeHandler("password")}
              value={signupData.password}
            />
          </label>
          <button type="submit" className={buttonStyles.button}>
            Signup
          </button>
          <p>
            Have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
