import styles from "./style/cart.module.css"
import React from 'react';
import {ReactComponent as Plus} from "../../icons/plus.svg"
import {ReactComponent as Minus} from "../../icons/minus.svg"

function Cart() {
  return (
    <div className={styles.cart}>
    <h1>Cart(WIP)</h1>
    <Plus/>
    <Minus/>
    </div>
  );
}

export default Cart;

