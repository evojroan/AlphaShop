import React from "react";
import styles from "./cart.module.css";
import { useContext } from "react";
import { cartContext, myShopContext } from "context/cartContext.jsx";
import { useState } from "react";
import { ReactComponent as Plus } from "assets/plus.svg";
import { ReactComponent as Minus } from "assets/minus.svg";

export default function Cart() {
  const cartData = useContext(cartContext);

  const [kittylist, setKittyList] = useState(cartData);

  const totalPrice = kittylist.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  ////////////// 函式：購物車增加商品數量 //////////////
  function addItem(index) {
    const nextKittyList = kittylist.map((c, i) => {
      if (i === index) {
        return { ...c, quantity: c.quantity + 1 };
      } else {
        return c;
      }
    });
    setKittyList(nextKittyList);
  }

  ////////////// 函式：購物車減少商品數量 //////////////
  function removeItem(index) {
    const nextKittyList = [...kittylist];
    if (nextKittyList[index].quantity >= 1) {
      nextKittyList[index].quantity -= 1;
    } else {
      nextKittyList[index].quantity = 0;
    }
    setKittyList(nextKittyList);
  }

  ////////////// 函式：回報消費總金額 //////////////
  const shopContext = useContext(myShopContext);
  function totalPriceReport(event) {
    shopContext.handleInputChange({
      target: { id: "totalPrice", value: totalPrice },
    });
  }

  function onClickHandler(event, index) {
    if (event.currentTarget.id === "minus") {
      removeItem(index);
    } else {
      addItem(index);
    }
    totalPriceReport();
    console.log(totalPrice);
  }

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList}>
        {kittylist.map((item, index) => (
          <div className={styles.productContainer} key={item.id}>
            <div className={styles.imageContainer}>
              <img src={item.img} alt={item.name} />
            </div>
            <div className={styles.productInfo}>
              <h4 className={styles.productName}>{item.name}</h4>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                  <div
                    id="minus"
                    className={styles.icon}
                    onClick={(event) => {
                      onClickHandler(event, index);
                    }}
                  >
                    <Minus />
                  </div>
                  <span className={styles.productCount}>{item.quantity}</span>
                  <Plus
                    className={styles.icon}
                    onClick={(event) => {
                      onClickHandler(event, index);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.price}>
              ${new Intl.NumberFormat().format(item.price)}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.freight}>免費</div>
      </section>

      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>
          ${new Intl.NumberFormat().format(totalPrice)}
        </div>
      </section>
    </section>
  );
}
