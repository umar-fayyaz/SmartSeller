import type { NextPage } from "next";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";
import GroupComponent5 from "../components/group-component5";
import GroupComponent4 from "../components/group-component4";
import QuantityROI from "../components/quantity-r-o-i";
import styles from "./choose-the-item.module.css";

const ChooseTheItem: NextPage = () => {
  return (
    <div className={styles.chooseTheItem}>
      <GroupComponent3 rectangleDivTop="unset" rectangleDivPosition="unset" />
      <div className={styles.background} />
      <footer className={styles.sidebar}>
        <GroupComponent2
          propMargin="0 !important"
          propPosition="absolute"
          propHeight="100%"
          propTop="0px"
          propBottom="0px"
          propLeft="0px"
        />
        <section className={styles.content}>
          <GroupComponent5 />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.fileStatus}>
              <div className={styles.fileName}>File Name</div>
            </div>
            <div className={styles.frameItem} />
            <div className={styles.noFileSelectedWrapper}>
              <div className={styles.noFileSelected}>No File Selected</div>
            </div>
          </div>
          <GroupComponent4 />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <b className={styles.brandNewFrontLower}>
                Brand New-Front Lower Bumper Deflector-For 1998-2004 Chevrolet
                S10 Pickup
              </b>
              <div className={styles.productTitleIcon}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
            <div className={styles.productSettings}>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild1} />
                <div className={styles.sourceShipping}>
                  <div className={styles.autoOrder}>
                    <div className={styles.kitFee}>
                      <div className={styles.feeIcon}>
                        <div className={styles.feeIconChild} />
                        <div className={styles.feeIconItem} />
                      </div>
                      <div className={styles.orderTypes}>
                        <div className={styles.single}>Single</div>
                      </div>
                    </div>
                    <div className={styles.kitPlatformFee}>
                      <div className={styles.kitPlatformFeeChild} />
                      <div className={styles.kitPlatformFeeLabel}>
                        <div className={styles.kit}>Kit</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.feeElements}>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild2} />
                      <img
                        className={styles.orderIcon}
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className={styles.taxesLabel}>
                      <div className={styles.autoOrder1}>Auto order</div>
                    </div>
                  </div>
                </div>
                <div className={styles.defaultQuantity}>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild3} />
                    <div className={styles.selectSource}>Select Source*</div>
                  </div>
                  <div className={styles.rectangleParent3}>
                    <div className={styles.frameChild4} />
                    <img
                      className={styles.layer5Icon}
                      alt=""
                      src="/layer-5.svg"
                    />
                    <b className={styles.selectProducts}>Select Products</b>
                  </div>
                </div>
                <div className={styles.quantityElements}>
                  <QuantityROI />
                  <div className={styles.productSelectionDuplicate}>
                    <b className={styles.totalCost100Container}>
                      <p className={styles.totalCost100}>
                        Total Cost: $100 | Available Quantity:20 | List
                        Quantity: 100
                      </p>
                      <p
                        className={styles.price150}
                      >{`Price: $150 | Business Price: $149 | Min Price:$140 | Max Price: $140 `}</p>
                    </b>
                    <div className={styles.productContainerDuplicate}>
                      <div className={styles.rectangleParent4}>
                        <div className={styles.frameChild5} />
                        <div className={styles.selectSource1}>
                          Select Source*
                        </div>
                      </div>
                      <div className={styles.rectangleParent5}>
                        <div className={styles.frameChild6} />
                        <img
                          className={styles.layer5Icon1}
                          alt=""
                          src="/layer-5-1.svg"
                        />
                        <b className={styles.selectProducts1}>
                          Select Products
                        </b>
                      </div>
                    </div>
                  </div>
                  <QuantityROI />
                  <b className={styles.totalCost50Container}>
                    <p className={styles.totalCost50}>
                      Total Cost: $50 | Available Quantity:5 | List Quantity: 0
                    </p>
                    <p
                      className={styles.price75}
                    >{`Price: $75 | Business Price: $74 | Min Price:$65 | Max Price: $120 `}</p>
                  </b>
                </div>
                <div className={styles.rOIConfiguration}>
                  <div className={styles.rectangleParent6}>
                    <div className={styles.frameChild7} />
                    <img
                      className={styles.rOIButtonIcon}
                      alt=""
                      src="/vector-9.svg"
                    />
                    <b className={styles.updateSettings}>Update Settings</b>
                  </div>
                  <div className={styles.rectangleParent7}>
                    <div className={styles.frameChild8} />
                    <img
                      className={styles.layer5Icon2}
                      alt=""
                      src="/layer-5-1.svg"
                    />
                    <b className={styles.updateSettings1}>Update Settings</b>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent8}>
                <div className={styles.frameChild9} />
                <div className={styles.frameParent}>
                  <div className={styles.rectangleParent9}>
                    <div className={styles.frameChild10} />
                    <div className={styles.platformFee}>Platform Fee</div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                  <div className={styles.rectangleParent10}>
                    <div className={styles.frameChild11} />
                    <img
                      className={styles.moneyCoinCoinsDollarMo}
                      loading="lazy"
                      alt=""
                      src="/12--money-coin-coins-dollar-moneys.svg"
                    />
                    <div className={styles.taxesWrapper}>
                      <div className={styles.taxes}>Taxes</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.rectangleParent11}>
                    <div className={styles.frameChild12} />
                    <img
                      className={styles.moneyCoinCoinsDollarMo1}
                      alt=""
                      src="/12--money-coin-coins-dollar-moneys.svg"
                    />
                    <div className={styles.shippingLabel}>
                      <div className={styles.shipping}>Shipping</div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent12}>
                    <div className={styles.frameChild13} />
                    <img
                      className={styles.moneyCoinCoinsDollarMo2}
                      alt=""
                      src="/12--money-coin-coins-dollar-moneys.svg"
                    />
                    <div className={styles.otherExpenseWrapper}>
                      <div className={styles.otherExpense}>Other Expense</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleParent13}>
                    <div className={styles.frameChild14} />
                    <img
                      className={styles.counter1Icon}
                      alt=""
                      src="/counter-1@2x.png"
                    />
                    <div className={styles.defaultQuantityWrapper}>
                      <div className={styles.defaultQuantity1}>
                        Default Quantity
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent14}>
                    <div className={styles.frameChild15} />
                    <div className={styles.minimumRoi}>Minimum ROI</div>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                </div>
                <div className={styles.rectangleParent15}>
                  <div className={styles.frameChild16} />
                  <div className={styles.roi}>ROI</div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
                <div className={styles.buyBox}>
                  <div className={styles.buyBoxSettings}>
                    <div className={styles.chaseBuyBox}>
                      <div className={styles.chaseBuyBoxValue}>
                        <div className={styles.rectangleParent16}>
                          <div className={styles.frameChild17} />
                          <img
                            className={styles.buyBoxImage}
                            alt=""
                            src="/vector-4.svg"
                          />
                        </div>
                        <div className={styles.chaseBuyBoxLabel}>
                          <div className={styles.chaseBuyBox1}>
                            Chase Buy box
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.rectangleParent17}>
                      <div className={styles.frameChild18} />
                      <div className={styles.buyBoxAmountInput}>
                        <div className={styles.amountToStay}>
                          Amount to stay below buy box price
                        </div>
                      </div>
                      <img
                        className={styles.moneyCoinCoinsDollarMo3}
                        alt=""
                        src="/12--money-coin-coins-dollar-moneys.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.rectangleParent18}>
                    <div className={styles.frameChild19} />
                    <div className={styles.competitor1}>Competitor 1</div>
                  </div>
                  <div className={styles.rectangleParent19}>
                    <div className={styles.frameChild20} />
                    <div className={styles.competitor2}>Competitor 2</div>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.rectangleParent20}>
                    <div className={styles.frameChild21} />
                    <div className={styles.competitor3}>Competitor 3</div>
                  </div>
                  <div className={styles.rectangleParent21}>
                    <div className={styles.frameChild22} />
                    <div className={styles.amountToStay1}>
                      Amount to stay below Competitor Price
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.rectangleParent22}>
                    <div className={styles.frameChild23} />
                    <div className={styles.profitPrecentage}>
                      Profit Precentage
                    </div>
                    <img
                      className={styles.profitPercentageIcon}
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                  <div className={styles.rectangleParent23}>
                    <div className={styles.frameChild24} />
                    <div className={styles.expfeePercentage}>
                      EXP/FEE Percentage
                    </div>
                    <div className={styles.eXPFEEPercentageInput}>
                      <img
                        className={styles.eXPFEEPercentageIcon}
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default ChooseTheItem;
