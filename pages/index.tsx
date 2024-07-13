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
