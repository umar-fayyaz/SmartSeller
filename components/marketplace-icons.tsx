import type { NextPage } from "next";
import styles from "./marketplace-icons.module.css";

export type MarketplaceIconsType = {
  className?: string;
  maskGroup?: string;
  ebay?: string;
};

const MarketplaceIcons: NextPage<MarketplaceIconsType> = ({
  className = "",
  maskGroup,
  ebay,
}) => {
  return (
    <div className={[styles.marketplaceIcons, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.maskGroupWrapper}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src={maskGroup}
          />
        </div>
        <b className={styles.ebay}>{ebay}</b>
      </div>
    </div>
  );
};

export default MarketplaceIcons;
