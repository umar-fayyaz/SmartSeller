import type { NextPage } from "next";
import GroupComponent1 from "../components/group-component1";
import GroupComponent from "../components/group-component";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const ProductScreen: NextPage = () => {
  return (
    <div className={styles.productScreen}>
      <GroupComponent1 />
      <main className={styles.frameParent}>
        <GroupComponent />
        <FrameComponent />
      </main>
    </div>
  );
};

export default ProductScreen;
import type { NextPage } from "next";
import GroupComponent9 from "../components/group-component9";
import GroupComponent8 from "../components/group-component8";
import GroupComponent6 from "../components/group-component6";
import GroupComponent4 from "../components/group-component4";
import GroupComponent1 from "../components/group-component1";
import GroupComponent from "../components/group-component";
import styles from "./index.module.css";

const Dashboard: NextPage = () => {
  return (
    <div className={styles.dashboard}>
      <GroupComponent9 />
      <main className={styles.navigationMenu}>
        <GroupComponent8 />
        <section className={styles.contentHeaderWrapper}>
          <div className={styles.contentHeader}>
            <div className={styles.headerCards}>
              <GroupComponent6 />
              <GroupComponent4 />
            </div>
            <div className={styles.mostSelling}>
              <GroupComponent1 />
              <GroupComponent />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
