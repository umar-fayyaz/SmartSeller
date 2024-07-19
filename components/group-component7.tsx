import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./group-component7.module.css";

export type GroupComponent7Type = {
  className?: string;
  paymentMethod21?: string;
  purchaseDueValuePlacehold?: string;
  totalPurchaseDue?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const GroupComponent7: NextPage<GroupComponent7Type> = ({
  className = "",
  paymentMethod21,
  purchaseDueValuePlacehold,
  totalPurchaseDue,
  propAlignSelf,
  propFlex,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.paymentIconParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.paymentIcon} />
      <div className={styles.frameParent}>
        <div className={styles.purchaseDueIconParent}>
          <div className={styles.purchaseDueIcon} />
          <img
            className={styles.paymentMethod21}
            loading="lazy"
            alt=""
            src={paymentMethod21}
          />
        </div>
        <div className={styles.paymentValueWrapper}>
          <div className={styles.paymentValue}>
            <div className={styles.purchaseDueValuePlaceholderWrapper}>
              <b className={styles.purchaseDueValue}>
                {purchaseDueValuePlacehold}
              </b>
            </div>
            <div className={styles.totalPurchaseDue}>{totalPurchaseDue}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent7;
