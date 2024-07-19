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
