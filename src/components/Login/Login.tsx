import styles from "./Login.module.scss";

const Login = () => {
  const loginHandler: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.header}></div>
        <form className={styles.form}>
          <label htmlFor="username">Username:</label>
          <input className={styles.inputField} type="text" name="username" />
          <label htmlFor="password">Password:</label>
          <input className={styles.inputField} type="text" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
