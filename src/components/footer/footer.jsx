import {ReactComponent as FaceBook} from "../../assets/facebook.svg"
import {ReactComponent as Instagram} from "../../assets/instagram.svg"
import {ReactComponent as Whatsapp} from "../../assets/whatsapp.svg"
import React from 'react';
import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
    <FaceBook/>
    <Instagram/>
    <Whatsapp/>
    Footer(WIP)<br/>
    Footer(WIP)<br/>
    Footer(WIP)<br/>
    </div>
  );
}

export default Footer;

