import styles from "./style/checkout_cssstyle.module.css"
import React from 'react';

import * as rightArrowSvg from "../../icons/right-arrow.svg"
import * as leftArrowSvg from "../../icons/left-arrow.svg"

export default function ProgressControl({step, clickNextStep, clickPreviousStep}){


////////////////////// 各階段設置按鈕 //////////////////////
function ButtonAddress({step, clickNextStep}){
  return(
<>{step==0 &&<div className={styles.ButtonAddress}>
    <button className={styles.NextButton} onClick={clickNextStep}>
    下一步 <rightArrowSvg.ReactComponent/>
    </button>
    </div>}</> 
    
  )
}

function ButtonShipping({step, clickNextStep, clickPreviousStep}){
  return(
    <>{step==1 &&<div className={styles.ButtonShipping}>
    <button className={styles.PreviousButton} onClick={clickPreviousStep}>
    <leftArrowSvg.ReactComponent/> 上一步
    </button>
    <button className={styles.NextButton} onClick={clickNextStep}>
    下一步 <rightArrowSvg.ReactComponent/>
      </button>
    </div>}</>
  )
}

function ButtonCreditCard({step, clickPreviousStep}){
  return(
    <>{step==2 &&<div className={styles.ButtonCreditCard}>
      <button className={styles.PreviousButton} onClick={clickPreviousStep}>
    <leftArrowSvg.ReactComponent/> 上一步
    </button>
      <button className={styles.OrderButton}>
    確認下單
    </button>
    </div>}</>
  )
}


////////////////////// 本元件結構  //////////////////////
  return(
    <div className={styles.ProgressControl}>
      <div><ButtonAddress step={step} clickNextStep={clickNextStep}/></div>
      <div><ButtonShipping step={step} clickPreviousStep={clickPreviousStep} clickNextStep={clickNextStep}/></div>
      <div><ButtonCreditCard step={step} clickPreviousStep={clickPreviousStep}/></div>
    </div>
  )} 