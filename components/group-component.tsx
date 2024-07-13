import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.mainParent}>
        <a className={styles.main}>Main</a>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.dashboardIconParent}>
              <img
                className={styles.dashboardIcon}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
              <a className={styles.dashboard}>Dashboard</a>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.salesIconWrapper}>
                  <div className={styles.salesIcon} />
                </div>
                <div className={styles.salesDashboard}>Sales Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.frameInner}
              alt=""
              src="/group-1000000878.svg"
            />
            <div className={styles.storesIntegration}>Stores Integration</div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent2}>
              <div className={styles.ellipseWrapper}>
                <div className={styles.ellipseDiv} />
              </div>
              <div className={styles.sellerAccount}>Seller Account</div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent3}>
              <div className={styles.ellipseContainer}>
                <div className={styles.frameChild1} />
              </div>
              <div className={styles.vendorAccount}>Vendor Account</div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent4}>
              <div className={styles.ellipseFrame}>
                <div className={styles.frameChild2} />
              </div>
              <div className={styles.defaultSettings}>Default Settings</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default GroupComponent;
