import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./group-component2.module.css";

export type GroupComponent2Type = {
  className?: string;

  /** Style props */
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propHeight?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({
  className = "",
  propMargin,
  propPosition,
  propHeight,
  propTop,
  propBottom,
  propLeft,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      position: propPosition,
      height: propHeight,
      top: propTop,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propMargin, propPosition, propHeight, propTop, propBottom, propLeft]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <div className={styles.frameChild} />
      <div className={styles.mainParent}>
        <a className={styles.main}>Main</a>
        <div className={styles.frameWrapper}>
          <div className={styles.dashboardLinkParent}>
            <div className={styles.dashboardLink}>
              <img
                className={styles.dashboardIcon}
                alt=""
                src="/vector-21.svg"
              />
              <a className={styles.dashboard}>Dashboard</a>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.salesDashboardLinkParent}>
                <div className={styles.salesDashboardLink}>
                  <div className={styles.salesDashboardIcon} />
                </div>
                <div className={styles.salesDashboard}>Sales Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.frameInner}
              alt=""
              src="/group-10000008781.svg"
            />
            <div className={styles.storesIntegration}>Stores Integration</div>
          </div>
          <div className={styles.settingLinks}>
            <div className={styles.settingLinkElementsParent}>
              <div className={styles.settingLinkElements}>
                <div className={styles.settingIcons} />
              </div>
              <div className={styles.sellerAccount}>Seller Account</div>
            </div>
          </div>
          <div className={styles.settingLinks1}>
            <div className={styles.frameGroup}>
              <div className={styles.ellipseWrapper}>
                <div className={styles.ellipseDiv} />
              </div>
              <div className={styles.vendorAccount}>Vendor Account</div>
            </div>
          </div>
          <div className={styles.settingLinks2}>
            <div className={styles.frameParent1}>
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

export default GroupComponent2;
