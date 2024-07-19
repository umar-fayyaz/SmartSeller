import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./group-component9.module.css";

export type GroupComponent9Type = {
  className?: string;
};

const GroupComponent9: NextPage<GroupComponent9Type> = ({ className = "" }) => {
  return (
    <header className={[styles.sidebarBackgroundParent, className].join(" ")}>
      <div className={styles.sidebarBackground} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
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
              <div className={styles.searchInputParent}>
                <div className={styles.searchInput} />
                <a className={styles.search}>Search</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileCardParent}>
          <div className={styles.profileCard}>
            <div className={styles.groupDiv}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-1000000873.svg"
              />
              <div className={styles.pictureBackgroundParent}>
                <div className={styles.pictureBackground} />
                <div className={styles.avatarIconParent}>
                  <img
                    className={styles.avatarIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className={styles.avatarCircleParent}>
                    <div className={styles.avatarCircle} />
                    <a className={styles.avatarBadge}>1</a>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameInner} />
                    <a className={styles.a}>2</a>
                  </div>
                </div>
              </div>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1000000870.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameDiv}>
              <Form.Select className={styles.groupFormselect} />
            </div>
            <img
              className={styles.menuButtonIcon}
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

export default GroupComponent9;
