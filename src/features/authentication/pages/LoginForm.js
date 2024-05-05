import React, { useContext, useState } from "react";
import styles from "../styles/loginForm.module.css";
import buttonStyles from "../../../global/styles/button.module.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";

function LoginForm() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const { loginUser } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();

    if (loginData.username.trim() === "" || loginData.password.trim() === "") {
      console.log("Erro");
      toast.error("Incorrect username or password");
    } else {
      loginUser(loginData.username, loginData.password);
    }
  };

  const onChangeHandler = (name) => (e) => {
    setLoginData({ ...loginData, [name]: e.target.value });
  };

  return (
    <div className={styles.background}>
      <div className={styles.backdrop}>
        <form className={styles.loginForm} onSubmit={loginHandler}>
          <h1>Login</h1>
          <label>
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              className={styles.loginTextField}
              onChange={onChangeHandler("username")}
              value={loginData.username}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              className={styles.loginTextField}
              onChange={onChangeHandler("password")}
              value={loginData.password}
            />
          </label>
          <button type="submit" className={buttonStyles.button}>
            Login
          </button>
          <p>
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
