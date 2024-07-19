import type { NextPage } from "next";
import styles from "./group-component8.module.css";

export type GroupComponent8Type = {
  className?: string;
};

const GroupComponent8: NextPage<GroupComponent8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.menuBackgroundParent, className].join(" ")}>
      <div className={styles.menuBackground} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.mainParent}>
            <a className={styles.main}>Main</a>
            <div className={styles.submenuDashboard}>
              <div className={styles.frameContainer}>
                <div className={styles.dashboardBackgroundParent}>
                  <div className={styles.dashboardBackground} />
                  <div className={styles.dashboardIconParent}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <a className={styles.dashboard}>Dashboard</a>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.groupDiv}>
                    <div className={styles.integrationIconWrapper}>
                      <div className={styles.integrationIcon} />
                    </div>
                    <div className={styles.salesDashboard}>Sales Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.storeIntegrationOptionWrapper}>
            <div className={styles.storeIntegrationOption}>
              <div className={styles.frameParent1}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-1000000878.svg"
                />
                <div className={styles.storesIntegration}>
                  Stores Integration
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent2}>
                  <div className={styles.sellerIconWrapper}>
                    <div className={styles.sellerIcon} />
                  </div>
                  <div className={styles.analytics}>
                    <div className={styles.sellerAccount}>Seller Account</div>
                  </div>
                </div>
                <div className={styles.optionIconsParent}>
                  <div className={styles.optionIcons}>
                    <div className={styles.settingsIcon} />
                  </div>
                  <div className={styles.vendorAccount}>Vendor Account</div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.defaultSettings}>Default Settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
      </div>
    </div>
  );
};

export default GroupComponent8;
