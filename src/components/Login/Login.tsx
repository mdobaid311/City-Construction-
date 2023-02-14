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
      <form onSubmit={loginHandler}>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
