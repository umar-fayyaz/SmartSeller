import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./group-component6.module.css";

export type GroupComponent6Type = {
  className?: string;

  /** Style props */
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivPosition?: CSSProperties["position"];
};

const GroupComponent6: NextPage<GroupComponent6Type> = ({
  className = "",
  rectangleDivTop,
  rectangleDivPosition,
}) => {
  const groupHeader1Style: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
      position: rectangleDivPosition,
    };
  }, [rectangleDivTop, rectangleDivPosition]);

  return (
    <header
      className={[styles.rectangleParent, className].join(" ")}
      style={groupHeader1Style}
    >
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.assetContainerParent}>
          <div className={styles.assetContainer}>
            <img
              className={styles.asset24x1}
              loading="lazy"
              alt=""
              src="/asset-24x-1@2x.png"
            />
            <div className={styles.smartSeller}>
              <a className={styles.smartSeller1}>Smart Seller</a>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <a className={styles.search}>Search</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationInner}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.profileInfo}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group1@2x.png"
              />
              <div className={styles.storeSelection}>
                <a className={styles.selectedStore}>Selected Store</a>
              </div>
            </div>
            <div className={styles.profileDropdown}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/group-1000000863.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.navigationChild}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-1000000873.svg"
          />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <a className={styles.separator}>1</a>
            </div>
          </div>
        </div>
        <div className={styles.navigationInner1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <div className={styles.ellipseGroup}>
              <div className={styles.frameChild2} />
              <a className={styles.a}>2</a>
            </div>
          </div>
        </div>
        <div className={styles.navigationInner2}>
          <img
            className={styles.frameChild3}
            loading="lazy"
            alt=""
            src="/group-1000000870.svg"
          />
        </div>
        <div className={styles.adminDetails}>
          <div className={styles.nameContainerWrapper}>
            <div className={styles.nameContainer}>
              <div className={styles.nameRole}>
                <a className={styles.johnSmilga}>John Smilga</a>
                <div className={styles.selection}>
                  <img
                    className={styles.selectionChild}
                    alt=""
                    src="/group-1000000863.svg"
                  />
                </div>
              </div>
              <a className={styles.superAdmin}>Super Admin</a>
            </div>
          </div>
          <div className={styles.profile}>
            <div className={styles.avatar} />
            <img
              className={styles.placeholderIcon}
              loading="lazy"
              alt=""
              src="/7309681-1@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default GroupComponent6;
