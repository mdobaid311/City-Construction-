import Header from "../Header/Header";
import styles from "./Site.module.scss";

const Site = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}></div>
    </div>
  );
};

export default Site;
