import type { NextPage } from "next";
import styles from "./group-component5.module.css";

export type GroupComponent5Type = {
  className?: string;
  orderDetails?: string;
  totalOrders?: string;
  box1?: string;
};

const GroupComponent5: NextPage<GroupComponent5Type> = ({
  className = "",
  orderDetails,
  totalOrders,
  box1,
}) => {
  return (
    <div className={[styles.orderBoxesBackgroundParent, className].join(" ")}>
      <div className={styles.orderBoxesBackground} />
      <div className={styles.ordersData}>
        <div className={styles.orderDetailsParent}>
          <b className={styles.orderDetails}>{orderDetails}</b>
          <div className={styles.totalOrders}>{totalOrders}</div>
        </div>
      </div>
      <img className={styles.box1Icon} loading="lazy" alt="" src={box1} />
    </div>
  );
};

export default GroupComponent5;
