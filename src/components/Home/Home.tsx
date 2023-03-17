import Card from "../Card/Card";
import Header from "../Header/Header";
import styles from "./Home.module.scss";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.body}>
        <div className={styles.new}>
          <AiOutlinePlusSquare size={30} />
          <h3>NEW SITE</h3>
        </div>
        <Card progress="Inprogress" />
        <Card progress="Completed" />
        <Card progress="Inprogress" />
        <Card progress="Completed" />
        <Card progress="Inprogress" />
      </div>
    </div>
  );
};

export default Home;
