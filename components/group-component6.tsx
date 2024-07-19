import type { NextPage } from "next";
import GroupComponent7 from "./group-component7";
import styles from "./group-component6.module.css";

export type GroupComponent6Type = {
  className?: string;
};

const GroupComponent6: NextPage<GroupComponent6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cardBackgroundParent, className].join(" ")}>
      <div className={styles.cardBackground} />
      <div className={styles.cardContent}>
        <GroupComponent7
          paymentMethod21="/paymentmethod-2-1@2x.png"
          purchaseDueValuePlacehold="$307,144"
          totalPurchaseDue="Total Purchase Due"
        />
        <div className={styles.cardSalesAmount}>
          <GroupComponent7
            paymentMethod21="/increase@2x.png"
            purchaseDueValuePlacehold="$385,657"
            totalPurchaseDue="Total Sale Amount"
            propAlignSelf="unset"
            propFlex="1"
          />
        </div>
      </div>
      <div className={styles.cardTotal}>
        <div className={styles.totalIconsBackgroundParent}>
          <div className={styles.totalIconsBackground} />
          <div className={styles.frameParent}>
            <div className={styles.salesIconLabelParent}>
              <div className={styles.salesIconLabel} />
              <img
                className={styles.salesIcon}
                loading="lazy"
                alt=""
                src="/sales@2x.png"
              />
            </div>
            <div className={styles.salesAmount}>
              <div className={styles.totalSalesAmount}>
                <b className={styles.expensesIconLabel}>$150,200</b>
                <div className={styles.totalSalesWrapper}>
                  <div className={styles.totalSales}>Total Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.salesIconBackgroundParent}>
                <div className={styles.salesIconBackground} />
                <img
                  className={styles.spendingIcon}
                  loading="lazy"
                  alt=""
                  src="/spending@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.wrapper}>
                <b className={styles.b}>$40,000</b>
              </div>
              <div className={styles.totalExpensesAmount}>
                Total Expenses Amount
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent6;
