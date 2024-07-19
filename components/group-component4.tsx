import type { NextPage } from "next";
import styles from "./group-component4.module.css";

export type GroupComponent4Type = {
  className?: string;
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.secondRow}>
          <div className={styles.costContainer}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <b className={styles.select}>Select</b>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild1} />
              <div className={styles.div}>1</div>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild2} />
              <b className={styles.brand}>Brand</b>
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild3} />
                <div className={styles.lenovo}>Lenovo</div>
              </div>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild4} />
              <b className={styles.unitCost}>Unit Cost</b>
              <div className={styles.rectangleParent4}>
                <div className={styles.frameChild5} />
                <div className={styles.div1}>$962136</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent5}>
            <div className={styles.frameChild6} />
            <b className={styles.smartSellerPrice}>Smart Seller Price</b>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild7} />
              <div className={styles.pricePlaceholder}>$9714176</div>
            </div>
          </div>
          <div className={styles.rectangleParent7}>
            <div className={styles.frameChild8} />
            <b className={styles.action}>Action</b>
            <img
              className={styles.groupIcon}
              alt=""
              src="/group-1000000983.svg"
            />
          </div>
        </div>
        <div className={styles.dropdownLabels}>
          <div className={styles.rectangleParent8}>
            <div className={styles.frameChild9} />
            <b className={styles.sku}>SKU</b>
          </div>
          <div className={styles.rectangleParent9}>
            <div className={styles.frameChild10} />
            <div className={styles.div2}>018</div>
          </div>
        </div>
        <div className={styles.firstRowNames}>
          <div className={styles.rectangleParent10}>
            <div className={styles.frameChild11} />
            <b className={styles.maxAvailableStock}>Max Available Stock</b>
          </div>
          <div className={styles.rectangleParent11}>
            <div className={styles.frameChild12} />
            <div className={styles.div3}>300</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
