import React from 'react'
import styles from './Body.module.scss'
import Jalur from "./Jalur";
import Tanggal from "./Tanggal";
import Button from "./Button";

export default function Body () {
  return (
    <div className={styles.body}>
      <div className={styles.pilih}>
        <p className={styles.kepilih} >Sekali Jalan</p>
        <p className={styles.non} >Pulang Pergi</p>
      </div>
      <Jalur/>
      <Tanggal/>
      <Button to='/ticket-list' title='Cari Tiket Pesawat' />
    </div>
  )
}
