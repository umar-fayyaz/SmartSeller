import type { NextPage } from "next";
import styles from "./group-component2.module.css";

export type GroupComponent2Type = {
  className?: string;
  cardImagePlaceholder?: string;
  earphonesWithCaseSurround?: string;
  boldV32?: string;
  prop?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({
  className = "",
  cardImagePlaceholder,
  earphonesWithCaseSurround,
  boldV32,
  prop,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.cardImagePlaceholderWrapper}>
          <div className={styles.cardImagePlaceholder}>
            {cardImagePlaceholder}
          </div>
        </div>
        <div className={styles.earphonesWithCaseSurroundedParent}>
          <img
            className={styles.earphonesWithCaseSurroundedIcon}
            loading="lazy"
            alt=""
            src={earphonesWithCaseSurround}
          />
          <div className={styles.boldV32Wrapper}>
            <div className={styles.boldV32}>{boldV32}</div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>{prop}</div>
      </div>
    </div>
  );
};

export default GroupComponent2;
