import styles from "./style/checkout_cssstyle.module.css"
import React from 'react';
import {ReactComponent as PGComplete} from "../../icons/pg-complete.svg"




export default function StepProgress(){
  return(
    <div className={styles.registerContainer}>
    <h2 className={styles.registerTitle}>結帳</h2>
     <section className={styles.progressContainer}>
            <span className="progress-group" data-phase="address">
              {/* <LeftArrow/><RightArrow/> */}
              <span className={styles.progressIcon}><PGComplete/></span>
              <span className={styles.progressLabel}>寄送地址</span>
            
            </span>

            <span className={styles.progressBar} data-order="1"></span>
            <></>
            
            <span className="progress-group" data-phase="shipping">
              <span className={styles.progressIcon}><PGComplete/></span>
              <span className={styles.progressLabel}>運送方式</span>
            </span>

            <span className={styles.progressBar} data-order="2"></span>
            
            <span className="progress-group" data-phase="credit-card">
              <span className={styles.progressIcon}><PGComplete/></span>
              <span className={styles.progressLabel}>付款資訊</span>
            </span>

          

          </section>
    </div>
  )
}


