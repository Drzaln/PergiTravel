import React from 'react'
import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

export default function Card (props) {
  let nav = () => {
    localStorage.setItem('items', JSON.stringify(props.store))
  }

  return (
    <div>
      <Link to={props.to}>
        <div onClick={() => nav()} className={styles.card}>
          <div className={styles.namaPesawat}>
            <img
              src={require('../Assets/namaPesawat.png')}
              alt='Nama-Pesawat'
              className={styles.gambar}
            />
            <p className={styles.namaPwt}>Citilink</p>
          </div>
          <div className={styles.keterangan}>
            <div className={styles.Bnd}>
              <div className={styles.namaBnd}>
                <p className={styles.nama}>{props.FromPwtShort}</p>
                <p className={styles.jam}>{props.FromClock}</p>
              </div>
              <p className={styles.kota}>{props.FromCity}</p>
              <p className={styles.bndFull}>{props.FromBnd}</p>
            </div>
            <div className={styles.waktu}>
              <p className={styles.estimate}>{props.estimate}</p>
              <p>{props.flight}</p>
            </div>
            <div className={styles.Bnd}>
              <div className={styles.namaBnd}>
                <p className={styles.nama}>{props.ToPwtShort}</p>
                <p className={styles.jam}>{props.ToClock}</p>
              </div>
              <p className={styles.kota}>{props.ToCity}</p>
              <p className={styles.bndFull}>{props.ToBnd}</p>
            </div>
          </div>
          <div className={styles.harga}>
            <div>
              <p className={styles.textnormal}>Normal</p>
              <p className={styles.hrgNormal}>Rp {props.hrgNormal}</p>
            </div>
            <div>
              <p className={styles.bank}>CC Bank Mega</p>
              <p className={styles.hrgBank}>{props.hrgBank}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
