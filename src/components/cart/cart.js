import styles from "./style/cart.module.css"
import React from 'react';
import {ReactComponent as Plus} from "../../icons/plus.svg"
import {ReactComponent as Minus} from "../../icons/minus.svg"


export default function Cart() {
const Kittylist= [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const totalPrice = Kittylist.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
        <section className={styles.cartContainer}>
          <h3 className={styles.cartTitle}>購物籃</h3>
          <section className={styles.productList}>
          {Kittylist.map((event)=>(
            
            <div className={styles.productContainer}>
            <div className={styles.imageContainer}><img src={event.img} alt={event.name}/></div>
              <div className={styles.productInfo}>
                <h4 className={styles.productName}>{event.name}</h4>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                    <Minus className={styles.icon}/>
                    <span className={styles.productCount}>{event.quantity}</span>
                    <Plus className={styles.icon}/>
                  </div>
                </div>
              </div>
            <div className={styles.price}>${event.price}</div>
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



