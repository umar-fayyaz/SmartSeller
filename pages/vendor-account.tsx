import type { NextPage } from "next";
import GroupComponent6 from "../components/group-component6";
import GroupComponent2 from "../components/group-component2";
import VendorIntegration from "../components/vendor-integration";
import styles from "./vendor-account.module.css";

const VendorAccount: NextPage = () => {
  return (
    <div className={styles.vendorAccount}>
      <GroupComponent6 />
      <main className={styles.sidebar}>
        <GroupComponent2
          propMargin="unset"
          propPosition="unset"
          propHeight="unset"
          propTop="unset"
          propBottom="unset"
          propLeft="unset"
        />
        <VendorIntegration />
      </main>
    </div>
  );
};

export default VendorAccount;
