import styles from "./navbar.module.css"
import React from 'react';
import {ReactComponent as Search} from "../../assets/search.svg"
import {ReactComponent as Cart} from "../../assets/cart.svg"
import {ReactComponent as Moon} from "../../assets/moon.svg"
import {ReactComponent as Sun} from "../../assets/sun.svg"

function NavbarMenu() {
  return (
    <div className={styles.navBarMenu}>
    (WIP)男款 女款 最新消息 客製商品 聯絡我們 AlphaCamp <Search/> <Cart/> <Moon/> <Sun/>
    </div>
  );
}

export default NavbarMenu;

