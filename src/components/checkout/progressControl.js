import styles from "./style/checkout_cssstyle.module.css"
import React from 'react';
import * as rightArrowSvg from "../../icons/right-arrow.svg"
import * as leftArrowSvg from "../../icons/left-arrow.svg"


function NextButton(){
  return(<button className={styles.NextButton}>
    下一步 <rightArrowSvg.ReactComponent/>
       </button>)
}

function PreviousButton(){
   return(<button className={styles.PreviousButton}>
    <leftArrowSvg.ReactComponent/> 上一步
    </button>)
}

function OrderButton(){
  return(<button className={styles.OrderButton}>
    確認下單
    </button>)
}

function ButtonAddress(){
  return(
    <div className={styles.ButtonAddress}>
    <NextButton/>
    </div>
  )
}

function ButtonShipping(){
   return(
    <div className={styles.ButtonShipping}>
    <PreviousButton/>
    <NextButton/>
    </div>
  )
}

function ButtonCreditCard(){
   return(
    <div className={styles.ButtonCreditCard}>
      <PreviousButton/>
      <OrderButton/>
    </div>
  )
}

export default function ProgressControl(){
  return(
    <div className={styles.ProgressControl}>
      <div><ButtonAddress/></div>
      <div><ButtonShipping/></div>
      <div><ButtonCreditCard/></div>
    </div>
  )}