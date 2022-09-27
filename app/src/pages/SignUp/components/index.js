import React from "react";

import styles from "./styles.module.scss";

const SignUp = ({
  handleSubmit,
  formValues,
  startCase,
  handleFormChange,
  data,
  error,
}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Сreate a new account</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          {Object.entries(formValues).map(([fieldName, value]) => {
            return (
              <input
                className={styles.input}
                key={fieldName}
                type="text"
                placeholder={startCase(fieldName)}
                value={value}
                name={fieldName}
                onChange={handleFormChange}
              />
            );
          })}
          <button className={styles.button} role="submit">
            Create Account
          </button>
          <p style={{ color: "green" }}>{data?.data?.message}</p>
          <p style={{ color: "red" }}>{error?.message}</p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
