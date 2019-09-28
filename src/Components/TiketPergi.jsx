import React from 'react'
import styles from './TiketPergi.module.scss'
import Button from './Button'

export default function TiketPergi (props) {
  return (
    <div>
      <div className={styles.background}>
        <p className={styles.textTiket}>Tiket Pergi</p>
      </div>
      <div className={styles.body}>
        <div className={styles.card}>
          <div>
            <p className={styles.judul}>Berangkat</p>
            <p className={styles.nama}>{props.tobndName}</p>
            <p className={styles.kota}>{props.tocity}</p>
            <p className={styles.bndFull}>{props.tobndNameFull}</p>
            <div>
              <p className={styles.jam}>{props.toTime}</p>
              <p className={styles.bndFull}>Jumat, 30 Nov 2019</p>
            </div>
          </div>
          <div className={styles.imgPlane}>
            <img
              src={require('../Assets/plane.svg')}
              alt='plane'
              className={styles.plane}
            />
            <div className={styles.waktu}>
              <p className={styles.estimate}>{props.time}</p>
              <p className={styles.estimate}>{props.flight}</p>
            </div>
          </div>
          <div>
            <p className={styles.judul}>Tiba</p>
            <p className={styles.nama}>{props.frombndName}</p>
            <p className={styles.kota}>{props.fromcity}</p>
            <p className={styles.bndFull}>{props.frombndNameFull}</p>
            <div>
              <p className={styles.jam}>{props.fromTime}</p>
              <p className={styles.bndFull}>Sabtu, 1 Des 2019</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 10 }}>
          <div className={styles.cardcol}>
            <div className={styles.row}>
              <div>
                <img
                  src={require('../Assets/namaPesawat.png')}
                  alt='Nama-Pesawat'
                  className={styles.gambar}
                />
              </div>
              <div className={styles.namaPwt}>
                <p className={styles.kota}>Citilink QC 196</p>
                <p className={styles.bndFull}>Ekonomi</p>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.row}>
              <div>
                <p className={styles.teks}>1 Dewasa</p>
              </div>
              <div className={styles.namaPwt}>
                <div className={styles.row}>
                  <img
                    src={require('../Assets/plane.svg')}
                    alt='Pesawat'
                    className={styles.pesawat}
                  />
                  <p className={styles.teks}>Pajak Bandara</p>
                </div>
                <div className={styles.row}>
                  <img
                    src={require('../Assets/case.svg')}
                    alt='Pesawat'
                    className={styles.pesawat}
                  />
                  <p className={styles.teks}>Bagasi 20 Kg</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.pesan}>
            <div className={styles.total}>
              <p className={styles.teksTotal} >Total</p>
              <p className={styles.hrgTotal} >Rp {props.hrgTotal}</p>
            </div>
            <Button title='Pesan Sekarang' />
          </div>
        </div>
      </div>
    </div>
  )
}
