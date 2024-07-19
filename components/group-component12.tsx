import type { NextPage } from "next";
import styles from "./group-component12.module.css";

export type GroupComponent12Type = {
  className?: string;
};

const GroupComponent12: NextPage<GroupComponent12Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src="/mask-group-1@2x.png"
      />
      <div className={styles.ebayWrapper}>
        <b className={styles.ebay}>Ebay</b>
      </div>
    </div>
  );
};

export default GroupComponent12;
