import type { NextPage } from "next";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";
import IntegrationContent from "../components/integration-content";
import styles from "./add-vendor-account.module.css";

const AddVendorAccount: NextPage = () => {
  return (
    <div className={styles.addVendorAccount}>
      <GroupComponent3 />
      <main className={styles.sidebar}>
        <GroupComponent2 />
        <section className={styles.integrationContentWrapper}>
          <IntegrationContent />
        </section>
      </main>
      <div className={styles.background} />
    </div>
  );
};

export default AddVendorAccount;
