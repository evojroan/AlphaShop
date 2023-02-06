import styles from "./style/checkout_cssstyle.module.css"
import StepProgress from './stepProgress.js';
import {RegisterProgress1} from './registerProgress.js';
import {RegisterProgress2} from './registerProgress.js';
import {RegisterProgress3} from './registerProgress.js';
import ProgressControl from './progressControl.js';


export default function Checkout(){
  return(
    <div className={styles.allProgress}>
      <StepProgress/>
      <RegisterProgress1/>
      <RegisterProgress2/>
      <RegisterProgress3/>
      <ProgressControl/>
    </div>
    )
}


