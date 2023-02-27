import styles from "./style/footer.module.css"
import React from 'react';
import {ReactComponent as FaceBook} from "../../icons/facebook.svg"
import {ReactComponent as Instagram} from "../../icons/instagram.svg"
import {ReactComponent as Whatsapp} from "../../icons/whatsapp.svg"

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

