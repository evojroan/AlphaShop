import styles from "./style/checkout_cssstyle.module.css"
import { useState } from 'react';
import { useContext } from 'react';
import { MyShopContext } from '../../context/shopContext.jsx';

function Citiesmap(){
const citieslist = [
{id:0,
name:'請選擇縣市',
value:""},
{id:1,
name:'基隆市',
value:"KLU"},
{id:2,
name: '新北市',
value:"TPH"},
{id:3,
name:'臺北市',
value:"TPE"},
{id:4,
name:'桃園市',
value:"TYC"},
{id:5,
name:'新竹縣',
value:"HSH"},
{id:6,
name:'新竹市',
value:"HSC"},
{id:7,
name: '苗栗市',
value:"MAC"},
{id:8,
name:'苗栗縣',
value:"MAL"},
{id:9,
name:'臺中市',
value:"TXG"},
{id:10,
name:'彰化縣',
value:"CWH"},
{id:11,
name:'彰化市',
value:"CWS"},
{id:12,
name:'南投市',
value:"NTC"},
{id:13,
name:'南投縣',
value:"NTO"},
{id:14,
name:'雲林縣',
value:"YLH"},
{id:15,
name:'嘉義縣',
value:"CHY"},
{id:16,
name:'嘉義市',
value:"CYI"},
{id:17,
name:'臺南市',
value:"TNN"},
{id:18,
name:'高雄市',
value:"KHH"},
{id:19,
name:'屏東縣',
value:"IUH"},
{id:20,
name:'屏東市',
value:"PTS"},
{id:21,
name:'宜蘭縣',
value:"ILN"},
{id:22,
name:'宜蘭市',
value:"ILC"},
{id:23,
name:'花蓮縣',
value:"HWA"},
{id:24,
name:'花蓮市',
value:"HWC"},
{id:25,
name:'臺東市',
value:"TTC"},
{id:26,
name:'臺東縣',
value:"TT"},
{id:27,
name:'澎湖縣',
value:"PEH"},
{id:28,
name:'金門縣',
value:"KMN"},
{id:29,
name:'連江縣',
value:"LNN"}
]


  const Allmap =citieslist.map(city => (<option key={city.id} code={city.value}>{city.name}</option>))
  return (
    <select id="client_city">
      {Allmap}
    </select>
      );
  }

export function RegisterProgress1({step}){
  return(
  <>
      {step===0 &&
      <div className={styles.registerprogress1}><h3 className={styles.formTitle}>寄送地址</h3>
    <section className={styles.formBody1}>
    <div className={styles.line1}>
      <div className={styles.inputLabel}>稱謂</div>
      <select id="client_title">
      <option value="mr">先生</option>
      <option value="ms">女士</option>
      <option value="mx">不明</option>
      </select>
      </div>

    <div className={styles.line2}>
      <div className={styles.inputLabel}>姓名</div>
      <input id="client_name" type="text" placeholder="請輸入姓名" className={styles.adjustinput}></input>
    </div>

    <div className={styles.line3}>
      <div className={styles.inputLabel}>電話</div>
      <input id="client_mobile" type="text" placeholder="請輸入行動電話"></input>
    </div>

    <div className={styles.line4}>
      <div className={styles.inputLabel}>Email</div>
      <input id="client_email" type="text" placeholder="請輸入電子郵件" className={styles.adjustinput}></input>
      </div>

    <div className={styles.line5}>
      <div className={styles.inputLabel}>縣市</div>
      <Citiesmap/>
      </div>
    <div className={styles.line6}>
      <div className={styles.inputLabel}>地址</div>
      <input type="text" placeholder="請輸入地址" className={styles.adjustinput}></input>
    </div>
    </section></div>}
          
    </>
  )
}

export function RegisterProgress2({step}){
  return(
    <>{step===1 &&  <div className={styles.registerprogress2}>
      <h3 className={styles.formTitle}>寄送方式</h3>
      <section className={styles.formBody2}>
        <div className={styles.option1}>
        <input id="freight" type="radio" className={styles.radio}></input>
        <span>
          <h4>標準運送</h4>
          約 3 - 7 個工作天
          </span>
        <p className={styles.freight}>免費</p>

      </div>
      <div className={styles.option2}>
        <input id="freight" type="radio" className={styles.radio}></input>
        <span>
          <h4>DHL</h4>
          48 小時內送達
          </span>
        <p className={styles.freight}>＄500</p>
      </div>
      </section>
    </div> }</>
  )
}

export function RegisterProgress3({step}){
const {handleInputChange} = useContext(MyShopContext)
  return(
  <>{step===2 && <div className={styles.registerprogress3}>
      <h3 className={styles.formTitle}>付款資訊</h3>
              <section className={styles.formBody3}>
                <div className={styles.line7}>
                <div className={styles.inputLabel}>持卡人姓名</div>
                <input type="text" placeholder="John Doe" id="card_holder_name"onChange ={handleInputChange}/>
                </div>
                <div className={styles.line8}>
                  <div className={styles.inputLabel}>卡號</div>
                  <input type="text" placeholder="1111 2222 3333 4444" id="card_number"onChange ={handleInputChange}/>
                </div>
                <div className={styles.line9}>
                    <div className={styles.inputLabel}>有效期限</div>
                    <input type="text" placeholder="MM/YY" id="card_"onChange ={handleInputChange}/>
                  </div>
                  <div className={styles.line10}>
                    <div className={styles.inputLabel}>CVC / CCV</div>
                    <input type="text" placeholder="123" id="card_cvc" onChange ={handleInputChange}/>
                  </div>
                </section>
    </div>}</>
  )
}
