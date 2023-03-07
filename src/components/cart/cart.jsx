import React from 'react';
import styles from "./style/cart.module.css"
import { useContext } from 'react';
// import { cartContext } from '../../context/shopContext.jsx'; 
// 若使用上面這行，locoalhost 畫面整片空白
import { cartContext } from '../../hello/shopContext.jsx';
import { useState } from 'react';
import {ReactComponent as Plus} from "../../icons/plus.svg"
import {ReactComponent as Minus} from "../../icons/minus.svg"

export default function Cart() {
const cartData = useContext(cartContext);

const [kittylist,setKittyList]= useState(cartData) //?

const totalPrice = kittylist.reduce((acc, item) => acc + item.price * item.quantity,0);

function itemAdd(index){
  const nextKittyList = kittylist.map((c,i)=>{
    if (i===index){
      return {...c, quantity: c.quantity+1}
    }else{
      return c
    }
  });
  setKittyList(nextKittyList);
}

function itemSubtract(index){
    const nextKittyList = [...kittylist];
    if(nextKittyList[index].quantity >=1){
      nextKittyList[index].quantity -= 1;
    }else{
      nextKittyList[index].quantity=0
    }
    setKittyList(nextKittyList);
  }

  return (
        <section className={styles.cartContainer}>
          <cartContext.Provider value={cartData}>
          
          <h3 className={styles.cartTitle}>購物籃</h3>
          <section className={styles.productList}>
          {kittylist.map((item,index)=>(
            
            <div className={styles.productContainer} key = {item.id}>
            <div className={styles.imageContainer}><img src={item.img} alt={item.name}/></div>
              <div className={styles.productInfo}>
                <h4 className={styles.productName}>{item.name}</h4>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                    <Minus className={styles.icon} onClick={()=>{itemSubtract(index)}} />
                    <span className={styles.productCount}>{item.quantity}</span>
                    <Plus className={styles.icon} onClick={()=>{itemAdd(index)}} />
                  </div>
                </div>
              </div>
            <div className={styles.price}>${new Intl.NumberFormat().format(item.price)}</div>
            </div>
          ))}

          </section>
                
          <section className={styles.cartInfo}>
            <div className={styles.text}>運費</div>
            <div className={styles.freight}>免費</div>
          </section>

          <section className={styles.cartInfo}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>${new Intl.NumberFormat().format(totalPrice)}</div>
          </section>
          
          </cartContext.Provider>
        </section>

  );
}