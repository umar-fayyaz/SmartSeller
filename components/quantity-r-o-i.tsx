import type { NextPage } from "next";
import styles from "./quantity-r-o-i.module.css";

export type QuantityROIType = {
  className?: string;
};

const QuantityROI: NextPage<QuantityROIType> = ({ className = "" }) => {
  return (
    <div className={[styles.quantityROI, className].join(" ")}>
      <b className={styles.selectedProducts}>Selected products</b>
      <div className={styles.counterProductList}>
        <div className={styles.sourceLayer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.kiaBewEconomyContainer}>
              <p
                className={styles.kiaBewEconomy}
              >{`KIA bew economy Replacement Front Lower Bumper Deflector, fits 1998-2004 `}</p>
              <p className={styles.chevroletS10Pickup}>Chevrolet S10 pickup</p>
            </div>
            <div className={styles.counterProductOneRemove}>
              <img
                className={styles.firstIcon}
                alt=""
                src="/group-1000000863.svg"
              />
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.goPartsReplacementForContainer}>
              <p
                className={styles.goPartsReplacementFor}
              >{`gO-PARTS Replacement for 1998 - 2004 Chevrolet (Chevy) S10 Pickup Front `}</p>
              <p className={styles.lowerValance88967926}>
                Lower Valance 88967926 GM 1092164 Replacement For Chevrolet S10
              </p>
            </div>
            <div className={styles.counterProductTwoRemove}>
              <img
                className={styles.secondIcon}
                alt=""
                src="/group-1000000863.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityROI;
