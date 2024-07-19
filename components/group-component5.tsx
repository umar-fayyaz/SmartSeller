import type { NextPage } from "next";
import styles from "./group-component5.module.css";

export type GroupComponent5Type = {
  className?: string;
};

const GroupComponent5: NextPage<GroupComponent5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <header className={styles.carParts}>
        <a className={styles.carParts1}>Car Parts</a>
        <div className={styles.profitInputFields}>
          <a className={styles.profitPercentage}>Profit Percentage</a>
        </div>
      </header>
      <div className={styles.profitPercentageInput}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.enterSkuFor}>
              Enter SKU for multiple use comma ( , ) between
            </div>
          </div>
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.uploadProfit}>
        <div className={styles.profitInput}>
          <div className={styles.sKUInput}>
            <div className={styles.searchUpload}>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <a className={styles.search}>Search</a>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild1} />
                <b className={styles.uploadFile}>Upload File</b>
              </div>
            </div>
          </div>
          <div className={styles.profitInputValue}>
            <b className={styles.profitPercentage1}>Profit Percentage</b>
            <div className={styles.profitInputBox} />
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild2} />
              <b className={styles.updateCost}>Update cost</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent5;
