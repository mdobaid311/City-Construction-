import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Site from "./components/Site/Site";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      {/* <Login/> */}

      {/* <Home /> */}
      <Site />
    </div>
  );
}

export default App;
