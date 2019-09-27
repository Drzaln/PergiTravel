import React from 'react'
import styles from './TiketPergi.module.scss'

export default function TiketPergi () {
  return (
    <div>
      <div className={styles.background}>
        <p className={styles.textTiket}>Tiket Pergi</p>
      </div>
      <div className={styles.body}>
        <div className={styles.card}>
          <div>
            <p className={styles.judul}>Berangkat</p>
            <p className={styles.nama}>CGK</p>
            <p className={styles.kota}>Jakarta</p>
            <p className={styles.bndFull}>Soekarno Hatta</p>
            <div>
              <p className={styles.jam}>00:35</p>
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
              <p className={styles.estimate}>2h</p>
              <p className={styles.estimate}>Langsung</p>
            </div>
          </div>
          <div>
            <p className={styles.judul}>Berangkat</p>
            <p className={styles.nama}>CGK</p>
            <p className={styles.kota}>Jakarta</p>
            <p className={styles.bndFull}>Soekarno Hatta</p>
            <div>
              <p className={styles.jam}>00:35</p>
              <p className={styles.bndFull}>Jumat, 30 Nov 2019</p>
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

          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
