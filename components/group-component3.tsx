import type { NextPage } from "next";
import styles from "./group-component3.module.css";

export type GroupComponent3Type = {
  className?: string;
  prop?: string;
  innovationConceptLaptop?: string;
  lenovo3rdGeneration?: string;
  prop1?: string;
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({
  className = "",
  prop,
  innovationConceptLaptop,
  lenovo3rdGeneration,
  prop1,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.wrapper}>
        <div className={styles.div}>{prop}</div>
      </div>
      <div className={styles.innovationConceptLaptopParent}>
        <img
          className={styles.innovationConceptLaptopIcon}
          loading="lazy"
          alt=""
          src={innovationConceptLaptop}
        />
        <div className={styles.lenovo3rdGenerationWrapper}>
          <div className={styles.lenovo3rdGeneration}>
            {lenovo3rdGeneration}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.div1}>{prop1}</div>
      </div>
    </div>
  );
};

export default GroupComponent3;
