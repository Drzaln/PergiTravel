import React from 'react'
import styles from './Tanggal.module.scss'

export default function Tanggal () {
  return (
    <div className={styles.choose}>
      <div className={styles.col}>
        <div className={styles.judul} >Tanggal</div>
        <div className={styles.isi} >30 Nov 2019</div>
      </div>
      <div className={styles.col}>
        <div className={styles.judul} >Penumpang</div>
        <div className={styles.isi} >Dewasa ( 1 )</div>
      </div>
    </div>
  )
}
