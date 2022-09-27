import React from "react";

import styles from "./styles.module.scss";

const SignIn = ({ signInForm, handleFormChange, handleSubmit }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          className={styles.input}
          name="email"
          type="email"
          value={signInForm.email}
          onChange={handleFormChange}
          placeholder="email..."
        />
        <input
          className={styles.input}
          name="password"
          type="password"
          value={signInForm.password}
          onChange={handleFormChange}
          placeholder="password..."
        />
      </form>

      <button className={styles.button} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default SignIn;
