import type { NextPage } from "next";
import GroupComponent6 from "../components/group-component6";
import GroupComponent2 from "../components/group-component2";
import FrameComponent from "../components/frame-component";
import styles from "./product-screen.module.css";

const ProductScreen: NextPage = () => {
  return (
    <div className={styles.productScreen}>
      <GroupComponent6 rectangleDivTop="unset" rectangleDivPosition="unset" />
      <main className={styles.frameParent}>
        <GroupComponent2
          propMargin="unset"
          propPosition="unset"
          propHeight="unset"
          propTop="unset"
          propBottom="unset"
          propLeft="unset"
        />
        <FrameComponent />
      </main>
    </div>
  );
};

export default ProductScreen;
