import type { NextPage } from "next";
import GroupComponent1 from "./group-component1";
import GroupComponent from "./group-component";
import styles from "./vendor-integration.module.css";

export type VendorIntegrationType = {
  className?: string;
};

const VendorIntegration: NextPage<VendorIntegrationType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.vendorIntegration, className].join(" ")}>
      <div className={styles.vendorDetails}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.integrationStatus}>
            <h1 className={styles.vendorAccountIntegration}>
              Vendor Account Integration
            </h1>
            <h3 className={styles.integratedOptions}>Integrated Options</h3>
          </div>
          <div className={styles.integratedPlatforms}>
            <div className={styles.platformLogos}>
              <GroupComponent1
                maskGroup="/mask-group-11@2x.png"
                carParts="Car Parts"
              />
              <GroupComponent tRQ="TRQ" />
              <GroupComponent tRQ="LKQ" />
              <GroupComponent1
                maskGroup="/mask-group-21@2x.png"
                carParts="Own Warehouse"
              />
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <h1 className={styles.vendorIntegratedAccounts}>
            Vendor Integrated Accounts
          </h1>
          <div className={styles.accountHeaders}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <b className={styles.key}>Key*</b>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.headerValueSet}>12</div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.emptyHeaderSet}>64</div>
            </div>
          </div>
          <div className={styles.accountHeaders1}>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild2} />
              <b className={styles.key1}>Key*</b>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.div}>47</div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild4} />
              <div className={styles.div1}>23</div>
            </div>
          </div>
          <div className={styles.accountHeaders2}>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild5} />
              <b className={styles.storeName}>Store Name</b>
            </div>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <div className={styles.ghnf}>GHNF</div>
            </div>
          </div>
          <div className={styles.accountHeaders3}>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild7} />
              <b className={styles.key2}>Key*</b>
            </div>
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild8} />
              <div className={styles.div2}>65</div>
            </div>
            <div className={styles.rectangleParent9}>
              <div className={styles.frameChild9} />
              <div className={styles.div3}>92</div>
            </div>
          </div>
          <div className={styles.accountDataTable}>
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent10}>
                <div className={styles.frameChild10} />
                <b className={styles.carParts}>Car Parts</b>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.frameChild11} />
                <b className={styles.trq}>TRQ</b>
              </div>
              <div className={styles.rectangleParent12}>
                <div className={styles.frameChild12} />
                <b className={styles.lkq}>LKQ</b>
              </div>
            </div>
            <div className={styles.rectangleParent13}>
              <div className={styles.frameChild13} />
              <b className={styles.sr}>Sr.</b>
              <div className={styles.rectangleParent14}>
                <div className={styles.frameChild14} />
                <div className={styles.dataValueSet}>1</div>
              </div>
            </div>
            <div className={styles.rectangleParent15}>
              <div className={styles.frameChild15} />
              <b className={styles.storeName1}>Store Name</b>
              <div className={styles.rectangleParent16}>
                <div className={styles.frameChild16} />
                <div className={styles.asd}>Asd</div>
              </div>
            </div>
            <div className={styles.dataRows}>
              <div className={styles.rectangleParent17}>
                <div className={styles.frameChild17} />
                <b className={styles.storeName2}>Store Name</b>
              </div>
              <div className={styles.rectangleParent18}>
                <div className={styles.frameChild18} />
                <div className={styles.kqdcv}>KQDCV</div>
              </div>
            </div>
            <div className={styles.rectangleParent19}>
              <div className={styles.frameChild19} />
              <div className={styles.div4}>2</div>
            </div>
            <div className={styles.rectangleParent20}>
              <div className={styles.frameChild20} />
              <div className={styles.sfas}>SFAS</div>
            </div>
            <div className={styles.rectangleParent21}>
              <div className={styles.frameChild21} />
              <div className={styles.kdsdesa}>KDSDESA</div>
            </div>
            <div className={styles.rectangleParent22}>
              <div className={styles.frameChild22} />
              <div className={styles.msd}>MSD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorIntegration;
