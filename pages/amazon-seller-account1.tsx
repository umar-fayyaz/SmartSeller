import type { NextPage } from "next";
import GroupComponent14 from "../components/group-component14";
import GroupComponent13 from "../components/group-component13";
import GroupComponent12 from "../components/group-component12";
import GroupComponent11 from "../components/group-component11";
import GroupComponent15 from "../components/group-component15";
import styles from "./amazon-seller-account1.module.css";

const AmazonSellerAccount1: NextPage = () => {
  return (
    <div className={styles.amazonSellerAccount2}>
      <GroupComponent14 />
      <div className={styles.background} />
      <main className={styles.frameParent}>
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.integrationTitle}>
            <h1 className={styles.sellerAccountIntegration}>
              Seller Account Integration
            </h1>
            <h3 className={styles.integratedOptions}>Integrated Options</h3>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <GroupComponent13
                maskGroup="/mask-group@2x.png"
                amazon="Amazon"
              />
              <GroupComponent12 />
              <GroupComponent13
                maskGroup="/mask-group-2@2x.png"
                amazon="Shopify"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1000000949.svg"
              />
            </div>
          </div>
        </section>
        <section className={styles.sidebar}>
          <GroupComponent11 />
          <GroupComponent15 />
        </section>
      </main>
    </div>
  );
};

export default AmazonSellerAccount1;
