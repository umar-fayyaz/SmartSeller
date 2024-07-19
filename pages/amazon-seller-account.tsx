import type { NextPage } from "next";
import GroupComponent14 from "../components/group-component14";
import GroupComponent13 from "../components/group-component13";
import GroupComponent12 from "../components/group-component12";
import GroupComponent11 from "../components/group-component11";
import GroupComponent10 from "../components/group-component10";
import styles from "./amazon-seller-account.module.css";

const AmazonSellerAccount: NextPage = () => {
  return (
    <div className={styles.amazonSellerAccount1}>
      <GroupComponent14 />
      <div className={styles.amazonSellerAccount1Child} />
      <footer className={styles.frameParent}>
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.sellerAccountIntegrationParent}>
            <h1 className={styles.sellerAccountIntegration}>
              Seller Account Integration
            </h1>
            <h3 className={styles.integratedOptions}>Integrated Options</h3>
          </div>
          <div className={styles.platformStructureWrapper}>
            <div className={styles.platformStructure}>
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
                className={styles.platformStructureChild}
                loading="lazy"
                alt=""
                src="/group-1000000949.svg"
              />
            </div>
          </div>
        </section>
        <section className={styles.frameGroup}>
          <GroupComponent11 />
          <GroupComponent10 />
        </section>
      </footer>
    </div>
  );
};

export default AmazonSellerAccount;
