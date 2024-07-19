import type { NextPage } from "next";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
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
              <input
                className={styles.search}
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.selectedStoreWrapper}>
                <a className={styles.selectedStore}>Selected Store</a>
              </div>
            </div>
            <div className={styles.userIconWrapper}>
              <img className={styles.userIcon} alt="" src="/user-icon.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-1000000873.svg"
          />
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.icons}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <a className={styles.divider}>1</a>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper3}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <div className={styles.ellipseGroup}>
              <div className={styles.frameChild2} />
              <a className={styles.a}>2</a>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <img
            className={styles.frameChild3}
            loading="lazy"
            alt=""
            src="/group-1000000870.svg"
          />
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameParent2}>
              <div className={styles.johnSmilgaParent}>
                <a className={styles.johnSmilga}>John Smilga</a>
                <div className={styles.frameWrapper6}>
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/user-icon.svg"
                  />
                </div>
              </div>
              <a className={styles.superAdmin}>Super Admin</a>
            </div>
          </div>
          <div className={styles.profileImageParent}>
            <div className={styles.profileImage} />
            <img
              className={styles.imagePlaceholderIcon}
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

export default GroupComponent1;
import type { NextPage } from "next";
import GroupComponent3 from "./group-component3";
import GroupComponent2 from "./group-component2";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.mostSellingBackgroundParent, className].join(" ")}>
      <div className={styles.mostSellingBackground} />
      <div className={styles.mostSellingContent}>
        <div className={styles.mostSellingProductsParent}>
          <b className={styles.mostSellingProducts}>Most Selling Products</b>
          <div className={styles.viewAllButton}>
            <div className={styles.viewAllParent}>
              <a className={styles.viewAll}>View All</a>
              <div className={styles.viewAllIcon}>
                <img
                  className={styles.viewAllIconChild}
                  loading="lazy"
                  alt=""
                  src="/group-1000000927.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productTable}>
        <div className={styles.productRowBackgroundParent}>
          <div className={styles.productRowBackground} />
          <div className={styles.productNameHeaderParent}>
            <div className={styles.productNameHeader}>
              <b className={styles.cardSpacing}>#</b>
              <b className={styles.products}>Products</b>
            </div>
            <b className={styles.price}>Price</b>
          </div>
        </div>
        <GroupComponent3
          prop="1"
          innovationConceptLaptop="/innovationconceptlaptop@2x.png"
          lenovo3rdGeneration="Lenovo 3rd Generation"
          prop1="$26448"
        />
        <GroupComponent2
          cardImagePlaceholder="2"
          earphonesWithCaseSurround="/earphoneswithcasesurroundedbynaturescene@2x.png"
          boldV32="Bold V3.2"
          prop="$268"
        />
        <GroupComponent2
          cardImagePlaceholder="3"
          earphonesWithCaseSurround="/innovationconceptlaptop@2x.png"
          boldV32="Nike Jordan"
          prop="$2644"
        />
        <GroupComponent3
          prop="4"
          innovationConceptLaptop="/17017@2x.png"
          lenovo3rdGeneration="Apple Series 5 Watch"
          prop1="$28"
        />
      </div>
    </div>
  );
};

export default GroupComponent1;
