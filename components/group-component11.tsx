import type { NextPage } from "next";
import styles from "./group-component11.module.css";

export type GroupComponent11Type = {
  className?: string;
};

const GroupComponent11: NextPage<GroupComponent11Type> = ({
  className = "",
}) => {
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
                alt=""
                src="/vector-21.svg"
              />
              <a className={styles.dashboard}>Dashboard</a>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.salesDashboardIconWrapper}>
                  <div className={styles.salesDashboardIcon} />
                </div>
                <div className={styles.salesDashboard}>Sales Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.accountStructureWrapper}>
        <div className={styles.accountStructure}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.frameInner}
              alt=""
              src="/group-10000008781.svg"
            />
            <div className={styles.storesIntegration}>Stores Integration</div>
          </div>
          <div className={styles.accountStructureInner}>
            <div className={styles.frameDiv}>
              <div className={styles.accountIconWrapper}>
                <div className={styles.accountIcon} />
              </div>
              <div className={styles.sellerAccount}>Seller Account</div>
            </div>
          </div>
          <div className={styles.accountStructureChild}>
            <div className={styles.frameParent1}>
              <div className={styles.ellipseWrapper}>
                <div className={styles.ellipseDiv} />
              </div>
              <div className={styles.vendorAccount}>Vendor Account</div>
            </div>
          </div>
          <div className={styles.accountStructureInner1}>
            <div className={styles.frameParent2}>
              <div className={styles.ellipseContainer}>
                <div className={styles.frameChild1} />
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

export default GroupComponent11;
