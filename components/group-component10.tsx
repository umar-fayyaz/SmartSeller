import type { NextPage } from "next";
import MarketplaceIcons from "./marketplace-icons";
import styles from "./group-component10.module.css";

export type GroupComponent10Type = {
  className?: string;
};

const GroupComponent10: NextPage<GroupComponent10Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <b className={styles.sr}>Sr.</b>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.sr1}>Sr.</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <b className={styles.sr2}>Sr.</b>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild1} />
          <div className={styles.sr3}>Sr.</div>
        </div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.frameChild2} />
        <b className={styles.sr4}>Sr.</b>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameChild3} />
          <div className={styles.sr5}>Sr.</div>
        </div>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.frameChild4} />
        <b className={styles.sr6}>Sr.</b>
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild5} />
          <div className={styles.sr7}>Sr.</div>
        </div>
      </div>
      <div className={styles.sellerIntegratedAccountsParent}>
        <h1 className={styles.sellerIntegratedAccounts}>
          Seller Integrated Accounts
        </h1>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <b className={styles.amazon}>Amazon</b>
            </div>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild7} />
              <b className={styles.ebay}>Ebay</b>
            </div>
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild8} />
              <b className={styles.shopify}>Shopify</b>
            </div>
            <div className={styles.rectangleParent9}>
              <div className={styles.frameChild9} />
              <b className={styles.sr8}>Sr.</b>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.frameChild10} />
              <b className={styles.sr9}>Sr.</b>
            </div>
            <div className={styles.rectangleParent11}>
              <div className={styles.frameChild11} />
              <b className={styles.sr10}>Sr.</b>
            </div>
          </div>
          <div className={styles.rectangleParent12}>
            <div className={styles.frameChild12} />
            <div className={styles.headerAccount}>1</div>
          </div>
          <div className={styles.rectangleParent13}>
            <div className={styles.frameChild13} />
            <div className={styles.sr11}>Sr.</div>
          </div>
          <div className={styles.rectangleParent14}>
            <div className={styles.frameChild14} />
            <div className={styles.sr12}>Sr.</div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleParent15}>
          <div className={styles.frameChild15} />
          <div className={styles.emptyHeader}>2</div>
        </div>
        <div className={styles.innerAccountDetailsParent}>
          <div className={styles.innerAccountDetails}>
            <div className={styles.rectangleParent16}>
              <div className={styles.frameChild16} />
              <div className={styles.sr13}>Sr.</div>
            </div>
            <div className={styles.rectangleParent17}>
              <div className={styles.frameChild17} />
              <div className={styles.sr14}>Sr.</div>
            </div>
          </div>
          <div className={styles.rectangleParent18}>
            <div className={styles.frameChild18} />
            <div className={styles.sr15}>Sr.</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.rectangleParent19}>
              <div className={styles.frameChild19} />
              <div className={styles.sr16}>Sr.</div>
            </div>
            <div className={styles.rectangleParent20}>
              <div className={styles.frameChild20} />
              <div className={styles.sr17}>Sr.</div>
            </div>
          </div>
          <div className={styles.rectangleParent21}>
            <div className={styles.frameChild21} />
            <div className={styles.sr18}>Sr.</div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent22}>
        <div className={styles.frameChild22} />
        <div className={styles.addSellerButton}>
          <h1 className={styles.addSeller}>Add Seller</h1>
        </div>
        <div className={styles.platformButtons}>
          <div className={styles.platformIcons}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-3@2x.png"
            />
            <div className={styles.rectangleParent23}>
              <div className={styles.frameChild23} />
              <div className={styles.amazonIcon}>
                <img
                  className={styles.maskGroupIcon1}
                  loading="lazy"
                  alt=""
                  src="/mask-group-4@2x.png"
                />
              </div>
              <b className={styles.amazon1}>Amazon</b>
            </div>
            <MarketplaceIcons maskGroup="/mask-group-5@2x.png" ebay="Ebay" />
            <MarketplaceIcons maskGroup="/mask-group-6@2x.png" ebay="Shopify" />
          </div>
          <div className={styles.loginForm}>
            <div className={styles.loginFormContainer}>
              <div className={styles.welcomeBackWrapper}>
                <h1 className={styles.welcomeBack}>Welcome Back!</h1>
              </div>
              <div className={styles.loginFormFields}>
                <div className={styles.inputFields}>
                  <b className={styles.usernameOrEmail}>username or Email*</b>
                </div>
                <div className={styles.usernameInput}>
                  <div className={styles.usernameInputChild} />
                </div>
                <div className={styles.inputFields1}>
                  <b className={styles.password}>Password*</b>
                </div>
                <div className={styles.loginFormFieldsChild} />
                <div className={styles.forgotYourPasswordWrapper}>
                  <div className={styles.forgotYourPassword}>
                    forgot your password?
                  </div>
                </div>
                <div className={styles.rectangleParent24}>
                  <div className={styles.frameChild24} />
                  <b className={styles.login}>LOGIN</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent10;
