import styles from "./checkout_cssstyle.module.css"
import React from 'react';
import {ReactComponent as PGComplete} from "assets/pg-complete.svg"




export default function StepProgress({step}){
  return(
    <div className={styles.registerContainer}>
    <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
            <span className={styles.progressGroup} data-phase="address">
              {step===0? <span className={styles.numberIcon}>1</span>:""}
              {step>0? <span className={styles.progressIcon}><PGComplete/></span>:""}
              <span className={styles.progressLabel}>寄送地址</span>
              
            </span>

            <span className={styles.progressBar} data-order="1"></span>

            <span className={styles.progressGroup} data-phase="shipping">
              {step<2? <span className={styles.numberIcon}>2</span>:""}
              {step>1? <span className={styles.progressIcon}><PGComplete/></span>:""}
              <span className={styles.progressLabel}>運送方式</span>
              
            </span>

            <span className={styles.progressBar} data-order="2"></span>
            
            <span className={styles.progressGroup} data-phase="credit-card">
              {step>=0? <span className={styles.numberIcon}>3</span>:""}
              {step>2? <span className={styles.progressIcon}><PGComplete/></span>:""}
              <span className={styles.progressLabel}>付款資訊</span>
            </span>

          

      </section>
    </div>
  )
}


