import React from 'react'
import styles from './Card.module.scss'
import { Link } from "react-router-dom";

export default function Card (props) {
  return (
    <div>
    <Link to='/' >
    <div className={styles.card}>
      <div className={styles.namaPesawat}>
        <img
          src={require('../Assets/namaPesawat.png')}
          alt='Nama-Pesawat'
          className={styles.gambar}
        />
        <text className={styles.namaPwt}>Citilink</text>
      </div>
      <div className={styles.keterangan}>
        <div className={styles.Bnd}>
          <div className={styles.namaBnd}>
            <text className={styles.nama}>{props.FromPwtShort}</text>
            <text className={styles.jam}>{props.FromClock}</text>
          </div>
          <text className={styles.kota}>{props.FromCity}</text>
          <p className={styles.bndFull}>{props.FromBnd}</p>
        </div>
        <div className={styles.waktu}>
          <text className={styles.estimate}>{props.estimate}</text>
          <p>{props.flight}</p>
        </div>
        <div className={styles.Bnd}>
          <div className={styles.namaBnd}>
            <text className={styles.nama}>{props.ToPwtShort}</text>
            <text className={styles.jam}>{props.ToClock}</text>
          </div>
          <text className={styles.kota}>{props.ToCity}</text>
          <p className={styles.bndFull}>{props.ToBnd}</p>
        </div>
      </div>
      <div className={styles.harga}>
        <div>
          <text className={styles.textnormal}>Normal</text>
          <p className={styles.hrgNormal}>Rp {props.hrgNormal}</p>
        </div>
        <div>
          <text className={styles.bank}>CC Bank Mega</text>
          <p className={styles.hrgBank}>{props.hrgBank}</p>
        </div>
      </div>
    </div>
    </Link>
    </div>
  )
}
