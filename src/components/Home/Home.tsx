import styles from "./Home.module.scss";
 
const Home = () => {
  const sites = [
    { name: "Site-1", status: "In-progress" },
    { name: "Site-2", status: "In-progress" },
    { name: "Site-3", status: "completed" },
    { name: "Site-4", status: "In-progress" },
    { name: "Site-5", status: "In-progress" },
    { name: "Site-6", status: "completed" },
    { name: "Site-7", status: "In-progress" },
    { name: "Site-8", status: "completed" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>City-constructions</h1>
      </div>
      <div className={styles.sites}>
        <div className={styles.heading}>{/* <h1>Sites</h1> */}</div>
        <div className={styles.list}>
          {sites.map((site) => {
            return (
              <div className={styles.site}>
                <h1>{site.name}</h1>
                <span
                  className={
                    site.status === "In-progress"
                      ? styles.inprogress
                      : styles.completed
                  }
                >
                  {site.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
