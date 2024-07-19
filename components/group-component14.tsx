import type { NextPage } from "next";
import styles from "./group-component14.module.css";

export type GroupComponent14Type = {
  className?: string;
};

const GroupComponent14: NextPage<GroupComponent14Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.asset24x1Parent}>
            <img
              className={styles.asset24x1}
              loading="lazy"
              alt=""
              src="/asset-24x-1@2x.png"
            />
            <div className={styles.smartSellerWrapper}>
              <a className={styles.smartSeller}>Smart Seller</a>
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
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-1000000873.svg"
          />
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <a className={styles.separator}>1</a>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild1} />
              <img
                className={styles.vectorIcon1}
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
        </div>
        <div className={styles.frameWrapper2}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-1000000870.svg"
          />
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent3}>
              <div className={styles.johnSmilgaParent}>
                <a className={styles.johnSmilga}>John Smilga</a>
                <div className={styles.frameWrapper4}>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/group-1000000863.svg"
                  />
                </div>
              </div>
              <a className={styles.superAdmin}>Super Admin</a>
            </div>
          </div>
          <div className={styles.profilePictureParent}>
            <div className={styles.profilePicture} />
            <img
              className={styles.backgroundIcon}
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

export default GroupComponent14;
