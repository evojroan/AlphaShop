import styles from "./style/checkout_cssstyle.module.css"

function Citiesmap(){
  const cities=['請選擇縣市', '基隆市','新北市','臺北市','桃園市', '新竹縣','新竹市','苗栗市','苗栗縣','臺中市','彰化縣','彰化市','南投市','南投縣','雲林縣','嘉義縣','嘉義市','臺南市','高雄市','屏東縣','屏東市','宜蘭,','宜蘭市','花蓮縣','花蓮市','臺東市','臺東縣','澎湖縣','金門縣','連江縣']

  const citiesvalue=["","KLU","TPH","TPE","TYC","HSH","HSC","MAC","MAL","TXG","CWH","CWS","NTC","NTO","YLH","CHY","CYI","TNN","KHH","IUH","PTS","ILN","ILC","HWA","HWC","TTC","TT,","PEH","KMN","LNN"]

  const Allmap =cities.map((city, index) => {return (<option value="${citiesvalue[index]}"> {city}</option>)})
   
   return (
    <select>
      {Allmap}
    </select>
      );
  
}

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
       <Citiesmap/>
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
