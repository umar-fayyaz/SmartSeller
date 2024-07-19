import type { NextPage } from "next";
import GroupComponent5 from "./group-component5";
import styles from "./group-component4.module.css";

export type GroupComponent4Type = {
  className?: string;
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.separatorParent, className].join(" ")}>
      <div className={styles.separator} />
      <GroupComponent5
        orderDetails="100"
        totalOrders="Total Orders"
        box1="/box-1@2x.png"
      />
      <GroupComponent5
        orderDetails="110"
        totalOrders="Unconfirmed Orders"
        box1="/group-1000000911.svg"
      />
      <GroupComponent5
        orderDetails="150"
        totalOrders="Confirmed Orders"
        box1="/group-1000000906.svg"
      />
      <GroupComponent5
        orderDetails="170"
        totalOrders="Pushed Orders"
        box1="/group-1000000909.svg"
      />
    </div>
  );
};

export default GroupComponent4;
