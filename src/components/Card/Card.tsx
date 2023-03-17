import React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  progress?: string;
};

const Card = ({ progress }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card_title}>Shafi bhai ki site</h3>
      <p className={styles.card_description}>
        {" Lorem ipsum dolor sit amet, consectetur adipisicing elit Aliquidiure        asperiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident accusamus consectetur fugiat molestiae possimus aut, ratione neque iure eos."
          .length > 150
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime velit dolorem "
          : "Lorem ipsum dolor "}
      </p>
      <div>
        <span
          className={
            progress == "Completed"
              ? styles.card_progress_completed
              : styles.card_progress_inprogress
          }
        >
          {progress}
        </span>
        <span>17 Mar 2023</span>
      </div>
    </div>
  );
};

export default Card;
