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