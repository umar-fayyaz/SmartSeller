import type { NextPage } from "next";
import styles from "./group-component13.module.css";

export type GroupComponent13Type = {
  className?: string;
  maskGroup?: string;
  amazon?: string;
};

const GroupComponent13: NextPage<GroupComponent13Type> = ({
  className = "",
  maskGroup,
  amazon,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.maskGroupWrapper}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup}
        />
      </div>
      <b className={styles.amazon}>{amazon}</b>
    </div>
  );
};

export default GroupComponent13;
