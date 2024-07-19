import type { NextPage } from "next";
import GroupComponent13 from "./group-component13";
import GroupComponent12 from "./group-component12";
import styles from "./integrated-platforms.module.css";

export type IntegratedPlatformsType = {
  className?: string;
};

const IntegratedPlatforms: NextPage<IntegratedPlatformsType> = ({
  className = "",
}) => {
  return (
    <form className={[styles.integratedPlatforms, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.sellerAccountIntegrationParent}>
          <h1 className={styles.sellerAccountIntegration}>
            Seller Account Integration
          </h1>
          <h3 className={styles.integratedOptions}>Integrated Options</h3>
        </div>
        <div className={styles.platformLogos}>
          <div className={styles.frameParent}>
            <GroupComponent13 maskGroup="/mask-group@2x.png" amazon="Amazon" />
            <GroupComponent12 />
            <GroupComponent13
              maskGroup="/mask-group-2@2x.png"
              amazon="Shopify"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-1000000949.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.integratedAccounts}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <h1 className={styles.sellerIntegratedAccounts}>
            Seller Integrated Accounts
          </h1>
          <div className={styles.tableHeaders}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <b className={styles.sr}>Sr.</b>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild1} />
              <div className={styles.sr1}>Sr.</div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild2} />
              <div className={styles.sr2}>Sr.</div>
            </div>
          </div>
          <div className={styles.tableHeaders1}>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild3} />
              <b className={styles.sr3}>Sr.</b>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild4} />
              <div className={styles.sr4}>Sr.</div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild5} />
              <div className={styles.sr5}>Sr.</div>
            </div>
          </div>
          <div className={styles.tableHeaders2}>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild6} />
              <b className={styles.sr6}>Sr.</b>
            </div>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild7} />
              <div className={styles.sr7}>Sr.</div>
            </div>
          </div>
          <div className={styles.tableHeaders3}>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild8} />
              <b className={styles.sr8}>Sr.</b>
            </div>
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild9} />
              <div className={styles.sr9}>Sr.</div>
            </div>
            <div className={styles.rectangleParent9}>
              <div className={styles.frameChild10} />
              <div className={styles.sr10}>Sr.</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleParent10}>
                <div className={styles.frameChild11} />
                <b className={styles.amazon}>Amazon</b>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.frameChild12} />
                <b className={styles.ebay}>Ebay</b>
              </div>
              <div className={styles.rectangleParent12}>
                <div className={styles.frameChild13} />
                <b className={styles.shopify}>Shopify</b>
              </div>
              <div className={styles.rectangleParent13}>
                <div className={styles.frameChild14} />
                <b className={styles.sr11}>Sr.</b>
              </div>
            </div>
            <div className={styles.rectangleParent14}>
              <div className={styles.frameChild15} />
              <b className={styles.sr12}>Sr.</b>
              <div className={styles.rectangleParent15}>
                <div className={styles.frameChild16} />
                <div className={styles.sr13}>Sr.</div>
              </div>
            </div>
            <div className={styles.rectangleParent16}>
              <div className={styles.frameChild17} />
              <b className={styles.sr14}>Sr.</b>
              <div className={styles.rectangleParent17}>
                <div className={styles.frameChild18} />
                <div className={styles.sr15}>Sr.</div>
              </div>
            </div>
            <div className={styles.rectangleParent18}>
              <div className={styles.frameChild19} />
              <div className={styles.accountFilter}>1</div>
            </div>
            <div className={styles.rectangleParent19}>
              <div className={styles.frameChild20} />
              <div className={styles.accountEntryPlaceholder}>2</div>
            </div>
            <div className={styles.rectangleParent20}>
              <div className={styles.frameChild21} />
              <div className={styles.sr16}>Sr.</div>
            </div>
            <div className={styles.rectangleParent21}>
              <div className={styles.frameChild22} />
              <div className={styles.sr17}>Sr.</div>
            </div>
            <div className={styles.rectangleParent22}>
              <div className={styles.frameChild23} />
              <div className={styles.sr18}>Sr.</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.addSellerParent}>
        <h1 className={styles.addSeller}>Add Seller</h1>
        <div className={styles.usernameInput}>
          <div className={styles.loginFields}>
            <div className={styles.usernameLabel}>
              <div className={styles.usernameInput1}>
                <div className={styles.welcomeBackWrapper}>
                  <h1 className={styles.welcomeBack}>Welcome Back!</h1>
                </div>
                <b className={styles.usernameOrEmail}>username or Email*</b>
              </div>
            </div>
            <div className={styles.forgotPasswordLink}>
              <b className={styles.password}>Password*</b>
            </div>
            <div className={styles.loginButton}>
              <div className={styles.loginActions}>
                <div className={styles.forgotYourPassword}>
                  forgot your password?
                </div>
              </div>
              <div className={styles.rectangleParent23}>
                <div className={styles.frameChild24} />
                <b className={styles.login}>LOGIN</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.loginFormBackground}>
          <div className={styles.wrapperRectangle1172}>
            <img
              className={styles.wrapperRectangle1172Child}
              alt=""
              src="/rectangle-1172.svg"
            />
          </div>
          <div className={styles.backgroundShapes} />
          <div className={styles.backgroundShapes1} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group-32@2x.png"
          />
        </div>
      </div>
    </form>
  );
};

export default IntegratedPlatforms;
