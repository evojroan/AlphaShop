import styles from "./style/cart.module.css"
import React from 'react';
import { useState } from 'react';
import {ReactComponent as Plus} from "../../icons/plus.svg"
import {ReactComponent as Minus} from "../../icons/minus.svg"

export default function Cart() {
let initialstate=[
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 200,
    quantity: 0,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 150,
    quantity: 0,
  },
]

const [kittylist,setKittyList]= useState(initialstate)

const totalPrice = kittylist.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // function itemAdd(index){
  //   const nextKittyList = [...kittylist];
  //   nextKittyList[index].quantity += 1;
  //   setKittyList(nextKittyList);
  // } 
  //本寫法是 AI 寫的

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
//這個函式的程式碼比照官方手冊類似題型(https://tinyurl.com/2nfth9ya)並最後由 AI 修正完成

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
          <h3 className={styles.cartTitle}>購物籃</h3>
          <section className={styles.productList}>
          {kittylist.map((item,index)=>(
            
            <div className={styles.productContainer}>
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
            <div className={styles.price}>${item.price}</div>
            </div>
          ))}

          </section>
                
          <section className={styles.cartInfo}>
            <div className={styles.text}>運費</div>
            <div className={styles.freight}>免費</div>
          </section>

          <section className={styles.cartInfo}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>${totalPrice}</div>
          </section>
        </section>

  );
}