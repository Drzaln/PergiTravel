import React from 'react'
import styles from './Body.module.scss'
import Jalur from "./Jalur";
import Tanggal from "./Tanggal";

export default function Body () {
  return (
    <div className={styles.body}>
      <div className={styles.pilih}>
        <p className={styles.kepilih} >Sekali Jalan</p>
        <p className={styles.non} >Pulang Pergi</p>
      </div>
      <Jalur/>
      <Tanggal/>
    </div>
  )
}
