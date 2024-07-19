import type { NextPage } from "next";
import GroupComponent14 from "../components/group-component14";
import GroupComponent16 from "../components/group-component16";
import IntegratedPlatforms from "../components/integrated-platforms";
import styles from "./amazon-seller-account2.module.css";

const AmazonSellerAccount2: NextPage = () => {
  return (
    <div className={styles.amazonSellerAccount3}>
      <GroupComponent14 />
      <main className={styles.frameParent}>
        <GroupComponent16 />
        <IntegratedPlatforms />
      </main>
      <div className={styles.pageBackground} />
    </div>
  );
};

export default AmazonSellerAccount2;
