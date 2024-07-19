import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.carPartsParent}>
              <a className={styles.carParts}>Car Parts</a>
              <div className={styles.profitPercentageWrapper}>
                <a className={styles.profitPercentage}>Profit Percentage</a>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <input
                    className={styles.enterSkuFor}
                    placeholder="Enter SKU for multiple use comma ( , ) between"
                    type="text"
                  />
                </div>
                <div className={styles.sKUInput} />
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.frameParent2}>
                    <button className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <a className={styles.search}>Search</a>
                    </button>
                    <button className={styles.groupButton}>
                      <div className={styles.rectangleDiv} />
                      <b className={styles.uploadFile}>Upload File</b>
                    </button>
                  </div>
                </div>
                <div className={styles.profitPercentageParent}>
                  <b className={styles.profitPercentage1}>Profit Percentage</b>
                  <input className={styles.profitInput} type="text" />
                  <button className={styles.rectangleParent1}>
                    <div className={styles.frameChild1} />
                    <b className={styles.updateCost}>Update cost</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild2} />
              <div className={styles.fileNameWrapper}>
                <div className={styles.fileName}>File Name</div>
              </div>
              <div className={styles.fileSeparator} />
              <div className={styles.noFileSelectedWrapper}>
                <div className={styles.noFileSelected}>No File Selected</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild3} />
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild4} />
            <input className={styles.tableHeaderBackground} type="text" />
            <button className={styles.rectangleParent4}>
              <div className={styles.frameChild5} />
              <b className={styles.select}>Select</b>
            </button>
            <button className={styles.rectangleParent5}>
              <div className={styles.frameChild6} />
              <b className={styles.sku}>SKU</b>
            </button>
            <button className={styles.rectangleParent6}>
              <div className={styles.frameChild7} />
              <b className={styles.brand}>Brand</b>
            </button>
            <button className={styles.rectangleParent7}>
              <div className={styles.frameChild8} />
              <b className={styles.unitCost}>Unit Cost</b>
            </button>
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild9} />
              <b className={styles.maxAvailableStock}>Max Available Stock</b>
            </div>
            <button className={styles.rectangleParent9}>
              <div className={styles.frameChild10} />
              <b className={styles.smartSellerPrice}>Smart Seller Price</b>
            </button>
            <button className={styles.rectangleParent10}>
              <div className={styles.frameChild11} />
              <b className={styles.action}>Action</b>
            </button>
            <div className={styles.rectangleParent11}>
              <div className={styles.frameChild12} />
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.rectangleParent12}>
              <div className={styles.frameChild13} />
              <div className={styles.div1}>018</div>
            </div>
            <div className={styles.rectangleParent13}>
              <div className={styles.frameChild14} />
              <div className={styles.lenovo}>Lenovo</div>
            </div>
            <div className={styles.rectangleParent14}>
              <div className={styles.frameChild15} />
              <div className={styles.div2}>$962136</div>
            </div>
            <div className={styles.rectangleParent15}>
              <div className={styles.frameChild16} />
              <div className={styles.div3}>300</div>
            </div>
            <div className={styles.rectangleParent16}>
              <div className={styles.frameChild17} />
              <div className={styles.div4}>$9714176</div>
            </div>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-1000000983.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <header className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <a className={styles.carParts}>Car Parts</a>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <a className={styles.uploadFile}>Upload File</a>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <div className={styles.fileNameWrapper}>
                  <a className={styles.fileName}>File Name</a>
                </div>
                <div className={styles.fileSeparator} />
                <div className={styles.noFileSelectedWrapper}>
                  <a className={styles.noFileSelected}>No File Selected</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameParent1}>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <img
                className={styles.selectAllIcon}
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className={styles.selectAllWrapper}>
              <div className={styles.selectAll}>Select All</div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild2} />
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild3} />
                <b className={styles.select}>Select</b>
              </div>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild4} />
                <b className={styles.amazonSku}>Amazon SKU</b>
              </div>
              <div className={styles.rectangleParent4}>
                <div className={styles.frameChild5} />
                <b className={styles.carpartsSku}>Carparts SKU</b>
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.frameChild6} />
                <b className={styles.qty}>QTY</b>
              </div>
              <div className={styles.rectangleParent6}>
                <div className={styles.frameChild7} />
                <b className={styles.brand}>Brand</b>
              </div>
              <div className={styles.rectangleParent7}>
                <div className={styles.frameChild8} />
                <b className={styles.cost}>Cost</b>
              </div>
              <div className={styles.rectangleParent8}>
                <div className={styles.frameChild9} />
                <b className={styles.profit}>Profit %</b>
              </div>
              <div className={styles.rectangleParent9}>
                <div className={styles.frameChild10} />
                <b className={styles.expfee}>EXP/FEE %</b>
              </div>
              <div className={styles.rectangleParent10}>
                <div className={styles.frameChild11} />
                <b className={styles.sellPrice}>Sell Price</b>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.frameChild12} />
                <b className={styles.handlingFee}>Handling Fee</b>
              </div>
              <div className={styles.rectangleParent12}>
                <div className={styles.frameChild13} />
                <b className={styles.smartSellerPrice}>Smart Seller Price</b>
              </div>
              <div className={styles.rectangleParent13}>
                <div className={styles.frameChild14} />
                <b className={styles.action}>Action</b>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.rectangleParent14}>
                  <div className={styles.frameChild15} />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.rectangleParent15}>
                  <div className={styles.frameChild16} />
                  <div className={styles.div1}>018</div>
                </div>
                <div className={styles.rectangleParent16}>
                  <div className={styles.frameChild17} />
                  <div className={styles.div2}>300</div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.parent}>
                  <div className={styles.div3}>120</div>
                  <div className={styles.frameChild18} />
                </div>
                <div className={styles.lenovoParent}>
                  <div className={styles.lenovo}>Lenovo</div>
                  <div className={styles.frameChild19} />
                </div>
              </div>
              <div className={styles.group}>
                <div className={styles.div4}>$8623</div>
                <div className={styles.frameChild20} />
              </div>
              <div className={styles.container}>
                <div className={styles.div5}>534</div>
                <div className={styles.frameChild21} />
              </div>
              <div className={styles.costInputParent}>
                <div className={styles.costInput}>
                  <div className={styles.brandPlaceholder}>10</div>
                  <div className={styles.costInputChild} />
                </div>
                <div className={styles.costInput1}>
                  <div className={styles.brandInput}>$32723</div>
                  <div className={styles.costInputItem} />
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.costPlaceholderParent}>
                  <div className={styles.costPlaceholder}>$30</div>
                  <div className={styles.frameChild22} />
                </div>
                <div className={styles.costValue}>
                  <div className={styles.costValueChild} />
                  <div className={styles.profitInput}>$98727</div>
                </div>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-1000001080.svg"
                />
              </div>
            </div>
            <div className={styles.tableHeaderBackground} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
