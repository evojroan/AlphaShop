import styles from "./style/checkout_cssstyle.module.css"

export function RegisterProgress1(){
  return(
    
    <div className={styles.registerprogress1}>
      <h3 className={styles.formTitle}>寄送地址</h3>
    <section className={styles.formBody1}>
     <div className={styles.line1}>
      <div className={styles.inputLabel}>稱謂</div>
      <select>
      <option value="mr" selected>先生</option>
      <option value="ms">女士</option>
      <option value="mx">不明</option>
      </select>
      </div>

     <div className={styles.line2}>
      <div className={styles.inputLabel}>姓名</div>
      <input type="text" placeholder="請輸入姓名" className={styles.adjustinput}></input>
     </div>

     <div className={styles.line3}>
      <div className={styles.inputLabel}>電話</div>
      <input type="text" placeholder="請輸入行動電話"></input>
     </div>

     <div className={styles.line4}>
      <div className={styles.inputLabel}>Email</div>
      <input type="text" placeholder="請輸入電子郵件" className={styles.adjustinput}></input>
       </div>

     <div className={styles.line5}>
      <div className={styles.inputLabel}>縣市</div>
      <select required>
        <option value="">請選擇縣市</option>
        <option value="KLU">基隆市</option>
        <option value="TPH">新北市</option>
        <option value="TPE">臺北市</option>
        <option value="TYC">桃園市</option>
        <option value="HSH">新竹縣</option>
        <option value="HSC">新竹市</option>
        <option value="MAC">苗栗市</option>
        <option value="MAL">苗栗縣</option>
        <option value="TXG">臺中市</option>
        <option value="CWH">彰化縣</option>
        <option value="CWS">彰化市</option>
        <option value="NTC">南投市</option>
        <option value="NTO">南投縣</option>
        <option value="YLH">雲林縣</option>
        <option value="CHY">嘉義縣</option>
        <option value="CYI">嘉義市</option>
        <option value="TNN">臺南市</option>
        <option value="KHH">高雄市</option>
        <option value="IUH">屏東縣</option>
        <option value="PTS">屏東市</option>
        <option value="ILN">宜蘭縣</option>
        <option value="ILC">宜蘭市</option>
        <option value="HWA">花蓮縣</option>
        <option value="HWC">花蓮市</option>
        <option value="TTC">臺東市</option>
        <option value="TTT">臺東縣</option>
        <option value="PEH">澎湖縣</option>
        <option value="KMN">金門縣</option>
        <option value="LNN">連江縣</option>
        </select>
     </div>
     <div className={styles.line6}>
      <div className={styles.inputLabel}>地址</div>
      <input type="text" placeholder="請輸入地址" className={styles.adjustinput}></input>
     </div>
    </section>
    </div>
  )
}

export function RegisterProgress2(){
  return(
     <div className={styles.registerprogress2}>
       <h3 className={styles.formTitle}>寄送方式</h3>
       <section className={styles.formBody2}>
        <div className={styles.option1}>
        <input type="radio" className={styles.radio}></input>
        <span>
          <h4>標準運送</h4>
          約 3 - 7 個工作天
          </span>
        <p className={styles.freight}>免費</p>

      </div>
      <div className={styles.option2}>
        <input type="radio" className={styles.radio}></input>
        <span>
          <h4>DHL</h4>
          48 小時內送達
          </span>
        <p className={styles.freight}>＄500</p>

      </div></section>
      
    </div>
  )
}

export function RegisterProgress3(){
  return(
    <div className={styles.registerprogress3}>
       <h3 className={styles.formTitle}>付款資訊</h3>
              <section className={styles.formBody3}>
                <div className={styles.line7}>
                 <div className={styles.inputLabel}>持卡人姓名</div>
                 <input type="text" placeholder="John Doe" />
                </div>
                <div className={styles.line8}>
                  <div className={styles.inputLabel}>卡號</div>
                  <input type="text" placeholder="1111 2222 3333 4444" />
                </div>
                <div className={styles.line9}>
                    <div className={styles.inputLabel}>有效期限</div>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className={styles.line10}>
                    <div className={styles.inputLabel}>CVC / CCV</div>
                    <input type="text" placeholder="123" />
                 
                </div>
              </section>
    </div>
  )
}
