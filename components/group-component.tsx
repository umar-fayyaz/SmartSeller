import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.salesChartBackgroundParent, className].join(" ")}>
      <div className={styles.salesChartBackground} />
      <div className={styles.mostSellingProductsParent}>
        <b className={styles.mostSellingProducts}>Most Selling Products</b>
        <div className={styles.salesChartData}>
          <div className={styles.salesChartContainer}>
            <div className={styles.salesNavigation}>
              <div className={styles.frameParent}>
                <div className={styles.salesNavigationIconsParent}>
                  <div className={styles.salesNavigationIcons}>
                    <div className={styles.circle} />
                  </div>
                  <div className={styles.sales}>Sales</div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.purchase}>Purchase</div>
                </div>
              </div>
            </div>
            <div className={styles.salesFilterBackgroundParent}>
              <div className={styles.salesFilterBackground} />
              <div className={styles.salesDataParent}>
                <div className={styles.salesData}>2024</div>
                <div className={styles.salesFilterIcon}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;