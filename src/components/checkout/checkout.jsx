import styles from "./style/checkout_cssstyle.module.css"
import StepProgress from './stepProgress.jsx';
import {RegisterProgress1} from './registerProgress.jsx';
import {RegisterProgress2} from './registerProgress.jsx';
import {RegisterProgress3} from './registerProgress.jsx';
import ProgressControl from './progressControl.jsx';
import { useState } from 'react';

export default function Checkout(){

/////////////////////////// 設置 State ///////////////////////////
const[step,setStep]=useState(0)

function clickNextStep(){
  setStep(prev=>prev +1)
}

function clickPreviousStep(){
  setStep(prev=>prev -1)
}

  return(
    <div className={styles.allProgress}>
      <StepProgress step={step}/>
    <div className={styles.allRegisterProgress}>
      <RegisterProgress1 step={step}/>
      <RegisterProgress2 step={step}/>
      <RegisterProgress3 step={step}/>
      </div>
      <ProgressControl clickNextStep ={clickNextStep} clickPreviousStep ={clickPreviousStep} step={step}/>
    </div>

    )
}


